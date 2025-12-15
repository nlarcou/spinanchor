import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-igaming.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-background py-24 lg:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-background"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left space-y-10">
            <p className="text-sm font-medium text-primary tracking-wide">
              Trusted iGaming Services Partner
            </p>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-foreground leading-[1.15] tracking-tight">
              Launch and scale your iGaming operation with confidence
            </h1>
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Licensing, compliance, payments, and operational setup across key jurisdictions. From application to go-live, we handle the hard parts so you can focus on growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                variant="accent"
                className="font-medium text-base px-8 py-6"
                asChild
              >
                <Link to="/contact?service=discovery">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="font-medium text-base px-8 py-6"
                asChild
              >
                <Link to="/contact">
                  Request a Consultation
                </Link>
              </Button>
            </div>

            {/* Micro trust line */}
            <p className="text-sm text-muted-foreground pt-2">
              Jurisdiction experience across Europe and beyond. NDA available. Confidential by default.
            </p>

            {/* Stats - simplified, no icons */}
            <div className="flex flex-wrap gap-12 pt-6 border-t border-border/50">
              <div>
                <p className="text-3xl font-semibold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Businesses supported</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Jurisdictions covered</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">High</p>
                <p className="text-sm text-muted-foreground mt-1">Completion rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={heroImage}
                alt="Professional iGaming compliance and licensing services"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;