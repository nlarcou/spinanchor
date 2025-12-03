import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Jurisdictions from "@/components/sections/Jurisdictions";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WhereToFindUs from "@/components/sections/WhereToFindUs";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Jurisdictions />
      <WhyChooseUs />
      <WhereToFindUs />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
