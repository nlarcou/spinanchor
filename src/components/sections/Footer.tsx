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
    <footer className="relative bg-foreground text-background">
      {/* Top gradient border for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="mb-6 sm:mb-8 block">
              <img 
                src={nsgsLogo}
                alt="NSGS Global"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-background/70 mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
              Specialised iGaming services provider supporting licensing, compliance, payments, banking, and operational setup across regulated markets.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <a href="mailto:info@nsgs.pro" className="flex items-center text-background/70 hover:text-background transition-colors min-h-[44px] sm:min-h-0">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                info@nsgs.pro
              </a>
              <a href="tel:+35796281311" className="flex items-center text-background/70 hover:text-background transition-colors min-h-[44px] sm:min-h-0">
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
            <h4 className="font-heading font-semibold text-background mb-4 sm:mb-6 text-xs sm:text-sm">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm min-h-[44px] sm:min-h-0 flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4 sm:mb-6 text-xs sm:text-sm">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href ? (
                    <Link 
                      to={link.href}
                      className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm min-h-[44px] sm:min-h-0 flex items-center"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => handleSectionLink(link.section!)}
                      className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm text-left min-h-[44px] sm:min-h-0 flex items-center"
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
            <h4 className="font-heading font-semibold text-background mb-4 sm:mb-6 text-xs sm:text-sm">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm min-h-[44px] sm:min-h-0 flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 sm:my-12 bg-background/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} NSGS Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;