"use client";

import Image from "next/image";
import ScrollToTopButton from "../molecules/ScroollToTopButton";
import ButtonNavBar from "../atoms/ButtonNavBar";
import ButtonNavLink from "../atoms/ButtonNavLink";

interface PropsColumn {
  title: string;
  items: string[];
  isButton?: boolean;
}

const columns: PropsColumn[] = [
  {
    title: "Home",
    items: ["Featured", "Blogs", "Resources", "Testimonials", "Contact Us", "Newsletter"],
  },
  {
    title: "News",
    items: ["Trending Stories", "Featured Videos", "Technology", "Health", "Politics", "Environment"],
  },
  {
    title: "Blogs",
    items: ["Quantum Computing", "AI Ethics", "Space Exploration", "Biotechnology", "Renewable Energy", "Biohacking"],
  },
  {
    title: "Podcasts",
    items: ["AI Revolution", "AI Revolution", "TechTalk AI", "AI Conversations"],
  },
  {
    title: "Resources",
    items: ["Whitepapers", "Ebooks", "Reports", "Research Papers"],
    isButton: true,
  },
];

const FooterColumn = ({ title, items, isButton }: PropsColumn) => (
  <div className="flex flex-col gap-2.5">
    <p className="backdrop-blur-2xl text-[clamp(1rem,1vw,1.25rem)] text-white">
      {title}
    </p>
    <ul className="flex flex-col gap-[18px] text-[clamp(0.875rem,1.2vw,1.125rem)]">
      {items.map((item, i) => (
        <li key={i}>
          <ButtonNavLink text={item} isBorder={!!isButton} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <div className="relative w-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="text-dark-gray relative w-full flex flex-col justify-between items-center bg-black/10 backdrop-blur-xs bg-cover bg-no-repeat filter brightness-110">
        <div className="flex justify-between items-start py-[60px] w-full text-sm gap-8 flex-wrap container-padding">
          {columns.map((col, index) => (
            <FooterColumn
              key={index}
              title={col.title}
              items={col.items}
              isButton={col.isButton}
            />
          ))}
        </div>

        <div className="w-full flex justify-between items-center text-[22px] py-5 px-8 font-extrabold">
          <p>© 2025 CO2llector | All rights reserved</p>
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
