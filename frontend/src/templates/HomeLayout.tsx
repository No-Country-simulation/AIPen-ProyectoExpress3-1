import Hero from "@/components/organism/Hero";
import AboutSection from "@/components/organism/AboutSection";

import ServicesOverviewSection from "@/components/organism/ServicesOverviewSection";
import Testimonials from "@/components/organism/Testimonials";


const HomeLayout = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Testimonials />
      {/* <ContributionInfoSection /> */}

      <ServicesOverviewSection />
    </>
  );
};
export default HomeLayout;
