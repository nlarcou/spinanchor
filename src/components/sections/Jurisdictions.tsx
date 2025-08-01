import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, ArrowRight } from "lucide-react";
import jurisdictionsImage from "@/assets/jurisdictions.jpg";

const Jurisdictions = () => {
  const jurisdictions = [
    {
      name: "Curaçao",
      description: "One of the most established gaming jurisdictions with flexible regulations and quick licensing processes.",
      features: ["Established Jurisdiction", "Flexible Regulations", "Quick Processing"]
    },
    {
      name: "Malta",
      description: "Premium EU jurisdiction with strict regulations and excellent reputation in the iGaming industry.",
      features: ["EU Jurisdiction", "Premium Reputation", "Comprehensive Framework"]
    },
    {
      name: "The Netherlands",
      description: "Regulated market with high standards and access to the Dutch gaming market.",
      features: ["Regulated Market", "High Standards", "Local Market Access"]
    },
    {
      name: "Cyprus",
      description: "Strategic location with favorable business environment and EU membership benefits.",
      features: ["EU Member State", "Business Friendly", "Strategic Location"]
    }
  ];

  return (
    <section id="jurisdictions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              iGaming Jurisdictions
            </h2>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Your Global Partner
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Streamline your corporate, compliance and licensing requirements in the world's most 
              popular iGaming jurisdictions with our business solutions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    Why a Global Instead of Local Provider?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our alliances with payment service providers, software providers, and banks allow us to 
                    provide timely guidance on compliance regulations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    The Wider Context
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    From Luxembourg to Singapore, our team has the knowledge and experience to ensure 
                    a seamless process for you.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={jurisdictionsImage}
                alt="iGaming Jurisdictions worldwide"
                className="rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Content - Jurisdictions Grid */}
          <div className="space-y-6">
            {jurisdictions.map((jurisdiction, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {jurisdiction.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {jurisdiction.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {jurisdiction.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="pt-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                Learn More About Jurisdictions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jurisdictions;