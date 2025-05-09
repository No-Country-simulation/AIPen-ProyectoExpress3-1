"use client";
import Link from "next/link";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
interface ButtonNavLinkProps {
  text: string;
  textOnHover?: string;
  icon?: StaticImageData | string;
  iconHover?: StaticImageData | string;
  href?: string;
  width?: string;
  fontSize?: string;
  onClick?: () => void;
  classname?: string;
  isBorder?: boolean;
}

const ButtonNavLink = ({
  text,
  textOnHover,
  icon,
  iconHover,
  href,
  width,
  fontSize,
  onClick,
  classname,
  isBorder,
}: ButtonNavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center gap-2.5 px-6 py-4.5 flex-row-reverse  capitalize rounded-[12px]  ${
        isBorder ? "border-[1.1px] border-stroke-gray " : ""
      } cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-black ${classname} ${width} ${fontSize} ${
        isHovered ? "flex-row-reverse" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(icon || iconHover) && (
        <span className="hover:rotate-45 transition-all duration-600">
          <Image
            src={
              (isHovered && iconHover ? iconHover : icon) as
                | StaticImageData
                | string
            }
            alt="icon"
            width={18}
            height={18}
            
          />
        </span>
      )}
      <span className="mx-auto">
        {isHovered && textOnHover ? (
          textOnHover
        ) : href ? (
          <Link href={href}>{text}</Link>
        ) : (
          <span className="text-[clamp(0.875rem,1.2vw,1.125rem)] text-light-gray-60">
            {text}
          </span>
        )}
      </span>
    </div>
  );
};

export default ButtonNavLink;
