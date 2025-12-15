import { Card, CardContent } from "@/components/ui/card";

const HowWeWork = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Assessment and Scope Definition",
      description: "We begin with a detailed review of your business model, target markets, and operational requirements. This assessment defines the scope of work and establishes clear deliverables for the engagement."
    },
    {
      number: 2,
      title: "Jurisdiction and Regulatory Strategy",
      description: "We analyse jurisdiction options based on your business objectives, risk profile, and market access needs. A tailored regulatory strategy is developed to align licensing, compliance, and corporate requirements."
    },
    {
      number: 3,
      title: "Documentation and Implementation",
      description: "We prepare all required documentation, policies, and operational frameworks to meet regulatory standards. Implementation covers compliance programmes, corporate structures, and payment infrastructure preparation."
    },
    {
      number: 4,
      title: "Submission, Setup, and Enablement",
      description: "We manage application submissions and coordinate with regulators, service providers, and banking partners. Operational setup is completed to ensure readiness for market entry upon approval."
    },
    {
      number: 5,
      title: "Ongoing Support and Optimisation",
      description: "We provide continued support for regulatory reporting, compliance maintenance, and operational improvements. This ensures sustained compliance and adapts to evolving regulatory requirements."
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            NSGS Global follows a structured, practical delivery process designed for regulated iGaming environments. Our approach focuses on clarity, risk reduction, and operational readiness across licensing, compliance, payments, and corporate setup.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step) => (
            <Card key={step.number} className="border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-heading font-semibold">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-10 leading-relaxed">
          This structured approach provides transparency, accountability, and predictable progress throughout the engagement.
        </p>
      </div>
    </section>
  );
};

export default HowWeWork;
