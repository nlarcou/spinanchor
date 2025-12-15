import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Scale, CheckCircle } from "lucide-react";
import licenseImage from "@/assets/license-services.jpg";

const LicenseServices = () => {
  const deliverables = [
    "Full license application preparation and submission",
    "License renewals and ongoing maintenance",
    "Regulator liaison and query management",
    "Multi jurisdiction licensing strategies",
    "Documentation and evidence package preparation",
    "License condition monitoring and compliance"
  ];

  const howWeWork = [
    { step: "01", title: "Jurisdiction evaluation and strategy" },
    { step: "02", title: "Application preparation and documentation" },
    { step: "03", title: "Submission and regulator engagement" },
    { step: "04", title: "Query response and follow up" },
    { step: "05", title: "License grant and ongoing maintenance" }
  ];

  const jurisdictions = [
    "Malta Gaming Authority (MGA)",
    "Curaçao eGaming",
    "UK Gambling Commission",
    "Gibraltar Licensing Authority",
    "Isle of Man GSC",
    "Kahnawake Gaming Commission",
    "Estonia",
    "And more..."
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
                iGaming license applications and regulatory support
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We guide iGaming operators and suppliers through the licensing process from start to finish. Whether you need a new license, a renewal, or multi jurisdiction coverage, we handle the complexity so you can focus on your business.
              </p>
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

      {/* What We Deliver */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              What we deliver
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
              How we work
            </h2>
            <div className="space-y-6">
              {howWeWork.map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-background rounded-xl shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Jurisdictions we cover
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {jurisdictions.map((jurisdiction, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{jurisdiction}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Button 
              size="lg" 
              variant="accent"
              className="font-semibold shadow-elegant mb-4"
              asChild
            >
              <Link to="/contact?service=license">REQUEST A LICENSING CONSULTATION</Link>
            </Button>
            <p className="text-sm text-muted-foreground italic">
              NDA available. Confidential by default.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LicenseServices;