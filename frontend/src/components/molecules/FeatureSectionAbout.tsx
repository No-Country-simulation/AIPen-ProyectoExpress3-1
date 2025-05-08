import Image, { StaticImageData } from "next/image";
import ContainerStrokeGrayDivisor from "./ContainerDivisorStrokeGray";

interface Feature {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  icon: StaticImageData;
  heading: string;
  description: string;
  features: Feature[];
}

const FeatureSection = ({
  icon,
  heading,
  description,
  features,
}: FeatureSectionProps) => {
  return (
    <ContainerStrokeGrayDivisor classname="grid-cols-1! md:grid-cols-3!">
      {/* Lado izquierdo */}
      <div className="2xl1920:pl-[162px] xl1440:pl-[80px] p-4 sm:pr-5 md:pr-14 xl1440:pr-[80px] min-h-[260px] flex flex-col justify-center gap-12">
        <Image src={icon} alt="icono decorativo" />
        <div className="flex flex-col gap-4">
          <h2 className="text-[clamp(1.125rem,2.5vw,1.875rem)] font-semibold">
            {heading}
          </h2>
          <p className="text-[clamp(0.875rem,1.2vw,1.125rem)] text-light-gray-60">
            {description}
          </p>
        </div>
      </div>

      {/* Lado derecho con features */}
      <div className="p-4 xl1440:p-[60px] 2xl1920:p-20 grid grid-cols-1 sm:grid-cols-2 gap-6 col-span-2">
        {features.map((item, i) => (
          <div key={i} className="container-gray-border p-[40px]">
            <h4 className="text-[clamp(1rem,1.5vw,1.5rem)]">{item.title}</h4>
            <p className="text-[clamp(0.875rem,1.2vw,1.125rem)] text-light-gray-60">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </ContainerStrokeGrayDivisor>
  );
};

export default FeatureSection;
