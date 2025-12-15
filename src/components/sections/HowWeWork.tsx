import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Assessment and Scope Definition",
      description: "We review your business model, target markets, and operational requirements. This defines the scope of work and establishes clear deliverables."
    },
    {
      number: "02",
      title: "Jurisdiction and Regulatory Strategy",
      description: "We analyse jurisdiction options based on your objectives and risk profile. A tailored strategy aligns licensing, compliance, and corporate requirements."
    },
    {
      number: "03",
      title: "Documentation and Implementation",
      description: "We prepare all required documentation, policies, and frameworks to meet regulatory standards. Implementation covers compliance, corporate structures, and payments."
    },
    {
      number: "04",
      title: "Submission, Setup, and Enablement",
      description: "We manage submissions and coordinate with regulators and service providers. Operational setup ensures readiness for market entry upon approval."
    },
    {
      number: "05",
      title: "Ongoing Support and Optimisation",
      description: "We provide continued support for regulatory reporting and compliance maintenance. This ensures sustained compliance as requirements evolve."
    }
  ];

  return (
    <section id="how-we-work" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A structured delivery process focused on clarity, risk reduction, and operational readiness.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl">
          {steps.map((step, index) => (
            <div key={step.number}>
              {/* Step row - two columns on desktop */}
              <div className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-12 py-8 lg:py-10">
                {/* Left: Number and Title */}
                <div>
                  <span className="text-3xl lg:text-4xl font-heading text-primary/25 block mb-2 lg:mb-3">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-lg font-medium text-foreground leading-snug">
                    {step.title}
                  </h3>
                </div>
                
                {/* Right: Description */}
                <div className="lg:pt-12">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Divider - except after last item */}
              {index < steps.length - 1 && (
                <div className="border-b border-border/40" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Button 
            variant="accent"
            size="lg"
            className="font-medium h-12 px-8"
            asChild
          >
            <Link to="/contact?service=discovery">
              Book a Discovery Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;