import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import nsgsLogo from "@/assets/nsgs-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Gaming License Applications",
      "Platform Setup & Integration", 
      "Payment Infrastructure",
      "Compliance & Regulation",
      "Operations Management",
      "Consulting & Support"
    ],
    company: [
      "About NSGS Global",
      "Our Team",
      "Careers",
      "Success Stories",
      "Jurisdictions",
      "Partners"
    ],
    resources: [
      "Documentation",
      "Industry Insights",
      "Support Center",
      "Compliance Hub",
      "Security",
      "Privacy Policy"
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
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Next Step Gaming Services - Your partner in iGaming excellence. From license to launch, and beyond.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-background/80">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                info@nsgs.pro
              </div>
              <div className="flex items-center text-sm text-background/80">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                +357 24 030 500
              </div>
              <div className="flex items-center text-sm text-background/80">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                United Nations Street, 44<br />
                Orthodoxou Tower, 3rd-4th Floor<br />
                6042, Larnaka, Cyprus
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
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
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="font-heading font-semibold text-background mb-3">Stay Updated</h5>
              <p className="text-background/80 text-sm mb-4">
                Get the latest iGaming insights delivered to your inbox.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
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
              href="#" 
              className="text-background/80 hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-background/80 hover:text-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
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