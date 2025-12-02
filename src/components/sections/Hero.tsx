import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Gamepad2, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-igaming.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(222_49%_49%_/_0.05),_transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Trusted iGaming Solutions Provider</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight">
              Your <span className="text-primary">Next Step</span> in Gaming Success
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-xl">
              NSGS Global delivers comprehensive iGaming solutions—from licensing and platform setup to operations, payments, and compliance. We power your journey from license to launch, and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="accent"
                className="font-semibold shadow-elegant group"
              >
                EXPLORE OUR SERVICES
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold group shadow-sm"
              >
                MAKE AN INQUIRY
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-navy-dark">50+</p>
                <p className="text-sm text-muted-foreground">Clients Served</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-navy-dark">15+</p>
                <p className="text-sm text-muted-foreground">Jurisdictions</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-navy-dark">98%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src={heroImage}
                alt="Professional iGaming compliance and licensing services"
                className="w-full h-[550px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-heading font-bold shadow-lg">
              iGaming Compliance
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white px-6 py-3 rounded-xl font-heading font-bold shadow-lg">
              Licensed & Regulated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;