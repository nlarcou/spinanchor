import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Jurisdictions = () => {
  const jurisdictions = [
    {
      name: "Malta Gaming Authority",
      bestFor: "Best for established operators targeting EU markets",
      details: [
        "Strong regulatory reputation",
        "Higher compliance requirements",
        "Full EU market access"
      ]
    },
    {
      name: "Curaçao",
      bestFor: "Best for fast market entry and cost efficiency",
      details: [
        "Streamlined application process",
        "Lower entry requirements",
        "Evolving regulatory framework"
      ]
    },
    {
      name: "UK Gambling Commission",
      bestFor: "Best for operators targeting the UK market",
      details: [
        "Strictest global standards",
        "Premium market access",
        "High compliance investment"
      ]
    },
    {
      name: "Gibraltar",
      bestFor: "Best for tax-efficient EU operations",
      details: [
        "Established framework",
        "Favourable tax structure",
        "Strong industry reputation"
      ]
    },
    {
      name: "Isle of Man",
      bestFor: "Best for innovation-friendly regulation",
      details: [
        "Operator-friendly approach",
        "Crypto and esports focus",
        "Efficient processes"
      ]
    },
    {
      name: "Estonia",
      bestFor: "Best for digital-first EU operators",
      details: [
        "Modern regulatory approach",
        "EU member state benefits",
        "Efficient licensing"
      ]
    }
  ];

  return (
    <section id="jurisdictions" className="py-32 lg:py-40 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-6">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            Jurisdictions we support
          </h2>
        </div>

        {/* Advisory line */}
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Choosing the right jurisdiction impacts licensing, compliance, and payments.
        </p>

        {/* Jurisdictions Grid - 3 columns desktop, 1 mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {jurisdictions.map((jurisdiction, index) => (
            <div
              key={index}
              className="p-6 lg:p-7 bg-background border border-border/50 rounded-xl"
            >
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                {jurisdiction.name}
              </h3>
              
              <p className="text-sm text-primary font-medium mb-4">
                {jurisdiction.bestFor}
              </p>
              
              <ul className="space-y-1.5">
                {jurisdiction.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8">
          <Link 
            to="/contact?service=jurisdiction"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            Discuss jurisdiction selection
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jurisdictions;