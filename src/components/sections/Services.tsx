import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileCheck, Building, Scale } from "lucide-react";
import complianceImage from "@/assets/compliance-services-new.jpg";
import corporateImage from "@/assets/corporate-services-new.jpg";
import licenseImage from "@/assets/license-services.jpg";

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "iGAMING COMPLIANCE SERVICES",
      description: "Comprehensive compliance solutions to ensure your online gaming business meets all regulatory requirements and industry standards.",
      features: ["Policies & Procedures", "Regulatory Compliance", "Risk Management"],
      image: complianceImage,
      link: "/compliance-services"
    },
    {
      icon: Building,
      title: "iGAMING CORPORATE SERVICES",
      description: "Complete corporate solutions for online gaming businesses, from company incorporation to ongoing management services.",
      features: ["Company Incorporation", "Management Services", "Banking & Tax"],
      image: corporateImage,
      link: "/corporate-services"
    },
    {
      icon: Scale,
      title: "iGAMING LICENSE SERVICES",
      description: "Expert assistance with gaming license applications and maintenance across multiple jurisdictions worldwide.",
      features: ["License Maintenance", "License Applications", "Jurisdictions"],
      image: licenseImage,
      link: "/license-services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our iGaming Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            NSGS Global provides comprehensive iGaming solutions—from licensing and compliance to platform operations and payment infrastructure. We handle the complexities so you can focus on growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-heading text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-primary mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.location.href = service.link}
                  >
                    TELL ME MORE
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;