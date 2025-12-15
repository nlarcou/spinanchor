import { Card, CardContent } from "@/components/ui/card";
import { Target, Globe2, Layers, UserCheck, Cog, ArrowRightLeft } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Target,
      title: "Specialised iGaming Focus",
      description: "Our team works exclusively with gaming businesses, understanding both regulatory expectations and operational realities."
    },
    {
      icon: Globe2,
      title: "Multi Jurisdiction Experience",
      description: "Hands on experience across Europe and beyond, with practical insight into regulator and provider requirements."
    },
    {
      icon: Layers,
      title: "Integrated Service Model",
      description: "Licensing, compliance, payments, and corporate services delivered as a coordinated solution."
    },
    {
      icon: UserCheck,
      title: "Dedicated Account Management",
      description: "A single point of contact who understands your setup and objectives."
    },
    {
      icon: Cog,
      title: "Operational Mindset",
      description: "We focus on what works in real operations, not just theoretical compliance."
    },
    {
      icon: ArrowRightLeft,
      title: "End to End Support",
      description: "From initial strategy to ongoing support, we stay involved beyond the license."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why clients choose NSGS Global
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            iGaming businesses choose NSGS Global for our practical approach, jurisdictional knowledge, and ability to deliver across compliance, payments, and operations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;