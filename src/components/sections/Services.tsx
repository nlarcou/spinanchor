import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
              className="group block p-8 lg:p-10 bg-card border border-border/50 rounded-xl hover:border-primary/30 hover:shadow-card transition-all duration-200"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              
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