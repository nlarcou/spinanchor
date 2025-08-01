import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "SERVICES", href: "#services" },
    { label: "SOLUTIONS", href: "#solutions" },
    { label: "ABOUT", href: "#about" },
    { label: "TEAM", href: "#team" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a86ab54e-6f70-4836-a48f-715374ea7985.png" 
              alt="SpinAnchor" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-warm-coral hover:bg-warm-coral/90 text-white">
              GET STARTED
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-warm-coral hover:bg-warm-coral/90 text-white mx-2 mt-2">
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