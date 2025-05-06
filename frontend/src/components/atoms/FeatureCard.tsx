import Image from "next/image";
import iconArrow from "../../../public/svg/icon-arrow.svg";
interface FeatureCardProps {
  pathIcon: string;
  title: string;
  subtitle: string;
  description: string;
}
const FeatureCard = ({
  pathIcon,
  title,
  subtitle,
  description,
}: FeatureCardProps) => {
  return (
    <div className="py-[50px] flex flex-col gap-[30px]">
      <div className="relative size-[50px]">
        <Image src={pathIcon} alt="icon feature" fill />
      </div>
      <div className="flex justify-between gap-5 capitalize">
        <div className="flex flex-col justify-between">
          <h3 className="text-[clamp(1rem,1.5vw,1.25rem)]">{title}</h3>
          <p className="text-[clamp(0.875rem,2.5vw,1.125rem)] font-light text-light-gray-40"> {subtitle}</p>
        </div>
        <div className="relative size-[52px] bg-amber-400 rounded-full flex justify-center items-center">
          <Image
            src={iconArrow}
            alt="icon Arrow"
            width={16.5}
            height={16.5}
            className="hover:rotate-45 transition-all duration-600"
          />
        </div>
      </div>
      <p className="text-[clamp(0.90rem,2.5vw,1.125rem)] text-light-gray-40">{description}</p>
    </div>
  );
};

export default FeatureCard;
