import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";


const Jurisdictions = () => {
  const decisionGroups = [
    {
      title: "Fast go-live",
      description: "Streamlined processes for quicker market entry",
      jurisdictions: ["Curaçao", "Kahnawake", "Anjouan"]
    },
    {
      title: "Market access",
      description: "Strategic positioning for key player markets",
      jurisdictions: ["Malta (EU)", "UK", "Gibraltar", "Estonia (EU)"]
    },
    {
      title: "Regulatory depth",
      description: "Established frameworks with strong reputations",
      jurisdictions: ["Malta", "UK", "Gibraltar", "Isle of Man"]
    }
  ];

  const jurisdictions = [
    {
      name: "Malta Gaming Authority",
      bestFor: "Established operators targeting EU markets",
      details: ["Strong regulatory reputation", "Full EU market access", "Higher compliance investment"]
    },
    {
      name: "UK Gambling Commission",
      bestFor: "Operators targeting the UK market",
      details: ["Strictest global standards", "Premium market access", "Significant compliance requirements"]
    },
    {
      name: "Gibraltar",
      bestFor: "Tax-efficient EU operations",
      details: ["Established framework", "Favourable tax structure", "Strong industry reputation"]
    },
    {
      name: "Curaçao",
      bestFor: "Fast market entry and cost efficiency",
      details: ["Streamlined application", "Lower entry requirements", "Evolving regulatory framework"]
    },
    {
      name: "Isle of Man",
      bestFor: "Innovation-friendly regulation",
      details: ["Operator-friendly approach", "Crypto and esports focus", "Efficient processes"]
    },
    {
      name: "Estonia",
      bestFor: "Digital-first EU operators",
      details: ["Modern regulatory approach", "EU member state", "Efficient licensing"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              iGaming jurisdictions we support
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choosing the right jurisdiction impacts your licensing timeline, compliance obligations, payment options, and long-term scalability. We help you select and operate in markets aligned with your business model and growth objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Selector */}
      <section className="py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10">
              Choose based on your priority
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {decisionGroups.map((group, index) => (
                <div key={index}>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {group.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    {group.description}
                  </p>
                  <ul className="space-y-2">
                    {group.jurisdictions.map((jurisdiction, jIndex) => (
                      <li key={jIndex} className="flex items-center gap-2.5 text-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {jurisdiction}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Full Jurisdiction Grid */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              All supported jurisdictions
            </h2>
            <p className="text-muted-foreground">
              Detailed overview of each jurisdiction we support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {jurisdictions.map((jurisdiction, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 bg-background border border-border/50 rounded-xl"
              >
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {jurisdiction.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-5">
                  {jurisdiction.bestFor}
                </p>
                <ul className="space-y-2">
                  {jurisdiction.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Not sure which jurisdiction fits your business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a discovery call to discuss your specific requirements and objectives.
            </p>
            <Button 
              variant="accent"
              size="lg"
              className="font-medium h-12 px-8"
              asChild
            >
              <Link to="/contact?service=discovery">
                Book a Discovery Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jurisdictions;