import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Specialised iGaming Focus",
      description: "Our team works exclusively with gaming businesses, understanding both regulatory expectations and operational realities."
    },
    {
      title: "Multi-Jurisdiction Experience",
      description: "Hands-on experience across Europe and beyond, with practical insight into regulator and provider requirements."
    },
    {
      title: "Integrated Service Model",
      description: "Licensing, compliance, payments, and corporate services delivered as a coordinated solution."
    },
    {
      title: "Dedicated Account Management",
      description: "A single point of contact who understands your setup and objectives."
    },
    {
      title: "Operational Mindset",
      description: "We focus on what works in real operations, not just theoretical compliance."
    },
    {
      title: "End-to-End Support",
      description: "From initial strategy to ongoing support, we stay involved beyond the license."
    }
  ];

  return (
    <section id="about" className="py-28 lg:py-36 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            Why clients choose NSGS Global
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            iGaming businesses choose us for our practical approach, jurisdictional knowledge, and ability to deliver across compliance, payments, and operations.
          </p>
        </div>

        {/* Reasons - Simple stacked layout, no cards */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;