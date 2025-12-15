import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Abstract geometric accents for each service - unique visual anchors
const ServiceAccent = ({ variant }: { variant: number }) => {
  const accents = [
    // Licensing - Document/certificate shape
    <div className="relative w-10 h-10">
      <div className="absolute inset-0 border-2 border-primary/20 rounded" />
      <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-2 left-2 right-2 space-y-1">
        <div className="h-[2px] bg-primary/15 rounded" />
        <div className="h-[2px] bg-primary/10 rounded w-3/4" />
      </div>
    </div>,
    
    // Compliance - Shield/check pattern
    <div className="relative w-10 h-10">
      <div className="absolute inset-x-1 top-0 bottom-1 border-2 border-primary/20 rounded-t-lg rounded-b-[40%]" />
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-1.5 border-l-2 border-b-2 border-primary/30 -rotate-45" />
    </div>,
    
    // Payments - Flow/transaction lines
    <div className="relative w-10 h-10">
      <div className="absolute top-2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
      <div className="absolute top-5 left-1 right-1 h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-primary/15" />
      <div className="absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/15 via-primary/20 to-transparent" />
      <div className="absolute top-1 left-1 w-2 h-2 rounded-full border-2 border-primary/25" />
      <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-primary/20" />
    </div>,
    
    // Banking - Building/structure
    <div className="relative w-10 h-10">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-r-[14px] border-b-[8px] border-l-transparent border-r-transparent border-b-primary/20" />
      <div className="absolute top-[10px] left-1 right-1 bottom-1 border-2 border-t-0 border-primary/20" />
      <div className="absolute top-[14px] left-2 w-[6px] h-4 border-2 border-primary/15" />
      <div className="absolute top-[14px] right-2 w-[6px] h-4 border-2 border-primary/15" />
    </div>,
    
    // Corporate - Org structure/network
    <div className="relative w-10 h-10">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded border-2 border-primary/25" />
      <div className="absolute top-4 left-1/2 w-[2px] h-2 bg-primary/20 -translate-x-1/2" />
      <div className="absolute top-6 left-2 right-2 h-[2px] bg-primary/20" />
      <div className="absolute top-6 left-2 w-[2px] h-2 bg-primary/20" />
      <div className="absolute top-6 right-2 w-[2px] h-2 bg-primary/20" />
      <div className="absolute bottom-0 left-1 w-2.5 h-2.5 rounded-sm border-2 border-primary/20" />
      <div className="absolute bottom-0 right-1 w-2.5 h-2.5 rounded-sm border-2 border-primary/20" />
    </div>,
  ];

  return accents[variant] || null;
};

const Services = () => {
  const services = [
    {
      title: "Licensing and Regulatory Support",
      description: "License applications, renewals, and regulator liaison across multiple jurisdictions.",
      capabilities: [
        "New license applications",
        "License renewals and variations",
        "Regulator correspondence"
      ],
      link: "/license-services"
    },
    {
      title: "Compliance and AML",
      description: "Regulatory frameworks, AML programmes, and ongoing compliance operations.",
      capabilities: [
        "AML and KYC frameworks",
        "Responsible gaming controls",
        "Compliance audits"
      ],
      link: "/compliance-services"
    },
    {
      title: "Payments and PSP Enablement",
      description: "Payment gateway integration, PSP onboarding, and transaction infrastructure.",
      capabilities: [
        "PSP selection and onboarding",
        "Payment gateway integration",
        "Transaction monitoring"
      ],
      link: "/processing-services"
    },
    {
      title: "Banking and Treasury Support",
      description: "Merchant account introductions, banking relationships, and financial governance.",
      capabilities: [
        "Banking introductions",
        "Merchant account support",
        "Treasury structuring"
      ],
      link: "/banking-services"
    },
    {
      title: "Corporate Services",
      description: "Company incorporation, governance, directorship, and tax coordination.",
      capabilities: [
        "Company formation",
        "Directorship arrangements",
        "Corporate governance"
      ],
      link: "/corporate-services"
    }
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-background">
      {/* Subtle radial glow from top */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            End-to-end iGaming services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Structured solutions across licensing, compliance, payments, and operations—designed to reduce risk and accelerate market entry.
          </p>
        </div>

        {/* Services Grid - 2 columns desktop, 1 mobile */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative block p-8 lg:p-10 bg-card border border-border/50 rounded-xl hover:border-primary/30 hover:shadow-card transition-all duration-200 overflow-hidden"
            >
              {/* Abstract geometric accent */}
              <div className="absolute top-6 right-6 opacity-70 group-hover:opacity-100 transition-opacity">
                <ServiceAccent variant={index} />
              </div>
              
              <div className="pr-12">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.capabilities.map((capability, capIndex) => (
                  <li key={capIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-12 pt-8">
          <Link 
            to="/igaming-services"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            View all services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
