import Hero from "@/components/organism/Hero";
import AboutSection from "@/components/organism/AboutSection";

import ServicesOverviewSection from "@/components/organism/ServicesOverviewSection";
import Testimonials from "@/components/organism/Testimonials";
import ResourcesSections from "@/components/organism/ResourcesSections";

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Testimonials />
      <ResourcesSections />

      <ServicesOverviewSection />
    </>
  );
};
export default HomeLayout;
