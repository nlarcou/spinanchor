import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does NSGS deliver — advisory or execution?",
    answer: "We provide advisory services, coordination, and introductions to support your iGaming operations. We do not act as your licensed provider, regulator, or financial institution. Our role is to guide, prepare, and connect you with the right partners."
  },
  {
    question: "Who are your typical clients?",
    answer: "We work with iGaming operators, platform providers, affiliates, and investors at various stages. This includes new ventures seeking their first license, established operators expanding into new jurisdictions, and businesses requiring ongoing compliance support."
  },
  {
    question: "Which jurisdictions do you support?",
    answer: "We support licensing and compliance across major iGaming jurisdictions including Malta, Isle of Man, Gibraltar, Curacao, Kahnawake, and several emerging markets. Our network covers over 15 regulatory frameworks globally."
  },
  {
    question: "What is included in your licensing support?",
    answer: "We assist with license application preparation, documentation, regulatory submissions, and ongoing compliance requirements. We coordinate with regulators on your behalf and support you through the entire application lifecycle."
  },
  {
    question: "Do you help with payments and banking?",
    answer: "Yes, we provide introductions to payment service providers and banking partners that serve the iGaming sector. We support onboarding coordination but cannot guarantee approvals, as these decisions rest with the financial institutions."
  },
  {
    question: "How do you handle confidentiality?",
    answer: "All inquiries and engagements are treated as confidential by default. We are happy to sign a mutual NDA before any detailed discussions. Your business information is never shared with third parties without your explicit consent."
  }
];

interface FAQProps {
  className?: string;
  variant?: "default" | "compact";
}

const FAQ = ({ className = "", variant = "default" }: FAQProps) => {
  const isCompact = variant === "compact";

  return (
    <section id="faq" className={`py-12 sm:py-16 lg:py-20 ${isCompact ? "bg-background" : "bg-muted/20"} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4 text-center">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-center mb-8 sm:mb-10">
            Common questions about our services and how we work.
          </p>
          
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/40 rounded-lg px-4 sm:px-6 bg-background"
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
  );
};

export default FAQ;