import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Briefcase, Landmark, FileText, Calculator, Globe } from "lucide-react";
import corporateImage from "@/assets/corporate-services-new.jpg";

const CorporateServices = () => {
  const services = [
    {
      icon: Building,
      title: "Company Incorporation",
      description: "Complete company setup services in preferred iGaming jurisdictions with expert guidance."
    },
    {
      icon: Briefcase,
      title: "Management Services",
      description: "Professional corporate management including directorship and secretarial services."
    },
    {
      icon: Landmark,
      title: "Banking Solutions",
      description: "Assistance with corporate banking setup and merchant account establishment."
    },
    {
      icon: Calculator,
      title: "Tax Planning",
      description: "Optimize your corporate structure with strategic tax planning and compliance."
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Comprehensive legal documentation and contract drafting services."
    },
    {
      icon: Globe,
      title: "Registered Office",
      description: "Prestigious business address and registered office services in key jurisdictions."
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
                <Building className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Corporate Excellence</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight">
                iGaming Corporate Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Establish and manage your iGaming business with our complete corporate services. From company incorporation to ongoing management, we provide the foundation for your gaming operations.
              </p>
              <Button 
                size="lg" 
                variant="accent"
                className="font-semibold shadow-elegant"
                asChild
              >
                <Link to="/contact?service=corporate">REQUEST CONSULTATION</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={corporateImage}
                alt="iGaming Corporate Services"
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
              Complete Corporate Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional corporate services tailored for the iGaming industry across multiple jurisdictions.
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
            Ready to Establish Your iGaming Company?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us handle your corporate setup and management so you can focus on growing your business.
          </p>
          <Button 
            size="lg" 
            variant="accent"
            className="font-semibold shadow-elegant"
            asChild
          >
            <Link to="/contact?service=corporate">GET STARTED</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateServices;
