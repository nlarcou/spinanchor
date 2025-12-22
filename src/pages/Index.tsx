import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Jurisdictions from "@/components/sections/Jurisdictions";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowWeWork from "@/components/sections/HowWeWork";
import WhereToFindUs from "@/components/sections/WhereToFindUs";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Jurisdictions />
      <WhyChooseUs />
      <HowWeWork />
      <WhereToFindUs />
      <Team />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
