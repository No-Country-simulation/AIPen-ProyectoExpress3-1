import Image from "next/image";
import iconStar from "@/../public/svg/icon-star.svg"


interface TestimonialCardProps {
  name: string;
  location: string;
  avatarSrc: string;
  testimonial: string;
  rating?: number; // opcional por si quieres menos estrellas después
}

const TestimonialCard = ({
  name,
  location,
  avatarSrc,
  testimonial,
  rating = 5,
}: TestimonialCardProps) => {
  return (
    <div className="h-[469px] max-w-[465px] mx-auto bg-black text-white gap-10 p-10 flex flex-col items-center space-y-4">

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
          <p className="text-gray-400 text-[clamp(1rem, 1.2vw, 1.125rem">{location}</p>
        </div>
      </div>

      <div className="relative max-w-[465px] h-[209px]">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[180px] flex flex-row justify-center items-center gap-[7px] py-2.5 px-4 border border-gray-800 rounded-full">
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

        <div className="h-[180px] bg-dark-gray px-[30px] rounded-xl flex flex-col justify-center items-center border border-gray-700">
          <p className="text-center text-[clamp(0.0875rem,1.5vw,1.125rem)] line-clamp-4 leading-relaxed">
            {testimonial}
          </p>
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;