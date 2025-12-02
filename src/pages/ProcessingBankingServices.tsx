import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Wallet, Globe, Shield, TrendingUp, Users, DollarSign, Lock } from "lucide-react";
import corporateImage from "@/assets/corporate-services-new.jpg";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const ProcessingBankingServices = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Seamless integration with leading payment gateways optimized for iGaming transactions."
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Accept payments in multiple currencies with real-time conversion and competitive rates."
    },
    {
      icon: Wallet,
      title: "E-Wallet Solutions",
      description: "Integration with popular e-wallet providers for fast and secure player deposits and withdrawals."
    },
    {
      icon: DollarSign,
      title: "Banking Solutions",
      description: "Dedicated banking relationships and merchant accounts tailored for iGaming businesses."
    },
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "Advanced fraud detection and prevention systems to protect your business and players."
    },
    {
      icon: Lock,
      title: "Secure Transactions",
      description: "PCI-DSS compliant payment processing with end-to-end encryption and tokenization."
    },
    {
      icon: TrendingUp,
      title: "Transaction Monitoring",
      description: "Real-time transaction monitoring and reporting with comprehensive analytics."
    },
    {
      icon: Users,
      title: "Player Account Management",
      description: "Comprehensive player wallet management and balance reconciliation systems."
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
                <CreditCard className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Payment Solutions</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight">
                iGaming Processing & Banking
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive payment processing and banking solutions designed specifically for iGaming operators. We provide secure, reliable, and scalable payment infrastructure to support your global operations.
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
                alt="iGaming Processing & Banking Services"
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
              Complete Payment & Banking Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end payment processing and banking services to power your iGaming business worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
            Ready to Optimize Your Payment Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our processing and banking solutions can enhance your iGaming operations.
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

export default ProcessingBankingServices;
