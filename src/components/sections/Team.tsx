import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield } from "lucide-react";

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
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Our Expertise and Delivery Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            NSGS Global operates through a senior-led delivery model supported by a trusted network of specialised professionals. Our expertise spans iGaming compliance, licensing, payments, corporate services, technology, and legal coordination across multiple jurisdictions. We prioritise discretion, confidentiality, and practical delivery in every engagement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-card mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  How We Ensure Accountability
                </h3>
              </div>
              <ul className="space-y-3">
                {accountabilityPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
