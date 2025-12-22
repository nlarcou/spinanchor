import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Abstract geographic network pattern - suggests global connectivity without specific maps
const GeoPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Abstract globe arc lines */}
    <svg
      className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04]"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Concentric arcs suggesting globe curvature */}
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" className="text-primary" />
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" className="text-primary" />
      <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" className="text-primary" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1" className="text-primary" />
      
      {/* Latitude lines */}
      <ellipse cx="200" cy="200" rx="180" ry="60" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
      <ellipse cx="200" cy="200" rx="180" ry="120" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
      
      {/* Longitude lines */}
      <ellipse cx="200" cy="200" rx="60" ry="180" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
      <ellipse cx="200" cy="200" rx="120" ry="180" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
    </svg>

    {/* Connection nodes - abstract network points */}
    <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-primary/10" />
    <div className="absolute top-[25%] left-[25%] w-1.5 h-1.5 rounded-full bg-primary/8" />
    <div className="absolute top-[40%] left-[8%] w-1 h-1 rounded-full bg-primary/6" />
    <div className="absolute bottom-[30%] left-[15%] w-2 h-2 rounded-full bg-primary/10" />
    <div className="absolute bottom-[20%] left-[5%] w-1.5 h-1.5 rounded-full bg-primary/8" />
    
    {/* Connecting lines between nodes */}
    <svg className="absolute top-0 left-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none">
      <line x1="10%" y1="15%" x2="25%" y2="25%" stroke="currentColor" strokeWidth="1" className="text-primary" />
      <line x1="25%" y1="25%" x2="8%" y2="40%" stroke="currentColor" strokeWidth="1" className="text-primary" />
      <line x1="8%" y1="40%" x2="15%" y2="70%" stroke="currentColor" strokeWidth="1" className="text-primary" />
      <line x1="15%" y1="70%" x2="5%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-primary" />
    </svg>

    {/* Grid overlay - subtle structure */}
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(222 49% 49% / 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(222 49% 49% / 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    />
  </div>
);

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
    <section id="jurisdictions" className="relative py-12 sm:py-16 lg:py-32 bg-muted/20 overflow-hidden">
      {/* Top border for separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      {/* Abstract geographic pattern */}
      <GeoPattern />
      
      {/* Radial glow - reduced opacity for balance */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-60" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with subtle accent line */}
        <div className="max-w-2xl mb-4 sm:mb-6 relative">
          {/* Decorative line - hidden on mobile */}
          <div className="absolute -left-4 lg:-left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary/10 to-transparent hidden sm:block" />
          
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
            Jurisdictions we support
          </h2>
        </div>

        {/* Advisory line */}
        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl">
          Choosing the right jurisdiction impacts licensing, compliance, and payments.
        </p>

        {/* Jurisdictions Grid - 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 relative">
          {jurisdictions.map((jurisdiction, index) => (
            <div
              key={index}
              className="group relative p-5 sm:p-6 lg:p-7 bg-card border border-border/40 rounded-xl shadow-subtle hover:shadow-card hover:border-primary/20 transition-all duration-200"
            >
              {/* Subtle corner accent - hidden on mobile */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-xl pointer-events-none hidden sm:block">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-primary/15 to-transparent" />
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-primary/15 to-transparent" />
              </div>
              
              <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                {jurisdiction.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-primary font-medium mb-3 sm:mb-4">
                {jurisdiction.bestFor}
              </p>
              
              <ul className="space-y-1 sm:space-y-1.5">
                {jurisdiction.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8">
          <Link 
            to="/contact?service=jurisdiction"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group min-h-[44px]"
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
