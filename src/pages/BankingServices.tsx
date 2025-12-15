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

const BankingServices = () => {
  const deliverables = [
    "Merchant account introductions and application support",
    "Banking relationship coordination and guidance",
    "Player funds structure advisory",
    "Financial governance and treasury guidance",
    "Account opening documentation support",
    "Ongoing banking relationship management"
  ];

  const howWeWork = [
    { step: "01", title: "Needs assessment", description: "We understand your banking requirements, transaction volumes, and jurisdiction considerations." },
    { step: "02", title: "Institution matching", description: "We introduce you to banks and financial institutions that serve iGaming businesses." },
    { step: "03", title: "Application support", description: "We help prepare documentation and support you through the due diligence process." },
    { step: "04", title: "Relationship coordination", description: "We provide ongoing guidance for maintaining and optimising banking relationships." }
  ];

  const faqs = [
    { question: "Can you guarantee bank account approval?", answer: "No, banking decisions are made by the institutions based on their own risk policies. We provide introductions and support, but cannot guarantee outcomes." },
    { question: "Which banks do you work with?", answer: "We maintain relationships with banks and EMIs that serve the iGaming sector across various jurisdictions. We match institutions to your specific profile." },
    { question: "How long does bank onboarding take?", answer: "Timelines vary significantly by institution and your specific situation. We provide realistic expectations based on current market conditions." },
    { question: "Do you help with player fund segregation?", answer: "Yes, we advise on player fund structures and help ensure compliance with regulatory requirements for fund segregation." }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground tracking-wide mb-6">
              Banking and Treasury Support
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-8">
              Banking and treasury support for iGaming businesses
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We help iGaming operators navigate the challenges of securing banking relationships and managing treasury operations. Our role is to provide introductions, guidance, and coordination—not guarantees—so you can approach banking with realistic expectations and strong preparation.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                variant="accent"
                size="lg"
                className="font-medium px-8"
                asChild
              >
                <Link to="/contact?service=banking">
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
              Ready to discuss your banking requirements?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a discovery call to explore banking options for your operation.
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

export default BankingServices;