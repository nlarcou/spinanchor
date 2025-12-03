import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield, ClipboardCheck, Users, FileText, AlertCircle } from "lucide-react";
import complianceImage from "@/assets/compliance-services-new.jpg";

const ComplianceServices = () => {
  const services = [
    {
      icon: FileText,
      title: "Policies & Procedures",
      description: "Comprehensive policy documentation tailored to your jurisdiction's regulatory requirements."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensure full compliance with local and international gaming regulations and standards."
    },
    {
      icon: AlertCircle,
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies for your iGaming operations."
    },
    {
      icon: ClipboardCheck,
      title: "AML & KYC Implementation",
      description: "Robust anti-money laundering and know-your-customer procedures and monitoring."
    },
    {
      icon: Users,
      title: "Responsible Gaming",
      description: "Player protection measures and responsible gaming program implementation."
    },
    {
      icon: FileCheck,
      title: "Audit & Reporting",
      description: "Regular compliance audits and regulatory reporting services."
    }
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
                <FileCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Compliance Excellence</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight">
                iGaming Compliance Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Navigate the complex regulatory landscape with confidence. Our comprehensive compliance solutions ensure your iGaming business meets all regulatory requirements and industry standards across multiple jurisdictions.
              </p>
              <Button 
                size="lg" 
                variant="accent"
                className="font-semibold shadow-elegant"
                asChild
              >
                <Link to="/contact?service=compliance">REQUEST CONSULTATION</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={complianceImage}
                alt="iGaming Compliance Services"
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
              Comprehensive Compliance Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end compliance services designed to protect your business and maintain regulatory standards.
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Ensure Regulatory Compliance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our compliance services can protect your iGaming business.
          </p>
          <Button 
            size="lg" 
            variant="accent"
            className="font-semibold shadow-elegant"
            asChild
          >
            <Link to="/contact?service=compliance">GET STARTED</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceServices;
