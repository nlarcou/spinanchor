import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import nsgsLogo from "@/assets/nsgs-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  const services = [
    { label: "Licensing and Regulatory Support", href: "/license-services" },
    { label: "Compliance and AML", href: "/compliance-services" },
    { label: "Payments and PSP Enablement", href: "/processing-services" },
    { label: "Banking and Treasury Support", href: "/banking-services" },
    { label: "Corporate Services", href: "/corporate-services" },
  ];

  const navItems = [
    { label: "Jurisdictions", href: "/jurisdictions" },
    { label: "How We Work", href: "#how-we-work" },
    { label: "Expertise", href: "#team" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (!isHomePage) {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/30 sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer flex-shrink-0" 
            onClick={() => navigate('/')}
          >
            <img 
              src={nsgsLogo}
              alt="NSGS Global"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation - Center/Left aligned */}
          <div className="hidden lg:flex items-center gap-1 ml-12">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1 outline-none rounded-md hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-primary/20">
                Services
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-background border-border/60 min-w-[260px] z-50 shadow-lg"
                align="start"
              >
                {services.map((service) => (
                  <DropdownMenuItem 
                    key={service.label} 
                    onSelect={() => navigate(service.href)}
                    className="cursor-pointer py-2.5 px-3 text-sm focus:bg-muted"
                  >
                    {service.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Right Side - CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Request Consultation
            </button>
            <Button 
              variant="accent"
              size="sm"
              className="font-medium"
              onClick={() => navigate('/contact?service=discovery')}
            >
              Book a Discovery Call
            </Button>
          </div>

          {/* Mobile - CTA + Menu */}
          <div className="flex lg:hidden items-center gap-3">
            <Button 
              variant="accent"
              size="sm"
              className="font-medium text-xs px-3"
              onClick={() => navigate('/contact?service=discovery')}
            >
              Book a Call
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:bg-muted/50 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 bg-background">
            <div className="flex flex-col space-y-1">
              {/* Mobile Services */}
              <div className="py-2">
                <div className="px-3 py-2 text-sm font-medium text-foreground">Services</div>
                <div className="flex flex-col pl-3">
                  {services.map((service) => (
                    <button
                      key={service.label}
                      onClick={() => { navigate(service.href); setIsMenuOpen(false); }}
                      className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-left rounded-md"
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border/30 my-2" />

              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors text-left rounded-md"
                >
                  {item.label}
                </button>
              ))}

              <div className="h-px bg-border/30 my-2" />

              <button
                onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Request Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;