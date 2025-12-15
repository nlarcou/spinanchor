import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

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
    <section className="py-28 lg:py-36 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            Where you can find us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Meet our team at leading iGaming industry events across Europe and beyond.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {events.map((event, index) => (
            <a
              key={index}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 bg-background border border-border/40 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 text-center"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {event.name}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                {event.subtitle}
              </span>
              <ExternalLink className="h-3 w-3 text-muted-foreground/50 mt-3 group-hover:text-primary/60 transition-colors" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button 
            variant="accent"
            className="font-medium"
            onClick={() => window.location.href = '/contact'}
          >
            Make an Appointment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhereToFindUs;