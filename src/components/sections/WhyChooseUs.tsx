import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe2, Clock, Shield, Lightbulb, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry Experts",
      description: "Our team brings years of specialized experience across multiple industries and technologies."
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Worldwide presence with local expertise, ensuring seamless service delivery anywhere."
    },
    {
      icon: Clock,
      title: "Rapid Delivery",
      description: "Fast turnaround times without compromising on quality or attention to detail."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security and full regulatory compliance across all our services."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 customer support with dedicated account managers for personalized service."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge solutions using the latest technologies and industry best practices."
    },
    {
      icon: HeartHandshake,
      title: "Trusted Partnership",
      description: "Building long-term relationships based on trust, transparency, and mutual success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Why
            </h2>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Why our clients choose us
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Seven key reasons why businesses worldwide trust SpinAnchor as their preferred 
              digital solutions and corporate services provider:
            </p>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Why choose SpinAnchor"
                className="rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Content - Reasons Grid */}
          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">
                          {reason.title}
                        </h4>
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
      </div>
    </section>
  );
};

export default WhyChooseUs;