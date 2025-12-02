import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
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
      { name: "iGaming Compliance Services", href: "/compliance-services" },
      { name: "iGaming Corporate Services", href: "/corporate-services" },
      { name: "iGaming License Services", href: "/license-services" },
      { name: "iGaming Processing Services", href: "/processing-services" },
      { name: "iGaming Banking Services", href: "/banking-services" }
    ],
    company: [
      { name: "About Us", section: "about" },
      { name: "Our Team", section: "team" },
      { name: "Jurisdictions", section: "jurisdictions" },
      { name: "Contact Us", href: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" }
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={nsgsLogo}
                alt="NSGS Global"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Next Step Gaming Services - Your partner in iGaming excellence. From license to launch, and beyond.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@nsgs.pro" className="flex items-center text-sm text-background/80 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                info@nsgs.pro
              </a>
              <a href="tel:+35796281311" className="flex items-center text-sm text-background/80 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                +357 96 281 311
              </a>
              <div className="flex items-start text-sm text-background/80">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 text-primary flex-shrink-0" />
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
            <h4 className="font-heading font-semibold text-background mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href ? (
                    <Link 
                      to={link.href}
                      className="text-background/80 hover:text-secondary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => handleSectionLink(link.section!)}
                      className="text-background/80 hover:text-secondary transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* Legal Links */}
            <h4 className="font-heading font-semibold text-background mb-6 mt-8">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6">Stay Updated</h4>
            <p className="text-background/80 text-sm mb-4">
              Get the latest iGaming insights delivered to your inbox.
            </p>
            <Link to="/contact">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/80 text-sm mb-4 md:mb-0">
            © {currentYear} NSGS Global. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;