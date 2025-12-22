import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhereToFindUs = () => {
  const events = [
    { 
      name: "IMGL", 
      subtitle: "International Masters of Gaming Law",
      url: "https://www.imgl.org/" 
    },
    { 
      name: "SBC Summit", 
      subtitle: "Lisbon",
      url: "https://sbcevents.com/sbc-summit/" 
    },
    { 
      name: "SiGMA", 
      subtitle: "World",
      url: "https://sigma.world/" 
    },
    { 
      name: "iGB Live", 
      subtitle: "Amsterdam",
      url: "https://www.igblive.com/" 
    },
    { 
      name: "ICE", 
      subtitle: "Barcelona",
      url: "https://www.icegaming.com/" 
    },
    { 
      name: "CasinoBeats Summit", 
      subtitle: "Malta",
      url: "https://sbcevents.com/casinobeats-summit/" 
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-32 bg-background">
      {/* Top border for separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      {/* Corner accent */}
      <div className="absolute inset-0 bg-corner-accent pointer-events-none" style={{ transform: 'rotate(180deg)' }} />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
            Where you can find us
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Meet our team at leading iGaming industry events across Europe and beyond.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {events.map((event, index) => (
            <a
              key={index}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-4 sm:p-6 bg-card border border-border/40 rounded-lg hover:border-primary/30 hover:shadow-subtle transition-all duration-200 text-center min-h-[80px] sm:min-h-[100px]"
            >
              <span className="text-sm sm:text-base font-semibold text-foreground">
                {event.name}
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">
                {event.subtitle}
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12">
          <Button 
            variant="accent"
            size="lg"
            className="font-medium h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
            asChild
          >
            <Link to="/contact">
              Make an Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhereToFindUs;