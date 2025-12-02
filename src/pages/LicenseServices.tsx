import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileCheck, Globe, Shield, ClipboardList, CheckCircle } from "lucide-react";
import licenseImage from "@/assets/license-services.jpg";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const LicenseServices = () => {
  const services = [
    {
      icon: FileCheck,
      title: "License Applications",
      description: "Expert guidance through the complete gaming license application process."
    },
    {
      icon: Scale,
      title: "License Maintenance",
      description: "Ongoing support to maintain your gaming license in good standing with regulators."
    },
    {
      icon: Globe,
      title: "Multi-Jurisdiction Support",
      description: "Licensing services across 15+ jurisdictions including Malta, Curacao, and more."
    },
    {
      icon: ClipboardList,
      title: "Documentation Preparation",
      description: "Comprehensive preparation of all required licensing documentation and submissions."
    },
    {
      icon: Shield,
      title: "Regulatory Liaison",
      description: "Direct communication with regulatory authorities on your behalf."
    },
    {
      icon: CheckCircle,
      title: "License Renewals",
      description: "Timely management of license renewal processes and requirements."
    }
  ];

  const jurisdictions = [
    "Malta Gaming Authority (MGA)",
    "Curaçao eGaming",
    "UK Gambling Commission",
    "Gibraltar Licensing Authority",
    "Isle of Man Gambling Supervision Commission",
    "Kahnawake Gaming Commission",
    "Costa Rica",
    "Estonia",
    "And many more..."
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(222_49%_49%_/_0.05),_transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Licensing Expertise</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight">
                iGaming License Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Secure your gaming license with confidence. Our expert team provides comprehensive support for gaming license applications, maintenance, and renewals across 15+ jurisdictions worldwide.
              </p>
              <Button 
                size="lg" 
                variant="accent"
                className="font-semibold shadow-elegant"
                onClick={() => window.location.href = '/contact'}
              >
                REQUEST CONSULTATION
              </Button>
            </div>
            <div className="relative">
              <img 
                src={licenseImage}
                alt="iGaming License Services"
                className="w-full h-[500px] object-cover rounded-2xl shadow-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Licensing Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From application to renewal, we manage every aspect of your gaming license journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jurisdictions Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Supported Jurisdictions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide licensing services across the world's leading iGaming jurisdictions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {jurisdictions.map((jurisdiction, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-card transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{jurisdiction}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Obtain Your Gaming License?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your licensing needs and start your application process.
          </p>
          <Button 
            size="lg" 
            variant="accent"
            className="font-semibold shadow-elegant"
            onClick={() => window.location.href = '/contact'}
          >
            GET STARTED
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LicenseServices;
