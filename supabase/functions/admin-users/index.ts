import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Validation schemas
const createUserSchema = z.object({
  action: z.literal("create"),
  email: z.string().email("Invalid email format").max(255, "Email too long"),
  password: z.string().min(8, "Password must be at least 8 characters").max(72, "Password too long"),
  role: z.enum(["user", "admin"]).optional().default("user"),
  full_name: z.string().max(200, "Name too long").optional(),
});

const updateUserSchema = z.object({
  action: z.literal("update"),
  userId: z.string().uuid("Invalid user ID"),
  email: z.string().email("Invalid email format").max(255, "Email too long").optional(),
  role: z.enum(["user", "admin"]).optional(),
});

const setPasswordSchema = z.object({
  action: z.literal("setPassword"),
  userId: z.string().uuid("Invalid user ID"),
  password: z.string().min(8, "Password must be at least 8 characters").max(72, "Password too long"),
});

const deleteUserSchema = z.object({
  action: z.literal("delete"),
  userId: z.string().uuid("Invalid user ID"),
});

const listSchema = z.object({
  action: z.literal("list"),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.log("Unauthorized: No auth header provided");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create client with user's token to verify admin status
    const supabaseUser = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY") || Deno.env.get("SUPABASE_PUBLISHABLE_KEY")!, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: { user }, error: authError } = await supabaseUser.auth.getUser();
    if (authError || !user) {
      console.log("Unauthorized: Invalid user token", authError?.message);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Verify admin role using service client
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    const { data: roleData } = await supabaseAdmin
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      console.log("Forbidden: User is not an admin", user.id);
      return new Response(JSON.stringify({ error: "Admin access required" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const { action } = body;

    switch (action) {
      case "list": {
        const parseResult = listSchema.safeParse(body);
        if (!parseResult.success) {
          console.log("Validation error for list:", parseResult.error.message);
          return new Response(JSON.stringify({ error: "Invalid request" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const { data: users, error } = await supabaseAdmin.auth.admin.listUsers();
        if (error) throw error;
        
        // Get roles for all users
        const { data: roles } = await supabaseAdmin.from("user_roles").select("*");
        const rolesMap = new Map(roles?.map(r => [r.user_id, r.role]) || []);
        
        const enrichedUsers = users.users.map(u => ({
          id: u.id,
          email: u.email,
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at,
          role: rolesMap.get(u.id) || "user",
        }));
        
        console.log("Listed users successfully, count:", enrichedUsers.length);
        return new Response(JSON.stringify({ users: enrichedUsers }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      case "create": {
        const parseResult = createUserSchema.safeParse(body);
        if (!parseResult.success) {
          console.log("Validation error for create:", parseResult.error.message);
          return new Response(JSON.stringify({ error: parseResult.error.errors[0]?.message || "Invalid input" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const { email, password, role, full_name } = parseResult.data;
        
        const { data: newUser, error } = await supabaseAdmin.auth.admin.createUser({
          email,
          password,
          email_confirm: true,
          user_metadata: { full_name, must_change_password: true },
        });
        if (error) throw error;

        // Set role if admin
        if (role === "admin") {
          await supabaseAdmin.from("user_roles").insert({
            user_id: newUser.user.id,
            role: "admin",
          });
        }

        console.log("Created user successfully:", newUser.user.id);
        return new Response(JSON.stringify({ user: newUser.user }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      case "update": {
        const parseResult = updateUserSchema.safeParse(body);
        if (!parseResult.success) {
          console.log("Validation error for update:", parseResult.error.message);
          return new Response(JSON.stringify({ error: parseResult.error.errors[0]?.message || "Invalid input" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const { userId, email, role } = parseResult.data;
        
        if (email) {
          const { error } = await supabaseAdmin.auth.admin.updateUserById(userId, { email });
          if (error) throw error;
        }

        // Update role
        if (role === "admin") {
          await supabaseAdmin.from("user_roles").upsert({
            user_id: userId,
            role: "admin",
          }, { onConflict: "user_id" });
        } else if (role === "user") {
          await supabaseAdmin.from("user_roles").delete().eq("user_id", userId);
        }

        console.log("Updated user successfully:", userId);
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      case "setPassword": {
        const parseResult = setPasswordSchema.safeParse(body);
        if (!parseResult.success) {
          console.log("Validation error for setPassword:", parseResult.error.message);
          return new Response(JSON.stringify({ error: parseResult.error.errors[0]?.message || "Invalid input" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const { userId, password } = parseResult.data;
        
        const { error } = await supabaseAdmin.auth.admin.updateUserById(userId, {
          password,
          user_metadata: { must_change_password: true },
        });
        if (error) throw error;

        console.log("Set password successfully for user:", userId);
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      case "delete": {
        const parseResult = deleteUserSchema.safeParse(body);
        if (!parseResult.success) {
          console.log("Validation error for delete:", parseResult.error.message);
          return new Response(JSON.stringify({ error: parseResult.error.errors[0]?.message || "Invalid input" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const { userId } = parseResult.data;
        
        // Prevent self-deletion
        if (userId === user.id) {
          return new Response(JSON.stringify({ error: "Cannot delete yourself" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);
        if (error) throw error;

        console.log("Deleted user successfully:", userId);
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      default:
        console.log("Invalid action received:", action);
        return new Response(JSON.stringify({ error: "Invalid action" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }
  } catch (error) {
    console.error("Error in admin-users function:", error.message);
    return new Response(JSON.stringify({ error: "An error occurred processing your request" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
