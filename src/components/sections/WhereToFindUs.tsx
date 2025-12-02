import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhereToFindUs = () => {
  const events = [
    { name: "IMGL", subtitle: "Autumn Conference", bgColor: "bg-[#2B5A9B]" },
    { name: "SBC|SUMMIT", subtitle: "BARCELONA", bgColor: "bg-[#1a1a1a]" },
    { name: "SiGMA", subtitle: "CENTRAL EUROPE", bgColor: "bg-[#1a1a1a]" },
    { name: "iGB", subtitle: "LIVE", bgColor: "bg-[#1a1a1a]" },
    { name: "ICE", subtitle: "", bgColor: "bg-[#6B21A8]" },
    { name: "CASINO", subtitle: "BEATS SUMMIT", bgColor: "bg-[#1a1a1a]" },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line x1="0" y1="200" x2="300" y2="100" stroke="currentColor" strokeWidth="1" />
          <line x1="300" y1="100" x2="600" y2="150" stroke="currentColor" strokeWidth="1" />
          <line x1="600" y1="150" x2="900" y2="80" stroke="currentColor" strokeWidth="1" />
          <line x1="900" y1="80" x2="1200" y2="200" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-wide">
            WHERE YOU CAN FIND US
          </h2>
        </div>

        {/* Events Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`w-24 h-24 md:w-28 md:h-28 rounded-full ${event.bgColor} flex flex-col items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}
            >
              <span className="font-bold text-sm md:text-base text-center leading-tight px-2">
                {event.name}
              </span>
              {event.subtitle && (
                <span className="text-[8px] md:text-[10px] text-center leading-tight px-2 opacity-90">
                  {event.subtitle}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="px-8 py-6 text-base font-semibold"
            onClick={() => window.location.href = '/contact'}
          >
            MAKE AN APPOINTMENT
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhereToFindUs;
