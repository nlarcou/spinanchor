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

const CorporateServices = () => {
  const deliverables = [
    "Company incorporation in iGaming-friendly jurisdictions",
    "Corporate governance and board structuring",
    "Director and nominee services",
    "Company secretarial and registered office services",
    "Tax structuring coordination and advisory",
    "Ongoing corporate administration and maintenance"
  ];

  const howWeWork = [
    { step: "01", title: "Structure assessment", description: "We analyse your business requirements and recommend appropriate corporate structures and jurisdictions." },
    { step: "02", title: "Entity setup", description: "We manage company incorporation, including all required documentation and registrations." },
    { step: "03", title: "Governance framework", description: "We establish governance structures, director arrangements, and compliance frameworks." },
    { step: "04", title: "Ongoing administration", description: "We provide continued support for corporate filings, changes, and maintenance." }
  ];

  const faqs = [
    { question: "Which jurisdictions do you cover for incorporation?", answer: "We support incorporation in major iGaming-friendly jurisdictions including Malta, Cyprus, Gibraltar, Isle of Man, and others based on your specific requirements." },
    { question: "Do you provide director services?", answer: "Yes, we can arrange professional director and nominee services where appropriate for your corporate structure." },
    { question: "Can you help with existing companies?", answer: "Yes, we support restructuring, governance improvements, and ongoing administration for existing entities." },
    { question: "What about tax structuring?", answer: "We coordinate with tax advisors to ensure your corporate structure is optimised for your business model while remaining compliant." }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground tracking-wide mb-6">
              Corporate Services
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-8">
              Corporate structuring and governance for iGaming businesses
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We support iGaming operators and suppliers with company formation, governance, and ongoing corporate administration. Our services ensure your business is structured correctly from day one and maintained to the highest standards.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                variant="accent"
                size="lg"
                className="font-medium px-8"
                asChild
              >
                <Link to="/contact?service=corporate">
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
              Ready to discuss your corporate structure?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a discovery call to explore the right setup for your business.
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

export default CorporateServices;