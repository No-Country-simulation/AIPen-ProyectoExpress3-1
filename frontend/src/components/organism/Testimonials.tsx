import { StaticImageData } from "next/image";
import ContainerStrokeGrayDivisor from "../molecules/ContainerDivisorStrokeGray";
import TestimonialCard from "../molecules/TestimonialCard";
import avatarPrueba from "@/../public/png/avatar5.png";
import { div } from "framer-motion/client";
import HeaderSection from "../molecules/HeaderSection";

interface Testimonial {
  name: string;
  location: string;
  avatar: string | StaticImageData;
  comment: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Thompson",
    location: "San Francisco, USA",
    avatar: avatarPrueba,
    comment:
      "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    location: "Mumbai, India",
    avatar: avatarPrueba,
    comment:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
    rating: 5,
  },
  {
    name: "Emily Adams",
    location: "London, UK",
    avatar: avatarPrueba,
    comment:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
    rating: 5,
  },
  {
    name: "Alan Jackson",
    location: "Houston, USA",
    avatar: avatarPrueba,
    comment:
      "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
    rating: 5,
  },
  {
    name: "Jessica Miller",
    location: "Boston, USA",
    avatar: avatarPrueba,
    comment:
      "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
    rating: 5,
  },
  {
    name: "Diego Lopez",
    location: "Barcelona, Spain",
    avatar: avatarPrueba,
    comment:
      "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="w-full">
      <HeaderSection
        label="What Our Readers Sayh"
        title="Real Words from Real Readers"
        hasLinkButton={true}
        textButton="View All Testimonials"
      />
      <ContainerStrokeGrayDivisor classname="place-content-center! grid-cols-1! md:grid-cols-2! xl:grid-cols-3!">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <TestimonialCard
              name={testimonial.name}
              location={testimonial.location}
              avatarSrc={testimonial.avatar}
              testimonial={testimonial.comment}
              rating={testimonial.rating}
            />
          </div>
        ))}
      </ContainerStrokeGrayDivisor>
    </div>
  );
};

export default Testimonials;
