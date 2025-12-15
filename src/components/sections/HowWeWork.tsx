const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Assessment and Scope Definition",
      description: "We begin with a detailed review of your business model, target markets, and operational requirements. This assessment defines the scope of work and establishes clear deliverables for the engagement."
    },
    {
      number: "02",
      title: "Jurisdiction and Regulatory Strategy",
      description: "We analyse jurisdiction options based on your business objectives, risk profile, and market access needs. A tailored regulatory strategy is developed to align licensing, compliance, and corporate requirements."
    },
    {
      number: "03",
      title: "Documentation and Implementation",
      description: "We prepare all required documentation, policies, and operational frameworks to meet regulatory standards. Implementation covers compliance programmes, corporate structures, and payment infrastructure preparation."
    },
    {
      number: "04",
      title: "Submission, Setup, and Enablement",
      description: "We manage application submissions and coordinate with regulators, service providers, and banking partners. Operational setup is completed to ensure readiness for market entry upon approval."
    },
    {
      number: "05",
      title: "Ongoing Support and Optimisation",
      description: "We provide continued support for regulatory reporting, compliance maintenance, and operational improvements. This ensures sustained compliance and adapts to evolving regulatory requirements."
    }
  ];

  return (
    <section id="how-we-work" className="py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A structured, practical delivery process designed for regulated iGaming environments. Our approach focuses on clarity, risk reduction, and operational readiness across licensing, compliance, payments, and corporate setup.
          </p>
        </div>

        {/* Steps - Simple stacked layout, no cards */}
        <div className="max-w-4xl space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8">
              <div className="flex-shrink-0">
                <span className="text-3xl font-heading font-semibold text-primary/30">
                  {step.number}
                </span>
              </div>
              <div className="pt-1">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mt-16 pt-8 border-t border-border/40">
          <p className="text-muted-foreground leading-relaxed">
            This structured approach provides transparency, accountability, and predictable progress throughout the engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;