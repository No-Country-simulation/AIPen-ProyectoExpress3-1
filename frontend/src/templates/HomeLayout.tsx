import Hero from "@/components/organism/Hero";
import AboutSection from "@/components/organism/AboutSection";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import avatarPrueba from "@/../public/png/avatar5.png";
import ServicesOverviewSection from "@/components/organism/ServicesOverviewSection";


const HomeLayout = () => {
  return (
    <>
      <Hero />
      <AboutSection />

      {/* <ContributionInfoSection /> */}
      <TestimonialCard avatarSrc={avatarPrueba} name="Sarah Thompson" location="San Francisco, USA" testimonial="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated." rating={5} />
      <ServicesOverviewSection />
    </>
  );
};
export default HomeLayout;
