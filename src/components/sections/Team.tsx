const Team = () => {
  const expertiseAreas = [
    "Regulatory compliance and AML programme development",
    "Licensing applications and regulatory liaison",
    "Payments, PSP onboarding, and banking introductions",
    "Corporate structuring and legal coordination",
    "Technology requirements and operational readiness"
  ];

  const accountabilityPoints = [
    {
      number: "01",
      text: "Senior-led oversight on all engagements"
    },
    {
      number: "02", 
      text: "Single point of contact for each client"
    },
    {
      number: "03",
      text: "Jurisdiction-specific expertise per project"
    },
    {
      number: "04",
      text: "Confidential, NDA-first approach"
    }
  ];

  return (
    <section id="team" className="relative py-12 sm:py-16 lg:py-32 bg-muted/20 overflow-hidden">
      {/* Top border for separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      {/* Background structure */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />
      
      {/* Large decorative accent shape - hidden on mobile */}
      <div className="hidden sm:block absolute -left-[200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/5 pointer-events-none" />
      <div className="hidden sm:block absolute -left-[250px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main content panel with subtle elevation */}
        <div className="max-w-5xl relative">
          {/* Left accent bar - hidden on mobile */}
          <div className="absolute -left-4 lg:-left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/25 via-primary/10 to-transparent rounded-full hidden sm:block" />
          
          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20">
            {/* Left column */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
                Our Expertise and Delivery Model
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We operate through a senior-led delivery model supported by a trusted network of specialists. Our expertise spans compliance, licensing, payments, corporate services, and technology across multiple jurisdictions.
              </p>
            </div>
            
            {/* Right column - Expertise list with enhanced styling */}
            <div className="lg:pt-2">
              <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 sm:p-6 lg:p-8">
                <ul className="space-y-3 sm:space-y-4">
                  {expertiseAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-3 sm:gap-4 text-foreground group">
                      {/* Number indicator */}
                      <span className="text-xs font-heading font-semibold text-primary/40 mt-0.5 sm:mt-1 w-5 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {/* Vertical line connector */}
                      <div className="relative flex-shrink-0 w-[2px] self-stretch">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5" />
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Separator with accent */}
        <div className="max-w-5xl my-8 sm:my-12 lg:my-16 relative">
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-primary/20 via-border/40 to-transparent" />
          {/* Separator dot accent */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/20" />
        </div>

        {/* Accountability subsection - elevated panel */}
        <div className="max-w-5xl">
          <div className="bg-card border border-border/40 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10 shadow-subtle relative overflow-hidden">
            {/* Corner accent - hidden on mobile */}
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none hidden sm:block">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary/15 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-primary/15 to-transparent" />
              <div className="absolute top-4 right-4 w-8 h-8 border border-primary/10 rounded" />
            </div>
            
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-5 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="w-6 sm:w-8 h-[2px] bg-primary/30 rounded-full" />
              How We Ensure Accountability
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {accountabilityPoints.map((point, index) => (
                <div key={index} className="relative">
                  {/* Number badge */}
                  <span className="block text-xl sm:text-2xl font-heading font-semibold text-primary/15 mb-1 sm:mb-2">
                    {point.number}
                  </span>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {point.text}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary/10 to-transparent mt-4" style={{ marginTop: '16px' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
