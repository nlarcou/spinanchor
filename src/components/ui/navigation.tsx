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
    { label: "ABOUT", href: "#about" },
    { label: "TEAM", href: "#team" },
    { label: "CONTACT", href: "#contact" },
  ];

  const services = [
    { label: "iGaming Compliance Services", href: "/compliance-services" },
    { label: "iGaming Corporate Services", href: "/corporate-services" },
    { label: "iGaming License Services", href: "/license-services" },
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
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src={nsgsLogo}
              alt="NSGS Global - Next Step Gaming Services"
              className="h-[85px] w-auto drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              HOME
            </button>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1 outline-none">
                SERVICES
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-border min-w-[250px]">
                {services.map((service) => (
                  <DropdownMenuItem key={service.label} onSelect={() => navigate(service.href)}>
                    <span className="text-foreground cursor-pointer">
                      {service.label}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}

            <Button 
              variant="accent"
              className="font-semibold shadow-elegant"
              onClick={() => navigate('/contact')}
            >
              GET STARTED
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => { navigate('/'); setIsMenuOpen(false); }}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors px-2 py-1 text-left"
              >
                HOME
              </button>
              
              {/* Mobile Services */}
              <div className="px-2">
                <div className="text-sm font-semibold text-foreground mb-2">SERVICES</div>
                <div className="flex flex-col space-y-2 pl-4">
                  {services.map((service) => (
                    <button
                      key={service.label}
                      onClick={() => { navigate(service.href); setIsMenuOpen(false); }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
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
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors px-2 py-1 text-left"
                >
                  {item.label}
                </button>
              ))}

              <Button 
                variant="accent"
                className="font-semibold shadow-elegant mx-2 mt-2"
                onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
              >
                GET STARTED
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;