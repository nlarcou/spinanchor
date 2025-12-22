import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Events = () => {
  const events2026 = [
    {
      date: "January 13–16, 2026",
      event: "ICE Barcelona",
      location: "Barcelona, Spain",
      focus: "Licensing, compliance partnerships, and market expansion across Europe and LatAm"
    },
    {
      date: "February 24–26, 2026",
      event: "iGB Affiliate",
      location: "Barcelona, Spain",
      focus: "Affiliate compliance frameworks and regulatory onboarding"
    },
    {
      date: "March 17–19, 2026",
      event: "SBC Summit Americas",
      location: "Hollywood, FL, USA",
      focus: "US market entry, tribal gaming, and state licensing strategies"
    },
    {
      date: "April 21–23, 2026",
      event: "SBC Summit CIS",
      location: "Tbilisi, Georgia",
      focus: "CIS market regulatory developments and banking solutions"
    },
    {
      date: "May 12–14, 2026",
      event: "iGB Live",
      location: "Amsterdam, Netherlands",
      focus: "European licensing updates and payment processing partnerships"
    },
    {
      date: "June 9–11, 2026",
      event: "G2E Asia",
      location: "Macau, SAR China",
      focus: "Asia-Pacific market entry and regulatory compliance"
    },
    {
      date: "September 8–10, 2026",
      event: "SBC Summit",
      location: "Lisbon, Portugal",
      focus: "Global iGaming strategy and cross-border licensing"
    },
    {
      date: "October 6–8, 2026",
      event: "G2E Las Vegas",
      location: "Las Vegas, NV, USA",
      focus: "US regulatory landscape and tribal gaming partnerships"
    },
    {
      date: "November 17–19, 2026",
      event: "SiGMA Europe",
      location: "Malta",
      focus: "MGA licensing, compliance frameworks, and European expansion"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Upcoming iGaming Events 2026 | NSGS Global</title>
        <meta name="description" content="Meet NSGS Global at major iGaming events in 2026. Schedule a meeting to discuss licensing, compliance, and market entry strategies." />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Upcoming iGaming Events
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              NSGS Global attends leading iGaming conferences worldwide. Connect with our team to discuss licensing, compliance, banking, and market entry strategies tailored to your business objectives.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Schedule a Meeting</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events List Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              2026 Event Schedule
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-heading font-semibold text-foreground">Date</TableHead>
                    <TableHead className="font-heading font-semibold text-foreground">Event</TableHead>
                    <TableHead className="font-heading font-semibold text-foreground">Location</TableHead>
                    <TableHead className="font-heading font-semibold text-foreground">Strategic Focus</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events2026.map((event, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          {event.date}
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold text-foreground">{event.event}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          {event.location}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground max-w-xs">{event.focus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {events2026.map((event, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                    {event.event}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground text-sm">
                    <Target className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{event.focus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Policy Block */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Meeting Policy
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 text-left space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Pre-Meeting Requirements:</strong> To ensure productive discussions, we require prospective clients to complete our standard onboarding documentation prior to scheduling in-person meetings at events.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">KYC/AML Compliance:</strong> All new client engagements are subject to our Know Your Customer and Anti-Money Laundering verification procedures. This includes corporate documentation review and beneficial ownership verification.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Engagement Terms:</strong> Formal meetings are conducted under our standard confidentiality framework. A mutual NDA can be executed upon request prior to any detailed strategic discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Connect?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a meeting with our team at any upcoming event. All discussions are held in strict confidence under our standard NDA framework.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Schedule a Meeting</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
