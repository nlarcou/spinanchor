import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard, Shield, Globe, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProcessingServices = () => {
  const deliverables = [
    { icon: CreditCard, text: "Payment gateway evaluation and integration support" },
    { icon: Shield, text: "PSP onboarding coordination and documentation" },
    { icon: Globe, text: "Transaction monitoring and reporting frameworks" },
    { icon: Zap, text: "Fraud prevention strategy and tool guidance" },
    { icon: CreditCard, text: "Multi-currency processing enablement" },
    { icon: Shield, text: "Chargeback management and dispute coordination" }
  ];

  const tiers = [
    {
      id: "tier1",
      name: "Tier 1",
      title: "Enterprise PSPs",
      description: "Premium global payment providers for high-volume operators with established track records.",
      features: [
        "Global card acquiring networks",
        "Enterprise-grade fraud protection",
        "Multi-jurisdiction support",
        "Dedicated account management",
        "Premium SLA guarantees"
      ],
      bestFor: "Licensed operators with €1M+ monthly volume"
    },
    {
      id: "tier2",
      name: "Tier 2",
      title: "Regional Specialists",
      description: "Focused payment providers with deep expertise in specific markets and payment methods.",
      features: [
        "Regional payment method coverage",
        "Local currency optimization",
        "Market-specific compliance",
        "Competitive processing rates",
        "Flexible integration options"
      ],
      bestFor: "Operators targeting specific regions"
    },
    {
      id: "tier3",
      name: "Tier 3",
      title: "Emerging Solutions",
      description: "Innovative payment providers including crypto and alternative payment methods.",
      features: [
        "Cryptocurrency processing",
        "Alternative payment methods",
        "Faster onboarding timelines",
        "Startup-friendly terms",
        "Emerging market access"
      ],
      bestFor: "New operators or those seeking alternative methods"
    }
  ];

  const howWeWork = [
    { step: "01", title: "Requirements assessment", description: "We analyse your payment needs, target markets, and transaction volumes to define requirements." },
    { step: "02", title: "Provider introductions", description: "We introduce you to suitable PSPs and payment gateways based on your profile." },
    { step: "03", title: "Onboarding support", description: "We coordinate documentation and support you through provider due diligence." },
    { step: "04", title: "Optimisation guidance", description: "We advise on transaction monitoring, fraud prevention, and ongoing improvements." }
  ];

  const faqs = [
    { question: "Can you guarantee PSP approval?", answer: "No, we provide introductions and support the onboarding process, but approval decisions rest with the payment providers based on their own risk assessments." },
    { question: "Which payment providers do you work with?", answer: "We maintain relationships with multiple PSPs and gateways that serve the iGaming industry. We match providers to your specific requirements and jurisdiction." },
    { question: "Do you help with cryptocurrency payments?", answer: "Yes, we can advise on crypto payment integration where appropriate for your business model and regulatory environment." },
    { question: "What about chargebacks and disputes?", answer: "We help establish processes for chargeback management and can advise on dispute resolution strategies." }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm text-muted-foreground tracking-wide mb-3 sm:mb-4">
              Payments and PSP Enablement
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Payment and PSP enablement for iGaming operators
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              We support iGaming businesses in establishing and optimising their payment infrastructure. From PSP introductions to integration coordination, we help you navigate the complexities of iGaming payments without overpromising outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
              <Button 
                variant="accent"
                size="lg"
                className="font-medium h-12 px-6 sm:px-8 w-full sm:w-auto justify-center"
                asChild
              >
                <Link to="/contact?service=processing">
                  Request Consultation
                </Link>
              </Button>
              <Link 
                to="/igaming-services"
                className="inline-flex items-center justify-center sm:justify-start text-sm text-muted-foreground hover:text-foreground transition-colors py-3"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Selection - Tabs for mobile, grid for desktop */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
            Payment provider tiers
          </h2>
          <p className="text-muted-foreground mb-8 sm:mb-10 max-w-2xl">
            We work with payment providers across different tiers to match your business profile and requirements.
          </p>
          
          {/* Mobile: Tabs */}
          <div className="lg:hidden">
            <Tabs defaultValue="tier1" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-6 h-auto p-1">
                {tiers.map((tier) => (
                  <TabsTrigger 
                    key={tier.id} 
                    value={tier.id}
                    className="text-xs sm:text-sm py-2.5 data-[state=active]:bg-background"
                  >
                    {tier.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {tiers.map((tier) => (
                <TabsContent key={tier.id} value={tier.id} className="mt-0">
                  <div className="bg-background border border-border/40 rounded-xl p-5 sm:p-6">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-2">
                      {tier.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {tier.description}
                    </p>
                    <ul className="space-y-3 mb-5">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border/40">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Best for:</span> {tier.bestFor}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div 
                key={tier.id}
                className="bg-background border border-border/40 rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-4">
                  {tier.name}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {tier.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Best for:</span> {tier.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* What We Deliver - Cards on mobile */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-8 sm:mb-10">
              What we deliver
            </h2>
            
            {/* Mobile: Stacked cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 sm:p-5 bg-muted/30 rounded-lg border border-border/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* How We Work - Accordion on mobile, timeline on desktop */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-8 sm:mb-10">
              How we work
            </h2>
            
            {/* Mobile: Accordion */}
            <div className="lg:hidden">
              <Accordion type="single" collapsible defaultValue="step-0" className="space-y-3">
                {howWeWork.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`step-${index}`}
                    className="border border-border/40 rounded-lg px-4 sm:px-5 bg-background"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-heading text-primary flex-shrink-0">
                          {item.step}
                        </span>
                        <span className="font-medium text-foreground text-sm sm:text-base">
                          {item.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 pl-9">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Desktop: Timeline */}
            <div className="hidden lg:block space-y-8">
              {howWeWork.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <span className="text-2xl font-heading text-primary/30 flex-shrink-0 w-10">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-heading font-medium text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Common Questions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-8 sm:mb-10">
              Common questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/40 rounded-lg px-4 sm:px-6 bg-muted/20"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4 sm:py-5 text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Ready to discuss your payment infrastructure?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Book a discovery call to explore payment solutions for your operation.
            </p>
            <Button 
              variant="accent"
              size="lg"
              className="font-medium h-12 px-6 sm:px-8 w-full sm:w-auto"
              asChild
            >
              <Link to="/contact?service=discovery">
                Book a Discovery Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessingServices;