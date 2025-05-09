import Image from "next/image";
import iconArrow from "../../../public/svg/icon-arrow.svg"

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}


const ServiceCard = ({title, description, className}: ServiceCardProps) => {
  return (
    <div className={`h-[144px] md:h-[168px] xl:h-[206px] flex flex-col gap-4 container-gray-border p-6 xl:p-10 bg-light-gray-10 ${className}`}>
      <div className="h-[52px] flex flex-row justify-between items-center gap-5">
        <h3 className="text-[clamp(1rem,1.5vw,1.375rem)] font-semibold" >{title}</h3>
        <div className="relative size-[52px] bg-amber-400 rounded-full flex justify-center items-center">
          <Image
            src={iconArrow}
            alt="icon Arrow"
            width={24}
            height={24}
            className="hover:rotate-45 transition-all duration-600"
          />
        </div>
      </div>
      <p className="h-[54px] text-[clamp(0.875rem,1.2vw,1.125rem)] text-[var(--color-light-gray-60)] line-clamp-3">{description}</p>
    </div>
  )
}

export default ServiceCard;
