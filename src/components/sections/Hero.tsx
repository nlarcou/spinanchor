import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-igaming.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center bg-background overflow-hidden">
      {/* Layered background elements */}
      {/* Primary gradient - soft blue glow from top-right */}
      <div 
        className="absolute top-0 right-0 w-[70%] h-[80%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 70% 20%, hsl(222 49% 49% / 0.06) 0%, transparent 60%)',
        }}
      />
      
      {/* Secondary gradient - subtle warm accent from bottom-left */}
      <div 
        className="absolute bottom-0 left-0 w-[50%] h-[60%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 20% 80%, hsl(222 49% 39% / 0.04) 0%, transparent 50%)',
        }}
      />
      
      {/* Geometric accent lines - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Diagonal line accent */}
        <div 
          className="absolute top-[10%] right-[5%] w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          style={{ transform: 'rotate(-15deg)' }}
        />
        <div 
          className="absolute top-[15%] right-[8%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/8 to-transparent"
          style={{ transform: 'rotate(-15deg)' }}
        />
        
        {/* Subtle corner arc */}
        <div 
          className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full border border-primary/5"
        />
        <div 
          className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] rounded-full border border-primary/3"
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* H1 Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-foreground leading-[1.15] tracking-tight mb-5 sm:mb-8">
              Your Next Step to Global Gaming Success
            </h1>
            
            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              NSGS Global delivers comprehensive, end-to-end iGaming and gambling solutions.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Leverage our years of expertise and solid global contacts to cover every critical step, connect you with reliable sources and shorten your time to market. We handle:
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Corporate Structure • Legal Advice and legal opinions • Multi-Jurisdictional Licensing • Banking & Processing • Platform Setup • Operations & Compliance cost savings on a wide range of services from processing aggregation to game aggregation and software development.
            </p>
            
            <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed mb-6 sm:mb-10">
              We are a powerhouse—fast, exceptionally well-connected, and laser-focused on your results.
            </p>
            
            {/* CTAs - stack on mobile with proper spacing */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <Button 
                variant="accent"
                size="lg"
                className="font-medium px-6 sm:px-8 w-full sm:w-auto justify-center"
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
                className="font-medium px-6 sm:px-8 w-full sm:w-auto justify-center"
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
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-start gap-4 sm:gap-8 lg:gap-16 py-4 sm:py-6">
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-xl font-semibold text-foreground">50+</span>
              <span className="text-xs sm:text-sm text-muted-foreground">businesses supported</span>
            </div>
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-xl font-semibold text-foreground">15+</span>
              <span className="text-xs sm:text-sm text-muted-foreground">jurisdictions covered</span>
            </div>
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-xl font-semibold text-foreground">High</span>
              <span className="text-xs sm:text-sm text-muted-foreground">completion rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;