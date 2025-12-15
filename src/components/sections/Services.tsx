import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import complianceImage from "@/assets/compliance-services-new.jpg";
import corporateImage from "@/assets/corporate-services-new.jpg";
import licenseImage from "@/assets/license-services.jpg";
import paymentImage from "@/assets/payment-services.jpg";
import bankingImage from "@/assets/banking-services.jpg";

const Services = () => {
  const services = [
    {
      title: "iGaming Compliance",
      description: "Regulatory frameworks, AML and KYC programs, audits, and ongoing compliance operations.",
      image: complianceImage,
      link: "/compliance-services"
    },
    {
      title: "iGaming Corporate",
      description: "Company incorporation, governance, directorship, and tax structuring coordination.",
      image: corporateImage,
      link: "/corporate-services"
    },
    {
      title: "iGaming Licensing",
      description: "License applications, renewals, regulator liaison, and multi-jurisdiction strategies.",
      image: licenseImage,
      link: "/license-services"
    },
    {
      title: "Payments & PSP",
      description: "Payment gateway integration, PSP onboarding, transaction monitoring, and fraud prevention.",
      image: paymentImage,
      link: "/processing-services"
    },
    {
      title: "Banking & Treasury",
      description: "Merchant account introductions, banking relationships, and financial governance.",
      image: bankingImage,
      link: "/banking-services"
    }
  ];

  return (
    <section id="services" className="py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            End-to-end iGaming services for regulated markets
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From licensing and regulatory compliance to payments, banking, and operational readiness—structured solutions designed to reduce risk and accelerate time to market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-border/40 overflow-hidden hover:border-border transition-colors duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                  onClick={() => window.location.href = service.link}
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <Button 
            variant="outline"
            className="font-medium"
            asChild
          >
            <Link to="/igaming-services">
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;