import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe } from "lucide-react";
const Team = () => {
  return <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">At NSGS Global, our team is made up of seasoned professionals with a long-standing track record in iGaming compliance, corporate services, and multi-jurisdictional regulatory support.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Expert Professionals at Your Service
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">The NSGS Global team brings decades of collective experience across iGaming compliance, corporate law, licensing, operations, and regulatory affairs. With backgrounds spanning multiple jurisdictions—including Curaçao, Malta, the Netherlands, and Cyprus—our team delivers deep industry knowledge and practical expertise to every client engagement.

We combine global insight with personalised service, ensuring that each client receives strategic guidance tailored to their business goals.</p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Industry Experts</h4>
                  <p className="text-sm text-muted-foreground">Years of specialised experience in iGaming compliance, licensing, corporate administration, and regulatory operations.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Global Network</h4>
                  <p className="text-sm text-muted-foreground">
                    Worldwide presence with local expertise across key iGaming jurisdictions
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Dedicated Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Personalized service with dedicated account managers for each client
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Team;