import Image from "next/image";
import iconStar from "@/../public/svg/icon-star.svg"


interface TestimonialCardProps {
  name: string;
  location: string;
  avatarSrc: string;
  testimonial: string;
  rating?: number;
  className?: string;
}

const TestimonialCard = ({
  name,
  location,
  avatarSrc,
  testimonial,
  rating = 5,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={`mx-auto flex flex-col items-center container-padding-card ${className}`}>

      <div className=" flex flex-row justify-center items-center gap-3">
        <div className="relative size-[60px]">
          <Image
            src={avatarSrc}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center ">
          <h3 className="font-semibold text-[clamp(1.125rem,1.5vw,1.25rem)]">{name}</h3>
          <p className="text-gray-400 text-[clamp(1rem,1.2vw,1.125rem">{location}</p>
        </div>
      </div>

      <div className="relative max-w-[465px] h-[209px] pt-[23px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] flex flex-row justify-center items-center gap-[7px] py-2.5 px-4 border border-[var(--color-stroke-gray)] rounded-full bg-[var(--background)]">
          {Array.from({ length: rating }).map((_, index) => (
            <div className="relative size-[20px] " key={index}>
              <Image
                key={index}
                src={iconStar}
                alt="Star"
                fill
                className="object-cover"
              />
            </div>

          ))}
        </div>

        <div className="h-[180px] p-6 rounded-xl flex flex-col justify-center items-center container-gray-border pt-5">
          <p className="text-center text-[clamp(0.875rem,1.5vw,1.125rem)] line-clamp-4 leading-relaxed">
            {testimonial}
          </p>
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;