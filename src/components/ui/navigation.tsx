import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import nsgsLogo from "@/assets/nsgs-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const serviceGroups = [
    {
      name: "iGaming Compliance Services",
      href: "/compliance-services",
      items: [
        { label: "Client Due Diligence (CDD) & Know Your Client (KYC)", href: "/compliance-services" },
        { label: "Policies & Procedures", href: "/compliance-services" },
        { label: "Regulatory Compliance", href: "/compliance-services" },
        { label: "Risk Management", href: "/compliance-services" },
        { label: "AML Health Checks", href: "/compliance-services" },
      ],
    },
    {
      name: "iGaming Corporate Services",
      href: "/corporate-services",
      items: [
        { label: "Company Incorporation", href: "/corporate-services" },
        { label: "Trust Company Formation", href: "/corporate-services" },
        { label: "Corporate Maintenance", href: "/corporate-services" },
      ],
    },
    {
      name: "iGaming License Services",
      href: "/license-services",
      items: [
        { label: "License Application Support", href: "/license-services" },
        { label: "License Acquisition", href: "/license-services" },
        { label: "License Maintenance", href: "/license-services" },
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
    setIsServicesOpen(false);
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

            {/* Services Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => { setIsServicesOpen(false); setHoveredGroup(null); }}
            >
              <button 
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1 rounded-md hover:bg-muted/50"
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-1">
                  <div className="flex bg-background border border-border/60 rounded-md shadow-lg overflow-hidden">
                    {/* Main menu - service groups */}
                    <div className="min-w-[260px] py-2 border-r border-border/30">
                      {serviceGroups.map((group) => (
                        <button
                          key={group.name}
                          onMouseEnter={() => setHoveredGroup(group.name)}
                          onClick={() => { navigate(group.href); setIsServicesOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between transition-colors ${
                            hoveredGroup === group.name 
                              ? 'bg-muted text-foreground' 
                              : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                          }`}
                        >
                          {group.name}
                          <ChevronRight className="h-4 w-4 opacity-50" />
                        </button>
                      ))}
                    </div>

                    {/* Sub-menu - items for hovered group */}
                    {hoveredGroup && (
                      <div className="min-w-[280px] py-2 bg-muted/30">
                        {serviceGroups
                          .find(g => g.name === hoveredGroup)
                          ?.items.map((item) => (
                            <button
                              key={item.label}
                              onClick={() => { navigate(item.href); setIsServicesOpen(false); }}
                              className="w-full text-left px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                              {item.label}
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

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
                      <div key={group.name} className="py-1">
                        <button
                          onClick={() => toggleMobileGroup(group.name)}
                          className="w-full px-6 py-2.5 text-sm font-medium text-foreground/90 hover:bg-muted/50 transition-colors text-left flex items-center justify-between min-h-[44px]"
                        >
                          {group.name}
                          <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform ${expandedGroup === group.name ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedGroup === group.name && (
                          <div className="bg-muted/30">
                            {group.items.map((item) => (
                              <button
                                key={item.label}
                                onClick={() => { navigate(item.href); setIsMenuOpen(false); }}
                                className="w-full px-8 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors text-left flex items-center gap-2 min-h-[44px]"
                              >
                                <ChevronRight className="h-3 w-3 opacity-40 flex-shrink-0" />
                                {item.label}
                              </button>
                            ))}
                          </div>
                        )}
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