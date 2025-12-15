import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Building2, 
  FileCheck, 
  CreditCard, 
  Landmark,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import nsgsLogo from "@/assets/nsgs-logo.png";

const IgamingServices = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "35796281311";
    const message = encodeURIComponent("Hello! I'm interested in your iGaming services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: Shield,
      title: "Compliance Services",
      description: "AML/KYC frameworks, regulatory reporting, and ongoing compliance monitoring.",
      link: "/compliance-services"
    },
    {
      icon: Building2,
      title: "Corporate Services",
      description: "Company formation, corporate structuring, and nominee services.",
      link: "/corporate-services"
    },
    {
      icon: FileCheck,
      title: "License Services",
      description: "Full licensing support for MGA, Curaçao, Isle of Man, and more.",
      link: "/license-services"
    },
    {
      icon: CreditCard,
      title: "Processing Services",
      description: "Payment gateway integration and transaction processing solutions.",
      link: "/processing-services"
    },
    {
      icon: Landmark,
      title: "Banking Services",
      description: "Corporate banking, multi-currency accounts, and financial infrastructure.",
      link: "/banking-services"
    }
  ];

  const benefits = [
    "15+ Years Industry Experience",
    "Multi-Jurisdictional Expertise",
    "End-to-End Solutions",
    "Dedicated Account Managers",
    "Fast Turnaround Times",
    "Competitive Pricing"
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NSGS Global - iGaming Services",
    "description": "Professional iGaming licensing, compliance, and corporate services. From license to launch, we help operators succeed in regulated markets.",
    "url": "https://nsgs.pro/igaming-services",
    "telephone": "+35796281311",
    "email": "info@nsgs.pro",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Van Dyke, 6, Solonion Building",
      "addressLocality": "Larnaca",
      "postalCode": "6037",
      "addressCountry": "CY"
    },
    "areaServed": "Worldwide",
    "serviceType": ["iGaming Licensing", "Compliance Services", "Corporate Services", "Payment Processing", "Banking Services"]
  };

  return (
    <>
      <Helmet>
        <title>iGaming Services | Licensing, Compliance & Corporate Solutions | NSGS Global</title>
        <meta name="description" content="Professional iGaming services: licensing in MGA, Curaçao, Isle of Man. Compliance, corporate structuring, payment processing & banking. Get expert support today." />
        <meta name="keywords" content="igaming services, gambling license, MGA license, Curacao license, igaming compliance, online casino licensing, sports betting license" />
        <link rel="canonical" href="https://nsgs.pro/igaming-services" />
        <meta property="og:title" content="iGaming Services | NSGS Global" />
        <meta property="og:description" content="Professional iGaming licensing, compliance, and corporate services. From license to launch." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nsgs.pro/igaming-services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Simple Header */}
        <header className="bg-foreground py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/">
              <img src={nsgsLogo} alt="NSGS Global" className="h-16 w-auto" />
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Chat Now
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Services designed for real-world<br />
              <span className="text-primary">iGaming operations</span>
            </h1>
            <p className="text-xl md:text-2xl text-background/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              iGaming is complex by nature. Regulation, payments, banking, and compliance intersect across multiple jurisdictions, often with conflicting requirements. Our services are designed to work together, providing a coordinated setup rather than fragmented solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                Start WhatsApp Chat
              </button>
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Mail className="h-6 w-6" />
                Contact Form
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-center mb-4">
              Our iGaming Solutions
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Comprehensive services to help you launch and operate in regulated iGaming markets worldwide.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <article 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-center mb-12">
              Why Choose NSGS Global?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Our experts are ready to help you navigate the iGaming industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp: +357 96 281 311
              </button>
              <a
                href="mailto:info@nsgs.pro"
                className="bg-background text-foreground px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 hover:bg-background/90"
              >
                <Mail className="h-6 w-6" />
                info@nsgs.pro
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
              <a href="tel:+35796281311" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="h-4 w-4" /> +357 96 281 311
              </a>
              <Link to="/contact" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="h-4 w-4" /> Contact Form
              </Link>
              <Link to="/" className="flex items-center gap-2 hover:text-background transition-colors">
                <ArrowRight className="h-4 w-4" /> Visit Homepage
              </Link>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="bg-foreground/95 text-background/60 py-8 border-t border-background/10">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">© {new Date().getFullYear()} NSGS Global. All rights reserved.</p>
            <p className="text-sm">
              Van Dyke, 6, Solonion Building, 6037 Larnaca, Cyprus
            </p>
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <Link to="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-background transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default IgamingServices;
