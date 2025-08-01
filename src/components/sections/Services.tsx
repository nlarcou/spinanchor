import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Shield, Zap, Briefcase, Globe, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "DIGITAL DEVELOPMENT SERVICES",
      description: "Custom software solutions, web applications, and digital platforms tailored to your business needs.",
      features: ["Custom Web Applications", "Mobile Development", "API Integration"],
      color: "vibrant-teal"
    },
    {
      icon: Shield,
      title: "SECURITY & COMPLIANCE SERVICES", 
      description: "Comprehensive security audits, compliance management, and risk assessment solutions.",
      features: ["Security Audits", "Compliance Management", "Risk Assessment"],
      color: "warm-coral"
    },
    {
      icon: Briefcase,
      title: "CORPORATE SERVICES",
      description: "Business incorporation, management services, and strategic corporate solutions.",
      features: ["Company Formation", "Management Services", "Strategic Planning"],
      color: "chip-gold"
    },
    {
      icon: Globe,
      title: "DIGITAL TRANSFORMATION",
      description: "End-to-end digital transformation services to modernize your business operations.",
      features: ["Process Automation", "Cloud Migration", "Digital Strategy"],
      color: "light-aqua"
    },
    {
      icon: Zap,
      title: "PERFORMANCE OPTIMIZATION",
      description: "Optimize your systems and processes for maximum efficiency and scalability.",
      features: ["System Optimization", "Performance Monitoring", "Scalability Solutions"],
      color: "vibrant-teal"
    },
    {
      icon: Users,
      title: "CONSULTING & SUPPORT",
      description: "Expert consulting and ongoing support to help your business thrive in the digital age.",
      features: ["Strategic Consulting", "24/7 Support", "Training & Development"],
      color: "warm-coral"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and streamline your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-${service.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 text-${service.color}`} />
                  </div>
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
                        <div className={`w-1.5 h-1.5 rounded-full bg-${service.color} mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    LEARN MORE
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