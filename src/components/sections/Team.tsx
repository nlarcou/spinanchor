const Team = () => {
  const expertiseAreas = [
    "Regulatory compliance and AML programme development",
    "Licensing applications and regulatory liaison",
    "Payments, PSP onboarding, and banking introductions",
    "Corporate structuring and legal coordination",
    "Technology requirements and operational readiness"
  ];

  const accountabilityPoints = [
    "Senior-led oversight on all engagements",
    "Single point of contact for each client",
    "Jurisdiction-specific expertise per project",
    "Confidential, NDA-first approach"
  ];

  return (
    <section id="team" className="relative py-24 lg:py-32 bg-muted/20 bg-grid-pattern">
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl">
          {/* Left column */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Our Expertise and Delivery Model
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We operate through a senior-led delivery model supported by a trusted network of specialists. Our expertise spans compliance, licensing, payments, corporate services, and technology across multiple jurisdictions.
            </p>
          </div>
          
          {/* Right column - Expertise list */}
          <div className="lg:pt-2">
            <ul className="space-y-4">
              {expertiseAreas.map((area, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="leading-relaxed">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-border/40 my-12 lg:my-16 max-w-5xl" />

        {/* Accountability subsection */}
        <div className="max-w-5xl">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-8">
            How We Ensure Accountability
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {accountabilityPoints.map((point, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;