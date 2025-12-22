import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import nsgsLogo from "@/assets/nsgs-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const serviceGroups = [
    {
      name: "Corporate",
      items: [
        { label: "iGaming Company Incorporation", href: "/corporate-services" },
        { label: "Trust Company Formation", href: "/corporate-services" },
        { label: "Corporate & Maintenance Services", href: "/corporate-services" },
      ],
    },
    {
      name: "Regulatory",
      items: [
        { label: "iGaming Licensing Services", href: "/license-services" },
        { label: "iGaming Compliance Services", href: "/compliance-services" },
      ],
    },
    {
      name: "Financial Infrastructure",
      items: [
        { label: "iGaming Banking Services", href: "/banking-services" },
        { label: "iGaming Processing Services", href: "/processing-services" },
      ],
    },
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Jurisdictions", href: "/jurisdictions" },
    { label: "Events", href: "#events" },
    { label: "News & Insights", href: "#news" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
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

  const toggleMobileGroup = (groupName: string) => {
    setExpandedGroup(expandedGroup === groupName ? null : groupName);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer flex-shrink-0" 
            onClick={() => navigate('/')}
          >
            <img 
              src={nsgsLogo}
              alt="NSGS Global"
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {/* Home */}
            <button
              onClick={() => navigate('/')}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Home
            </button>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1 outline-none rounded-md hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-primary/20">
                Services
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-background border-border/60 min-w-[320px] z-50 shadow-lg p-2"
                align="start"
              >
                {serviceGroups.map((group, groupIndex) => (
                  <div key={group.name} className={groupIndex > 0 ? "mt-3 pt-3 border-t border-border/30" : ""}>
                    <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {group.name}
                    </div>
                    {group.items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => navigate(item.href)}
                        className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-md transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other nav items */}
            {navItems.slice(1).map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
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
          <div className="flex lg:hidden items-center gap-2">
            <Button 
              variant="accent"
              size="sm"
              className="font-medium text-xs px-3 min-h-[36px]"
              onClick={() => navigate('/contact?service=discovery')}
            >
              Book a Call
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:bg-muted/50 rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-border/30 bg-background">
            <div className="flex flex-col">
              {/* Home */}
              <button
                onClick={() => { navigate('/'); setIsMenuOpen(false); }}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors text-left min-h-[44px]"
              >
                Home
              </button>

              {/* Services Accordion */}
              <div className="border-t border-border/20">
                <button
                  onClick={() => toggleMobileGroup('services')}
                  className="w-full px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors text-left flex items-center justify-between min-h-[44px]"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedGroup === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                {expandedGroup === 'services' && (
                  <div className="bg-muted/20 pb-2">
                    {serviceGroups.map((group) => (
                      <div key={group.name} className="py-2">
                        <div className="px-6 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          {group.name}
                        </div>
                        {group.items.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => { navigate(item.href); setIsMenuOpen(false); }}
                            className="w-full px-8 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors text-left flex items-center gap-2 min-h-[44px]"
                          >
                            <ChevronRight className="h-3 w-3 opacity-40" />
                            {item.label}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other nav items */}
              {navItems.slice(1).map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors text-left border-t border-border/20 min-h-[44px]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;