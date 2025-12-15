import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileCheck, Building, Scale, CreditCard, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import complianceImage from "@/assets/compliance-services-new.jpg";
import corporateImage from "@/assets/corporate-services-new.jpg";
import licenseImage from "@/assets/license-services.jpg";
import paymentImage from "@/assets/payment-services.jpg";
import bankingImage from "@/assets/banking-services.jpg";

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "iGaming Compliance",
      description: "Regulatory frameworks, AML and KYC programs, audits, and ongoing compliance operations aligned with jurisdiction specific requirements.",
      image: complianceImage,
      link: "/compliance-services"
    },
    {
      icon: Building,
      title: "iGaming Corporate",
      description: "Company incorporation, governance, directorship, secretarial services, and tax structuring coordination for gaming businesses.",
      image: corporateImage,
      link: "/corporate-services"
    },
    {
      icon: Scale,
      title: "iGaming Licensing",
      description: "License applications, renewals, regulator liaison, and multi jurisdiction licensing strategies.",
      image: licenseImage,
      link: "/license-services"
    },
    {
      icon: CreditCard,
      title: "Payments and PSP Enablement",
      description: "Payment gateway integration, PSP onboarding, transaction monitoring, fraud prevention, and multi currency processing.",
      image: paymentImage,
      link: "/processing-services"
    },
    {
      icon: Landmark,
      title: "Banking and Treasury Support",
      description: "Merchant account introductions, banking relationship support, player funds structure guidance, and financial governance.",
      image: bankingImage,
      link: "/banking-services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            End to end iGaming services, built for regulated markets
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            NSGS Global supports iGaming operators and suppliers at every stage of their journey. From licensing and regulatory compliance to payments, banking, and operational readiness, we provide structured, jurisdiction aware solutions designed to reduce risk and accelerate time to market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 overflow-hidden h-full flex flex-col">
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader className="text-center pb-2 flex-shrink-0">
                  <CardTitle className="font-heading text-base font-semibold text-foreground mb-1">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col flex-grow">
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm text-center flex-grow">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="accent"
            className="font-semibold shadow-elegant group"
            asChild
          >
            <Link to="/igaming-services">
              VIEW ALL SERVICES
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;