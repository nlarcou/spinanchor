import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Jurisdictions = () => {
  const jurisdictions = [
    {
      name: "Malta Gaming Authority (MGA)",
      bestFor: "Established operators targeting EU markets",
      details: [
        "Regulatory depth and strong reputation",
        "Higher entry requirements"
      ]
    },
    {
      name: "Curaçao",
      bestFor: "Fast go-live and cost-efficient market entry",
      details: [
        "Evolving regulatory framework",
        "Suitable for specific business models"
      ]
    },
    {
      name: "UK Gambling Commission",
      bestFor: "Operators targeting the UK market",
      details: [
        "Most stringent requirements globally",
        "Premium market access"
      ]
    },
    {
      name: "Gibraltar",
      bestFor: "Established operators seeking tax efficiency",
      details: [
        "Strong reputation and framework",
        "Favourable tax structure"
      ]
    },
    {
      name: "Isle of Man",
      bestFor: "Innovation-friendly regulation",
      details: [
        "Operator-friendly approach",
        "Strong for esports and crypto"
      ]
    },
    {
      name: "Estonia",
      bestFor: "Digital-first operators targeting EU",
      details: [
        "Efficient licensing processes",
        "Modern regulatory approach"
      ]
    }
  ];

  return (
    <section id="jurisdictions" className="py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            iGaming jurisdictions we support
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choosing the right jurisdiction impacts licensing timelines, compliance obligations, payments, and long-term scalability. We help clients select and operate in markets aligned with their business model.
          </p>
        </div>

        {/* Jurisdictions Grid - Cards appropriate here */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jurisdictions.map((jurisdiction, index) => (
            <Card key={index} className="border-border/40 hover:border-border transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-foreground">
                  {jurisdiction.name}
                </h3>
                <p className="text-primary text-sm font-medium">
                  {jurisdiction.bestFor}
                </p>
                <ul className="space-y-2">
                  {jurisdiction.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-border/40 pt-12">
          <p className="text-muted-foreground mb-6">
            Not sure which jurisdiction fits your business?
          </p>
          <Button 
            variant="accent"
            className="font-medium"
            asChild
          >
            <Link to="/contact?service=discovery">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Jurisdictions;