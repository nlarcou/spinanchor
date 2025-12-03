import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const WEBSITE_CONTENT = `
# NSGS Global - Next Step Gaming Services

## About Us
NSGS Global (Next Step Gaming Services) is your partner in iGaming excellence. Our tagline is "Your Next Step in Gaming Success". We provide tailored iGaming solutions in licensing, operations, platform setup, payment infrastructure, and compliance. We help you from license to launch, and beyond.

## Contact Information
- Address: Van Dyke, 6 / Solonion Building / 6037, Larnaca, Cyprus
- Phone: +357 96 281 311
- WhatsApp: +357 96 281 311
- Email: info@nsgs.pro
- Partners Email: partners@nsgs.pro

## Our Services

### 1. iGaming Compliance Services
Comprehensive compliance solutions to ensure your iGaming operations meet all regulatory requirements. We help you navigate complex compliance landscapes across multiple jurisdictions.

### 2. iGaming Corporate Services
Full corporate support for iGaming businesses including company formation, corporate structuring, and ongoing administrative services.

### 3. iGaming License Services
Expert assistance in obtaining and maintaining iGaming licenses across multiple jurisdictions. We guide you through the entire licensing process.

### 4. iGaming Processing Services
Payment processing solutions tailored for the iGaming industry. We help you set up reliable and compliant payment systems.

### 5. iGaming Banking Services
Banking solutions specifically designed for iGaming operators. We help you establish banking relationships and manage financial operations.

## Jurisdictions We Support
We support licensing and compliance in multiple jurisdictions including Malta, Cyprus, Curacao, Gibraltar, Isle of Man, and others.

## Industry Events
NSGS Global regularly attends major iGaming events including: IMGL, SBC Summit, SiGMA, iGB Live, ICE, and Casino Beats Summit.

## Why Choose Us
- Expert team with deep iGaming industry knowledge
- End-to-end solutions from licensing to operations
- Strong relationships across multiple jurisdictions
- Personalized service tailored to your needs
`;

const SYSTEM_PROMPT = `You are a helpful assistant for NSGS Global (Next Step Gaming Services), an iGaming consulting company. 

Your role is to answer questions about NSGS Global's services, contact information, and general iGaming compliance inquiries based ONLY on the following website content:

${WEBSITE_CONTENT}

IMPORTANT RULES:
1. Only answer questions that can be answered using the website content above.
2. Be helpful, professional, and concise.
3. If a question CANNOT be answered based on the website content (e.g., specific pricing, detailed legal advice, personal account inquiries, or topics unrelated to NSGS Global's services), respond with EXACTLY this format:
   [CANNOT_ANSWER]: Brief explanation of why you cannot answer and suggest they submit an inquiry.
4. Do not make up information that is not in the website content.
5. Keep responses friendly and encourage users to contact NSGS Global for detailed inquiries.
6. For general questions about iGaming that relate to NSGS services, you can provide helpful context while mentioning NSGS can assist.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, userEmail, userName } = await req.json();
    
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    console.log("Processing chat message:", message.substring(0, 100));

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Service is busy. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI service error");
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process your request.";
    
    console.log("AI response:", aiResponse.substring(0, 100));

    // Check if AI cannot answer the question
    const cannotAnswer = aiResponse.includes("[CANNOT_ANSWER]");
    
    if (cannotAnswer) {
      // Log the inquiry to contact_requests
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: insertError } = await supabase.from("contact_requests").insert({
        first_name: userName || "Chat",
        last_name: "User",
        email: userEmail || "chatbot@nsgs.pro",
        message: `[Chatbot Inquiry] ${message}`,
        service: "General Inquiry",
      });

      if (insertError) {
        console.error("Error logging contact request:", insertError);
      } else {
        console.log("Contact request logged successfully");
      }

      // Clean up the response for the user
      const cleanResponse = aiResponse.replace("[CANNOT_ANSWER]:", "").trim();
      
      return new Response(
        JSON.stringify({ 
          response: cleanResponse + "\n\nI've submitted an inquiry on your behalf. Our team will get back to you soon!",
          inquiryLogged: true 
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ response: aiResponse, inquiryLogged: false }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Chat agent error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "An error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
