"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonNavBar from "../atoms/ButtonNavBar";
import AnimatedLink from "../atoms/AnimatedLink";
import iconBrand from "../../../public/svg/logo-iconAiPen.svg";
import Link from "next/link";
import ButtonNavLink from "../atoms/ButtonNavLink";
import ButtonNavColor from "../atoms/ButtonNavColor";

const navLinks = [
  { href: "/#Acerca", text: "Home" },
  { href: "/#RespaldoProfesional", text: "News" },
  { href: "/#Suscribete", text: "Podcasts" },
  { href: "/carbon-calculator", text: "Resources", isButton: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`text-white bg-light-gray-10 w-full flex justify-between items-center px-4 xl1440:px-20 2xl1920:px-[162px] py-5 transition-shadow duration-300 glass-ui ${
        isScrolled
          ? "shadow-[0_0_30px_-10px_rgba(255,255,255,0.5)] bg-light-gray/5"
          : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={iconBrand}
            alt="Icon Brand CO2llector"
            height={120}
            width={120}
          />
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex justify-center items-center gap-4 text-sm font-semibold">
        {navLinks.map((link, index) =>
          link.isButton ? (
            <ButtonNavLink
              key={index}
              text={link.text}
              classname="py-2.5!"
              href={link.href}
              isBorder={true}
              fontSize="text-[16px]"
            />
          ) : (
            <ButtonNavLink key={index} href={link.href} text={link.text} isBorder={true} classname="py-2.5! font-medium border-0! hover:border-2!]"/>
          )
        )}
      </div>
      <div>
        <ButtonNavColor />
      </div>

      {/* Hamburger menu icon */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`h-screen fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center text-white text-xl gap-6 font-semibold
        transition-all duration-500 ease-in-out transform
        ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {navLinks.map((link, index) => (
          <div key={index} onClick={handleMobileNavClick}>
            <AnimatedLink href={link.href} text={link.text} />
          </div>
        ))}

        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Navbar;
