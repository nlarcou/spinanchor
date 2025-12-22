import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Shield, 
  CheckCircle2,
  FileText,
  MessageSquare,
  Handshake,
  Send
} from "lucide-react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast.success("Thank you for your application. We will review and respond within 5 business days.");
      setFormData({ name: "", email: "", role: "", message: "" });
    }
  };

  const whyWorkWithUs = [
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Work with clients across 30+ jurisdictions and gain expertise in diverse regulatory environments."
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Continuous learning opportunities in a rapidly evolving industry with mentorship from senior experts."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a team of experienced professionals who value knowledge sharing and collective problem-solving."
    },
    {
      icon: Shield,
      title: "Meaningful Impact",
      description: "Help shape responsible iGaming operations and contribute to market integrity worldwide."
    }
  ];

  const openRoles = [
    {
      title: "Senior Compliance Analyst",
      location: "Larnaca, Cyprus (Hybrid)",
      type: "Full-time",
      description: "Lead AML/CFT compliance reviews and regulatory assessments for iGaming operators across European and emerging markets. Requires 5+ years in compliance with strong knowledge of MGA, UKGC, and multi-jurisdictional frameworks."
    },
    {
      title: "Licensing Specialist",
      location: "Larnaca, Cyprus (On-site)",
      type: "Full-time",
      description: "Manage end-to-end licensing applications for gaming operators. Coordinate with regulators, prepare documentation packages, and guide clients through approval processes. 3+ years in iGaming licensing required."
    },
    {
      title: "Payments & Banking Consultant",
      location: "Remote (EU timezone)",
      type: "Full-time",
      description: "Advise clients on payment processing strategies, PSP integrations, and banking relationships. Deep understanding of Tier 1/2/3 payment solutions and acquiring bank requirements essential."
    },
    {
      title: "Corporate Services Coordinator",
      location: "Larnaca, Cyprus (Hybrid)",
      type: "Full-time",
      description: "Support corporate structuring, entity formations, and ongoing corporate maintenance for iGaming clients. Experience with Cyprus, Malta, and offshore jurisdictions preferred."
    }
  ];

  const hiringProcess = [
    {
      step: 1,
      icon: FileText,
      title: "Application Review",
      description: "Submit your application and our team reviews your background within 5 business days."
    },
    {
      step: 2,
      icon: MessageSquare,
      title: "Initial Conversation",
      description: "A 30-minute call with our HR team to discuss your experience and career goals."
    },
    {
      step: 3,
      icon: Users,
      title: "Technical Interview",
      description: "In-depth discussion with the hiring manager covering role-specific competencies."
    },
    {
      step: 4,
      icon: Handshake,
      title: "Final Interview & Offer",
      description: "Meet with leadership, discuss expectations, and receive a formal offer."
    }
  ];

  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers at NSGS Global | Join Our Team</title>
        <meta name="description" content="Join NSGS Global and build your career in iGaming consulting. Explore open positions in compliance, licensing, payments, and corporate services." />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Careers
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Join a team of iGaming specialists delivering licensing, compliance, and strategic advisory services to operators worldwide. We value expertise, integrity, and a commitment to excellence.
            </p>
            <Button size="lg" className="w-full sm:w-auto" onClick={scrollToApply}>
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
              Why Work With Us
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {whyWorkWithUs.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Open Positions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {openRoles.map((role, index) => (
                <AccordionItem 
                  key={index} 
                  value={`role-${index}`}
                  className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left py-5 hover:no-underline">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        <span className="text-xs text-muted-foreground">{role.location}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-primary font-medium">{role.type}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {role.description}
                    </p>
                    <Button size="sm" onClick={scrollToApply}>
                      Apply for this role
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
              Our Hiring Process
            </h2>
            
            {/* Desktop Timeline */}
            <div className="hidden md:grid grid-cols-4 gap-6">
              {hiringProcess.map((step, index) => (
                <div key={index} className="relative">
                  {index < hiringProcess.length - 1 && (
                    <div className="absolute top-5 left-1/2 w-full h-0.5 bg-border" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Vertical Steps */}
            <div className="md:hidden space-y-4">
              {hiringProcess.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    {index < hiringProcess.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply Block */}
      <section id="apply" className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <Send className="h-10 w-10 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Apply Now
              </h2>
              <p className="text-muted-foreground">
                Submit your interest and we'll review your application promptly. Please include relevant experience and the role you're applying for.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Position of Interest</Label>
                <Input
                  id="role"
                  type="text"
                  placeholder="e.g., Senior Compliance Analyst"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Cover Letter / Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your experience and why you'd like to join NSGS Global..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              <p className="text-xs text-muted-foreground">
                To attach your CV/resume, please email it directly to <a href="mailto:careers@nsgs.pro" className="text-primary hover:underline">careers@nsgs.pro</a> referencing your application.
              </p>
              
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Apply Button */}
      <div className="md:hidden fixed bottom-20 left-4 right-4 z-40">
        <Button 
          size="lg" 
          className="w-full shadow-lg"
          onClick={scrollToApply}
        >
          Apply Now
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
