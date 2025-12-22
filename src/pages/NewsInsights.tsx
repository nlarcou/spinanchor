import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowRight, Bell, FileText, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NewsInsights = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter.");
      setEmail("");
    }
  };

  const featuredArticles = [
    {
      title: "European iGaming Regulatory Outlook 2026",
      excerpt: "A comprehensive analysis of upcoming regulatory changes across key European markets, including Germany, Netherlands, and emerging jurisdictions.",
      date: "December 2025",
      category: "Regulatory Analysis",
      readTime: "8 min read"
    },
    {
      title: "Navigating Payment Processing in Tier 2 Markets",
      excerpt: "Strategic considerations for operators seeking reliable payment infrastructure in developing iGaming markets across Latin America and Africa.",
      date: "December 2025",
      category: "Payments & Banking",
      readTime: "6 min read"
    }
  ];

  const companyUpdates = [
    {
      title: "NSGS Global Expands Cyprus Operations",
      summary: "New office space and expanded team to support growing client base across European and CIS markets.",
      date: "November 2025"
    },
    {
      title: "Partnership with Leading KYC Provider",
      summary: "Strategic partnership to streamline client onboarding and compliance verification processes.",
      date: "October 2025"
    },
    {
      title: "2026 Event Schedule Announced",
      summary: "NSGS Global confirms attendance at major iGaming conferences including ICE Barcelona, SBC Summit, and SiGMA Europe.",
      date: "September 2025"
    },
    {
      title: "New Compliance Advisory Services Launched",
      summary: "Enhanced AML and responsible gambling advisory services now available for operators in regulated markets.",
      date: "August 2025"
    }
  ];

  const quickUpdates = [
    "MGA introduces updated player protection requirements effective Q1 2026",
    "German market consolidation continues with stricter advertising regulations",
    "Brazil iGaming licensing framework nearing final approval",
    "Isle of Man updates technical standards for B2B providers",
    "Netherlands KSA enforcement actions increase 40% year-over-year"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>News & Insights | NSGS Global</title>
        <meta name="description" content="Stay informed with the latest iGaming regulatory news, industry insights, and company updates from NSGS Global." />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              News & Insights
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Industry analysis, regulatory updates, and strategic insights from NSGS Global. Stay informed on developments that matter to your iGaming business.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Bell className="h-4 w-4 mr-2" />
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Featured Insights
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {featuredArticles.map((article, index) => (
                <article 
                  key={index}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Updates Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Company Updates
              </h2>
            </div>

            {/* Desktop List */}
            <div className="hidden md:block space-y-4">
              {companyUpdates.map((update, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {update.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {update.summary}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {update.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden">
              <Accordion type="single" collapsible className="space-y-2">
                {companyUpdates.map((update, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`update-${index}`}
                    className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left py-4 hover:no-underline">
                      <div>
                        <h3 className="font-heading font-semibold text-foreground text-sm">
                          {update.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">{update.date}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm pb-4">
                      {update.summary}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Updates Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Industry Pulse
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
              <ul className="space-y-4">
                {quickUpdates.map((update, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {update}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe Block */}
      <section id="newsletter" className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <Bell className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-muted-foreground mb-8">
              Receive regulatory updates and industry insights directly to your inbox. We respect your privacy and send only relevant, actionable content.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsInsights;
