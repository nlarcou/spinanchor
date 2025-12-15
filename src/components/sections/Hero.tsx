import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-igaming.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-sm text-muted-foreground tracking-wide mb-6">
              Trusted iGaming Services Partner
            </p>
            
            {/* H1 Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-foreground leading-[1.1] tracking-tight mb-8">
              Launch and scale your iGaming operation with confidence
            </h1>
            
            {/* Supporting paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Licensing, compliance, payments, and operational setup across key jurisdictions. From application to go-live, we handle the complexities so you can focus on growth.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                variant="accent"
                size="lg"
                className="font-medium px-8"
                asChild
              >
                <Link to="/contact?service=discovery">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="font-medium px-8"
                asChild
              >
                <Link to="/contact">
                  Request a Consultation
                </Link>
              </Button>
            </div>

            {/* Trust line */}
            <p className="text-sm text-muted-foreground">
              NDA available. Confidential by default.
            </p>
          </div>

          {/* Image - subtle, not distracting */}
          <div className="hidden lg:block">
            <div className="relative rounded-xl overflow-hidden opacity-90">
              <img 
                src={heroImage}
                alt="iGaming compliance and licensing"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics strip - de-emphasized, below hero content */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/30 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-start gap-12 lg:gap-16 py-6">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-foreground">50+</span>
              <span className="text-sm text-muted-foreground">businesses supported</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-foreground">15+</span>
              <span className="text-sm text-muted-foreground">jurisdictions covered</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-foreground">High</span>
              <span className="text-sm text-muted-foreground">completion rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;