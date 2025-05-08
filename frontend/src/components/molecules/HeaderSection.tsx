import ButtonNavLink from "../atoms/ButtonNavLink";
import iconArrow90deg from "@/../public/svg/icon-arrow-simple.svg";
interface HeaderSectionProps {
  label: string;
  title: string;
  hasLinkButton?: boolean;
  textButton?: string;
  hrefButton?: string;
  classnameButton?: string;
}
const HeaderSection = ({
  label,
  title,
  hasLinkButton,
  textButton,
  hrefButton,
  classnameButton,
}: HeaderSectionProps) => {
  return (
    <div className="flex gap-3 justify-between items-center h-max w-full 2xl1920:px-[162px] 2xl1920:py-[120px] xl1440:p-20 font-medium bg-light-gray-10">
      <div className="flex flex-col gap-4">
        <span className="text-[clamp(0.875rem,1.2vw,1.25rem)] span-gray-highlight w-max ">
          {label}
        </span>
        <h2 className=" text-[clamp(1.75rem,3vw,3.5rem)]">{title}</h2>
      </div>
      {hasLinkButton && (
        <ButtonNavLink
          text={textButton as string}
          href={hrefButton}
          classname={`${classnameButton} w-max h-max`}
          icon={iconArrow90deg}
          isBorder={true}
        />
      )}
    </div>
  );
};

export default HeaderSection;
