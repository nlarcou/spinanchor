import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import nsgsLogo from "@/assets/nsgs-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleSectionLink = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const footerLinks = {
    services: [
      { name: "Licensing and Regulatory Support", href: "/license-services" },
      { name: "Compliance and AML", href: "/compliance-services" },
      { name: "Payments and PSP Enablement", href: "/processing-services" },
      { name: "Banking and Treasury Support", href: "/banking-services" },
      { name: "Corporate Services", href: "/corporate-services" }
    ],
    company: [
      { name: "Jurisdictions", href: "/jurisdictions" },
      { name: "How We Work", section: "how-we-work" },
      { name: "Expertise", section: "team" },
      { name: "Contact", href: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" }
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-8 block">
              <img 
                src={nsgsLogo}
                alt="NSGS Global"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 mb-8 leading-relaxed text-sm">
              Specialised iGaming services provider supporting licensing, compliance, payments, banking, and operational setup across regulated markets.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a href="mailto:info@nsgs.pro" className="flex items-center text-background/70 hover:text-background transition-colors">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                info@nsgs.pro
              </a>
              <a href="tel:+35796281311" className="flex items-center text-background/70 hover:text-background transition-colors">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                +357 96 281 311
              </a>
              <div className="flex items-start text-background/70">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Van Dyke, 6<br />
                  Solonion Building<br />
                  6037, Larnaca, Cyprus
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6 text-sm">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6 text-sm">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href ? (
                    <Link 
                      to={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => handleSectionLink(link.section!)}
                      className="text-background/70 hover:text-background transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6 text-sm">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-background/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} NSGS Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;