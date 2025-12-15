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

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#team" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Compliance Services", href: "/compliance-services" },
    { label: "Corporate Services", href: "/corporate-services" },
    { label: "License Services", href: "/license-services" },
    { label: "Processing Services", href: "/processing-services" },
    { label: "Banking Services", href: "/banking-services" },
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
    <nav className="bg-background border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src={nsgsLogo}
              alt="NSGS Global"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate('/')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 outline-none">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border min-w-[220px] z-50">
                {services.map((service) => (
                  <DropdownMenuItem 
                    key={service.label} 
                    onSelect={() => navigate(service.href)}
                    className="cursor-pointer"
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
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}

            <Button 
              variant="accent"
              className="font-medium ml-4"
              onClick={() => navigate('/contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/40 bg-background">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => { navigate('/'); setIsMenuOpen(false); }}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Home
              </button>
              
              {/* Mobile Services */}
              <div>
                <div className="text-sm font-medium text-foreground mb-3">Services</div>
                <div className="flex flex-col space-y-2 pl-4 border-l border-border/40">
                  {services.map((service) => (
                    <button
                      key={service.label}
                      onClick={() => { navigate(service.href); setIsMenuOpen(false); }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors text-left py-1"
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2"
                >
                  {item.label}
                </button>
              ))}

              <Button 
                variant="accent"
                className="font-medium mt-4 w-full"
                onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;