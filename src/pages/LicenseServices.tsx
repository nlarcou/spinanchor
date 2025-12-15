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

const LicenseServices = () => {
  const deliverables = [
    "Full license application preparation and submission",
    "License renewals and variation applications",
    "Regulator liaison and query management",
    "Multi-jurisdiction licensing strategies",
    "Documentation and evidence package preparation",
    "License condition monitoring and compliance"
  ];

  const howWeWork = [
    { step: "01", title: "Jurisdiction evaluation", description: "We assess your business model and recommend suitable jurisdictions based on your objectives." },
    { step: "02", title: "Application preparation", description: "We prepare all required documentation, policies, and evidence packages for submission." },
    { step: "03", title: "Submission and engagement", description: "We manage the application process and handle all regulator communications." },
    { step: "04", title: "Ongoing maintenance", description: "We support license renewals, variations, and ongoing regulatory requirements." }
  ];

  const faqs = [
    { question: "How long does the licensing process take?", answer: "Timelines vary by jurisdiction. Malta typically takes 6-12 months, while Curaçao can be faster. We provide realistic timelines based on your specific situation during the initial assessment." },
    { question: "Can you guarantee license approval?", answer: "No reputable consultancy can guarantee regulatory approval. We prepare thorough applications and manage the process professionally, but final decisions rest with regulators." },
    { question: "Do you handle multiple jurisdictions?", answer: "Yes, we support multi-jurisdiction strategies and can coordinate parallel applications where appropriate for your business objectives." },
    { question: "What documentation is typically required?", answer: "Requirements vary by jurisdiction but generally include corporate documents, business plans, compliance frameworks, financial projections, and personal declarations from key individuals." }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground tracking-wide mb-6">
              Licensing and Regulatory Support
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-8">
              iGaming license applications and regulatory support
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We guide iGaming operators and suppliers through the licensing process from start to finish. Whether you need a new license, a renewal, or multi-jurisdiction coverage, we handle the complexity so you can focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                variant="accent"
                size="lg"
                className="font-medium px-8"
                asChild
              >
                <Link to="/contact?service=license">
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
              Ready to discuss your licensing needs?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a discovery call to explore how we can support your application.
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

export default LicenseServices;