import KeyMetrics from "../atoms/KeyMetrics";
import ContainerStrokeGrayDivisor from "../molecules/ContainerDivisorStrokeGray";
import FeatureCard from "../atoms/FeatureCard";
import asteriskIcon from "../../../public/svg/icon-asterisk.svg";
import iconArrow90deg from "@/../public/svg/icon-arrow-simple.svg";
import sunWhiteImage from "../../../public/svg/sun-white.svg";
import Image from "next/image";
import ButtonNavLink from "../atoms/ButtonNavLink";

const HERO_CONTENT = {
  subtitle: "Ahora tu trabajo lo hace la Inteligencia Artificial",
  title: "Crea el contenido para tu blog automáticamente",
  description:
    "Con esta herramienta puedes generar desde títulos atractivos, subtítulos y párrafos para tus artículos, hasta posts enteros sobre tus temas de interés para tu blog o sitio web",
  ctaTitle: "Explore 1000+ resources",
  ctaDescription:
    "Over 1,000 articles on emerging tech trends and breakthroughs.",
  ctaButtonText: "Explore Resources",
};

const keyMetricsData = [
  { value: "300", description: "recursos disponibles" },
  { value: "12k", description: "descargas totales" },
  { value: "10k", description: "usuarios activos" },
];

const featureCardsData = [
  {
    pathIcon: asteriskIcon,
    title: "latest update news",
    subtitle: "stay current",
    description: "Over 1,000 articles published monthly",
  },
  {
    pathIcon: asteriskIcon,
    title: "latest update news",
    subtitle: "stay current",
    description: "Over 1,000 articles published monthly",
  },
  {
    pathIcon: asteriskIcon,
    title: "latest update news",
    subtitle: "stay current",
    description: "Over 1,000 articles published monthly",
  },
];

const Hero = () => {
  return (
    <div
      className="relative w-screen min-h-[calc(100vh+8rem)] overflow-hidden bg-cover bg-center bg-no-repeat filter  "
      style={{
        backgroundImage: "url('/images/bg-section-hero.webp')",
      }}
    >
      <div className="w-full flex flex-col justify-between items-start pt-[110px]  text-white ">
        <div className="flex ">
          <div className="  ">
            <div className="pb-[100px] 2xl1920:pl-[162px] xl1440:pl-[80px]  2xl1920:pr-[50px] xl1440:pr-[40px] px-4">
              <h2 className="text-[clamp(1.125rem,2.5vw,1.875rem)] text-light-gray-40">
                {HERO_CONTENT.subtitle}
              </h2>
              <h1 className="text-[clamp(2rem,5vw,4.35rem)]">
                {HERO_CONTENT.title}
              </h1>
              <h3 className="text-[clamp(1rem,2.5vw,1.125rem)] text-light-gray-40">
                {HERO_CONTENT.description}
              </h3>
            </div>
            <ContainerStrokeGrayDivisor>
              <div className="px-[50px] ">
                <div className="xl1440pl-[30px] 2xl1920:pl-[112px]">
                  <KeyMetrics
                    value={keyMetricsData[0].value}
                    description={keyMetricsData[0].description}
                  />
                </div>
              </div>
              <div className="px-[50px]">
                <KeyMetrics
                  value={keyMetricsData[1].value}
                  description={keyMetricsData[1].description}
                />
              </div>
              <div className="px-[50px]">
                <KeyMetrics
                  value={keyMetricsData[2].value}
                  description={keyMetricsData[2].description}
                />
              </div>
            </ContainerStrokeGrayDivisor>
          </div>
          <div className="relative w-full overflow-hidden border-l border-stroke-gray 2xl1920:pr-[162px] xl1440:pr-[80px] ">
            <div className="absolute -translate-x-28 -translate-y-2 rotate-[6deg] w-full h-full opacity-65  -z-10">
              <Image
                src={sunWhiteImage}
                alt="sun"
                fill={true}
                className="aboslute"
              ></Image>
            </div>
            <div className="flex flex-col gap-7 justify-end h-full  pt-[160px] pl-20 pb-20 z-50">
              <h3>{HERO_CONTENT.ctaTitle}</h3>
              <p>{HERO_CONTENT.ctaDescription}</p>
              <ButtonNavLink
                classname="w-max flex-row-reverse"
                text={HERO_CONTENT.ctaButtonText}
                icon={iconArrow90deg}
                isBorder={true}
              />
            </div>
          </div>
        </div>

        <ContainerStrokeGrayDivisor>
          <div className="sm:px-[50px] xl1440:px-[80px] 2xl1920:px-[162px]">
            <div className="">
              <FeatureCard {...featureCardsData[0]} />
            </div>
          </div>
          <div className="2xl1920px-[80px] xl1440:px-[50px] px-4">
            <FeatureCard {...featureCardsData[1]} />
          </div>
          <div className="2xl1920px-[80px] xl1440:px-[50px] px-4">
            <FeatureCard {...featureCardsData[2]} />
          </div>
        </ContainerStrokeGrayDivisor>
      </div>
    </div>
  );
};

export default Hero;
