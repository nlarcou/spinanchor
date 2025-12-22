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
    <section id="how-we-work" className="relative py-12 sm:py-16 lg:py-32 bg-muted/10 overflow-hidden">
      {/* Top border for separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      {/* Subtle lines pattern */}
      <div className="absolute inset-0 bg-lines-pattern pointer-events-none opacity-60" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A structured delivery process focused on clarity, risk reduction, and operational readiness.
          </p>
        </div>

        {/* Steps with visual timeline */}
        <div className="max-w-5xl">
          <div className="relative">
            {/* Timeline connector - vertical line (desktop) */}
            <div className="hidden lg:block absolute left-[99px] top-8 bottom-8 w-[2px]">
              {/* Gradient line */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5" />
              {/* Animated pulse overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-50" />
            </div>

            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step row */}
                <div className="grid lg:grid-cols-[200px_1fr] gap-3 sm:gap-4 lg:gap-12 py-5 sm:py-8 lg:py-10">
                  {/* Left: Timeline node + Number and Title */}
                  <div className="relative">
                    {/* Timeline node - positioned on the line */}
                    <div className="hidden lg:block absolute left-[91px] top-3 z-10">
                      {/* Outer ring */}
                      <div className="w-[18px] h-[18px] rounded-full border-2 border-primary/30 bg-background flex items-center justify-center">
                        {/* Inner dot */}
                        <div className="w-[8px] h-[8px] rounded-full bg-primary/40" />
                      </div>
                    </div>
                    
                    {/* Mobile timeline indicator */}
                    <div className="lg:hidden flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-[10px] h-[10px] rounded-full border-2 border-primary/40 bg-background flex items-center justify-center">
                        <div className="w-[4px] h-[4px] rounded-full bg-primary/50" />
                      </div>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/20 to-transparent" />
                    </div>

                    <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-primary/20 block mb-1.5 sm:mb-2 lg:mb-3">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-medium text-foreground leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Right: Description with subtle connector */}
                  <div className="lg:pt-12 relative">
                    {/* Horizontal connector line (desktop only) */}
                    <div className="hidden lg:block absolute left-0 top-[52px] w-8 h-[1px] -translate-x-full">
                      <div className="w-full h-full bg-gradient-to-r from-transparent to-primary/15" />
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Divider - except after last item */}
                {index < steps.length - 1 && (
                  <div className="border-b border-border/40 lg:ml-[120px]" />
                )}
              </div>
            ))}
          </div>

          {/* Process flow summary - abstract visual at bottom - hidden on small mobile */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border/30">
            <div className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-4 overflow-x-auto pb-2">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-shrink-0">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-primary/20 flex items-center justify-center bg-background">
                      <span className="text-[10px] sm:text-xs lg:text-sm font-heading font-semibold text-primary/60">
                        {step.number}
                      </span>
                    </div>
                    <span className="hidden lg:block text-[10px] text-muted-foreground/60 mt-2 max-w-[80px] text-center leading-tight">
                      {step.title.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>
                  
                  {/* Connector arrow */}
                  {index < steps.length - 1 && (
                    <div className="w-4 sm:w-6 lg:w-12 h-[2px] mx-0.5 sm:mx-1 lg:mx-2 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
                      {/* Arrow head */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[2px] sm:border-t-[3px] border-b-[2px] sm:border-b-[3px] border-l-[4px] sm:border-l-[5px] border-t-transparent border-b-transparent border-l-primary/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12">
          <Button 
            variant="accent"
            size="lg"
            className="font-medium h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
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
