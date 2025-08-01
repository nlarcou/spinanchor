import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import spinAnchorLogo from "@/assets/spinanchor-global-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Digital Development",
      "Security & Compliance", 
      "Corporate Services",
      "Digital Transformation",
      "Performance Optimization",
      "Consulting & Support"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "News & Insights",
      "Case Studies",
      "Partners"
    ],
    resources: [
      "Documentation",
      "API Reference",
      "Support Center",
      "Status Page",
      "Security",
      "Privacy Policy"
    ]
  };

  return (
    <footer className="bg-deep-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/9c56c26f-96c0-4d7a-9750-c1082cb5951f.png"
                alt="SpinAnchor Global"
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Professional digital solutions and corporate services to help your business thrive in the modern world.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-white/80">
                <Mail className="h-4 w-4 mr-3 text-chip-gold" />
                info@spinanchor.com
              </div>
              <div className="flex items-center text-sm text-white/80">
                <Phone className="h-4 w-4 mr-3 text-chip-gold" />
                +357 24 030 500
              </div>
              <div className="flex items-center text-sm text-white/80">
                <MapPin className="h-4 w-4 mr-3 text-chip-gold" />
                United Nations Street, 44<br />
                Orthodoxou Tower, 3rd-4th Floor<br />
                6042, Larnaka, Cyprus
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-chip-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-chip-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-chip-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="font-heading font-semibold text-white mb-3">Stay Updated</h5>
              <p className="text-white/80 text-sm mb-4">
                Get the latest news and insights delivered to your inbox.
              </p>
              <Button className="w-full bg-chip-gold hover:bg-chip-gold/90 text-deep-navy">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0">
            © {currentYear} SpinAnchor. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-white/80 hover:text-chip-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-white/80 hover:text-chip-gold transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-white/80 hover:text-chip-gold transition-colors"
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