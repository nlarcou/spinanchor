import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, DollarSign, Users, TrendingUp, FileText, Briefcase } from "lucide-react";
import corporateImage from "@/assets/corporate-services-new.jpg";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const BankingServices = () => {
  const services = [
    {
      icon: Building2,
      title: "Merchant Accounts",
      description: "Dedicated merchant accounts tailored for high-risk iGaming businesses across multiple jurisdictions."
    },
    {
      icon: DollarSign,
      title: "Banking Relationships",
      description: "Establish and maintain banking relationships with institutions experienced in iGaming operations."
    },
    {
      icon: Users,
      title: "Player Account Management",
      description: "Comprehensive player wallet management and balance reconciliation systems."
    },
    {
      icon: TrendingUp,
      title: "Financial Management",
      description: "Advanced financial management tools and reporting for better cash flow control."
    },
    {
      icon: FileText,
      title: "Regulatory Reporting",
      description: "Automated regulatory reporting and compliance documentation for financial authorities."
    },
    {
      icon: Briefcase,
      title: "Treasury Services",
      description: "Professional treasury management services to optimize your financial operations."
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
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Banking Solutions</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight">
                iGaming Banking Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Specialized banking solutions for iGaming operators. We provide dedicated merchant accounts, banking relationships, and financial management services tailored to the unique needs of the online gaming industry.
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
                src={corporateImage}
                alt="iGaming Banking Services"
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
              Complete Banking Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end banking services designed to support your iGaming business with reliable financial infrastructure.
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
            Ready to Secure Your Banking Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our banking solutions can support your iGaming business growth.
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

export default BankingServices;
