import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhereToFindUs = () => {
  const events = [
    "IMGL Autumn Conference",
    "SBC Summit Barcelona",
    "SiGMA",
    "iGB Live",
    "ICE London",
    "Casino Beats Summit",
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

        {/* Events - Simple inline list */}
        <div className="flex flex-wrap gap-4 mb-12">
          {events.map((event, index) => (
            <span
              key={index}
              className="px-5 py-2.5 bg-background border border-border/60 rounded-full text-sm font-medium text-foreground"
            >
              {event}
            </span>
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