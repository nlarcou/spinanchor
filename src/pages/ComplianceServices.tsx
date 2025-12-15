import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ComplianceServices = () => {
  const deliverables = [
    "Jurisdiction-specific policies and procedures",
    "AML and KYC frameworks aligned with regulatory expectations",
    "Risk assessments and mitigation strategies",
    "Responsible gaming programs and player protection measures",
    "Compliance audits and regulator-ready reporting",
    "Ongoing compliance advisory and operational support"
  ];

  const howWeWork = [
    { step: "01", title: "Regulatory gap assessment", description: "We review your current operations against regulatory requirements to identify gaps and priorities." },
    { step: "02", title: "Framework design", description: "We develop tailored policies, procedures, and controls that meet regulatory expectations." },
    { step: "03", title: "Implementation support", description: "We help integrate compliance frameworks into your day-to-day operations." },
    { step: "04", title: "Ongoing monitoring", description: "We provide continued support for audits, reporting, and regulatory changes." }
  ];

  const faqs = [
    { question: "What compliance areas do you cover?", answer: "We cover AML/KYC, responsible gaming, data protection, regulatory reporting, and general operational compliance across major iGaming jurisdictions." },
    { question: "Can you help with existing compliance gaps?", answer: "Yes, we regularly support operators who need to strengthen their compliance frameworks or address specific regulatory concerns." },
    { question: "Do you provide ongoing compliance support?", answer: "Yes, we offer retainer arrangements for ongoing advisory, audit preparation, and regulatory change management." },
    { question: "How do you handle multi-jurisdiction compliance?", answer: "We develop unified frameworks that meet the requirements of multiple jurisdictions while accounting for local variations." }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground tracking-wide mb-6">
              Compliance and AML
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-8">
              iGaming compliance services across regulated jurisdictions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We help iGaming businesses design, implement, and maintain compliant operations across multiple regulatory environments. Our approach goes beyond documentation, focusing on practical, auditable compliance that works in real operations.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                variant="accent"
                size="lg"
                className="font-medium px-8"
                asChild
              >
                <Link to="/contact?service=compliance">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link 
                to="/igaming-services"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors py-3"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10">
              What we deliver
            </h2>
            <ul className="space-y-4">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* How We Work */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10">
              How we work
            </h2>
            <div className="space-y-8">
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
      <section className="py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10">
              Common questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/40 rounded-lg px-6 bg-background"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-24 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to strengthen your compliance framework?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a discovery call to discuss your compliance requirements.
            </p>
            <Button 
              variant="accent"
              size="lg"
              className="font-medium px-8"
              asChild
            >
              <Link to="/contact?service=discovery">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceServices;