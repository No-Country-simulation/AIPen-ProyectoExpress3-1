"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonNavBar from "../atoms/ButtonNavBar";
import AnimatedLink from "../atoms/AnimatedLink";
import iconBrand from "../../../public/svg/iconBrand.svg";

import Link from "next/link";

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
      className={`text-white w-full flex justify-between items-center px-8 py-4 transition-shadow duration-300 glass-ui ${
        isScrolled
          ? "shadow-[0_0_30px_-10px_rgba(255,255,255,0.5)] bg-black/75"
          : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={iconBrand}
            alt="Icon Brand CO2llector"
            height={54}
            width={54}
          />
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex justify-center items-center gap-12 text-sm font-semibold">
        <AnimatedLink href="/#Acerca" text="ACERCA" />
        <AnimatedLink href="/#RespaldoProfesional" text="RESPALDO" />
        <AnimatedLink href="/#Suscribete" text="SUSCRIBETE" />
        {/* <Image src={iconNavSearch} height={26} width={16} alt="Search" />
        <Image src={iconNavEmail} height={26} width={16} alt="Email" />
        <Image src={iconNavAvatar} height={26} width={16} alt="Profile" />
        <Image src={iconNavWorld} height={26} width={16} alt="World" /> */}
        <ButtonNavBar text="CALCULADORA" classname="px-6 py-2.5 font-medium" href="/carbon-calculator"/>
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
        ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <div onClick={handleMobileNavClick}>
          <AnimatedLink href="/#Acerca" text="ACERCA" />
        </div>
        <div onClick={handleMobileNavClick}>
          <AnimatedLink href="/#RespaldoProfesional" text="RESPALDO" />
        </div>
        <div onClick={handleMobileNavClick}>
          <AnimatedLink href="/#Suscribete" text="SUSCRIBETE" />
        </div>
        <div onClick={handleMobileNavClick}>
          <AnimatedLink href="/carbon-calculator" text="CALCULADORA" />
        </div>
        <div className="flex gap-6 mt-4">
          {/* <Image src={iconNavSearch} height={26} width={16} alt="Search" />
          <Image src={iconNavEmail} height={26} width={16} alt="Email" />
          <Image src={iconNavAvatar} height={26} width={16} alt="Profile" />
          <Image src={iconNavWorld} height={26} width={16} alt="World" /> */}
        </div>
        {/* <ButtonNavBar text="CALCULADORA" classname="mt-6 px-6 py-2.5 font-medium"  href="/carbon-calculator"/> */}
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
