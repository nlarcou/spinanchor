import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              WE TAKE{" "}
              <span className="relative">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  THE COMPLEX
                </span>
              </span>
              <br />
              OFF YOUR HANDS
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              Grow your business with our personalized digital solutions and corporate services.
            </p>
            
            <p className="text-base text-white/80 mb-8 leading-relaxed">
              From strategy to implementation, we ensure your business stays ahead of the curve, 
              saving you time, money, and energy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-warm-coral hover:bg-warm-coral/90 text-white group"
              >
                EXPLORE OUR SERVICES
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 group"
              >
                MAKE AN INQUIRY
                <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional team collaborating"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-chip-gold text-deep-navy px-4 py-2 rounded-lg font-heading font-semibold shadow-lg">
              Professional Solutions
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-deep-navy px-4 py-2 rounded-lg font-heading font-semibold shadow-lg">
              Trusted by 500+ Companies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;