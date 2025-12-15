import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Jurisdictions = () => {
  const jurisdictions = [
    {
      name: "Malta Gaming Authority (MGA)",
      bestFor: "Best for established operators targeting EU markets",
      details: [
        "Known for regulatory depth and strong reputation",
        "Structured compliance and higher entry requirements"
      ]
    },
    {
      name: "Curaçao",
      bestFor: "Best for fast go live and cost efficient market entry",
      details: [
        "Evolving regulatory framework with increased substance requirements",
        "Suitable for specific business models and markets"
      ]
    },
    {
      name: "UK Gambling Commission",
      bestFor: "Best for operators targeting the UK market",
      details: [
        "Most stringent regulatory requirements globally",
        "Premium market access with high compliance standards"
      ]
    },
    {
      name: "Gibraltar",
      bestFor: "Best for established operators seeking tax efficiency",
      details: [
        "Strong reputation and regulatory framework",
        "Access to EU markets with favourable tax structure"
      ]
    },
    {
      name: "Isle of Man",
      bestFor: "Best for operators seeking innovation-friendly regulation",
      details: [
        "Established framework with operator-friendly approach",
        "Strong reputation for esports and crypto-related gaming"
      ]
    },
    {
      name: "Estonia",
      bestFor: "Best for digital-first operators targeting EU markets",
      details: [
        "EU member state with efficient licensing processes",
        "Modern regulatory approach with digital focus"
      ]
    }
  ];

  return (
    <section id="jurisdictions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            iGaming jurisdictions we support
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choosing the right jurisdiction is a strategic decision that impacts licensing timelines, compliance obligations, payments, and long term scalability. We support clients across leading iGaming jurisdictions, helping them select and operate in markets aligned with their business model.
          </p>
        </div>

        {/* Jurisdictions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jurisdictions.map((jurisdiction, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">
                    {jurisdiction.name}
                  </h3>
                </div>
                <p className="text-primary font-medium text-sm mb-3">
                  {jurisdiction.bestFor}
                </p>
                <ul className="space-y-2 flex-grow">
                  {jurisdiction.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Not sure which jurisdiction fits your business?
          </p>
          <Button 
            size="lg" 
            variant="accent"
            className="font-semibold shadow-elegant group"
            asChild
          >
            <Link to="/contact?service=discovery">
              BOOK A DISCOVERY CALL
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Jurisdictions;