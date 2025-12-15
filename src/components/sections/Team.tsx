import { CheckCircle } from "lucide-react";

const Team = () => {
  const expertiseAreas = [
    {
      title: "Regulatory Compliance and AML",
      description: "Hands-on experience developing and implementing compliance frameworks, AML programmes, and responsible gaming controls for licensed iGaming operators."
    },
    {
      title: "Licensing and Regulatory Liaison",
      description: "Direct experience preparing licence applications and managing ongoing regulatory relationships across European and international jurisdictions."
    },
    {
      title: "Payments, PSPs, and Banking Support",
      description: "Practical guidance on payment provider selection, integration support, and banking relationship development for regulated gaming businesses."
    },
    {
      title: "Corporate and Legal Structuring",
      description: "Expertise in establishing compliant corporate structures, directorship arrangements, and legal coordination for multi-jurisdictional operations."
    },
    {
      title: "Technology and Operational Readiness",
      description: "Experience supporting platform selection, technical compliance requirements, and operational setup for market launch."
    }
  ];

  const accountabilityPoints = [
    "Senior-led oversight on all engagements",
    "A single point of contact for each client",
    "Jurisdiction-specific expertise assigned per project",
    "Confidential, NDA-first handling of all client engagements"
  ];

  return (
    <section id="team" className="py-28 lg:py-36 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            Our Expertise and Delivery Model
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NSGS Global operates through a senior-led delivery model supported by a trusted network of specialised professionals. Our expertise spans iGaming compliance, licensing, payments, corporate services, technology, and legal coordination across multiple jurisdictions. We prioritise discretion, confidentiality, and practical delivery in every engagement.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-6xl">
          {/* Expertise Areas - Simple stacked layout */}
          <div className="space-y-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Accountability Section */}
          <div className="lg:pt-2">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-8">
              How We Ensure Accountability
            </h3>
            <ul className="space-y-4">
              {accountabilityPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;