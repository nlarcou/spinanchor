import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Gamepad2, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-igaming.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white">Trusted iGaming Solutions Provider</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your <span className="text-primary">Next Step</span> in Gaming <span className="text-secondary">Success</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              NSGS Global delivers comprehensive iGaming solutions—from licensing and platform setup to operations, payments, and compliance. We power your journey from license to launch, and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-elegant group"
              >
                EXPLORE OUR SERVICES
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-secondary text-white hover:bg-secondary hover:text-white font-semibold group"
              >
                MAKE AN INQUIRY
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-primary" />
                  <p className="text-3xl font-bold text-white">50+</p>
                </div>
                <p className="text-sm text-white/70">Clients Served</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <p className="text-3xl font-bold text-white">15+</p>
                </div>
                <p className="text-sm text-white/70">Jurisdictions</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <p className="text-3xl font-bold text-white">98%</p>
                </div>
                <p className="text-sm text-white/70">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage}
                alt="Professional iGaming compliance and licensing services"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-semibold shadow-lg">
              iGaming Compliance
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white px-4 py-2 rounded-lg font-heading font-semibold shadow-lg">
              Licensed & Regulated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;