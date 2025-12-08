import Hero from "@/components/Home/Hero";
import CoreCapabilities from "@/components/Home/CoreCapabilities";
import PowerOfAI from "@/components/Home/PowerOfAI";
import FuturisticApproach from "@/components/Home/FuturisticApproach";
import CloneYourEmployee from "@/components/Home/CloneYourEmployee";
import ServiceTiers from "@/components/Home/ServiceTiers";
import CTA from "@/components/Home/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <CoreCapabilities />
      <PowerOfAI />
      <FuturisticApproach />
      <CloneYourEmployee />
      <ServiceTiers />
      <CTA />
    </div>
  );
};

export default Home;
