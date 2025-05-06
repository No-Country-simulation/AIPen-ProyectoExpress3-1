import GlassContainer from "../atoms/GlassContainer";
import ButtonNavBar from "../atoms/ButtonNavBar";
import KeyMetrics from "../atoms/KeyMetrics";
import ContainerStrokeGrayDivisor from "../molecules/ContainerDivisorStrokeGray";
import FeatureCard from "../atoms/FeatureCard";
import asteriskIcon from "../../../public/svg/icon-asterisk.svg";
// 🧾 TEXTOS PRINCIPALES
const HERO_TITLE = "Calculadora de Huella de Carbono para Empresas";
const HERO_DESCRIPTION =
  "Medí el impacto ambiental que genera tu trabajo. Usá esta herramienta gratuita para conocer y mejorar tu desempeño sostenible.";
const HERO_BUTTON = "Mida su huella de carbono";
const HERO_BUTTON_TEXT = "Conozca más";

// 🧾 CARDS DE ABAJO
const CARD1_TITLE = "ESG";
const CARD1_TEXT =
  "Evalúe el compromiso ambiental, social y de gobernanza de su empresa, organismo de gobierno, u organización para medir su sostenibilidad y responsabilidad";

const CARD2_TITLE = "COMPROMÉTASE";
const CARD2_TEXT =
  "Las iniciativas sostenibles promueven prácticas responsables que cuidan el ambiente, impulsan la equidad y mejoran la gestión empresarial y gubernamental.";

const Hero = () => {
  return (
    <div
      className="relative w-screen min-h-[calc(100vh+8rem)] overflow-hidden bg-cover bg-center bg-no-repeat filter  "
      style={{
        backgroundImage: "url('/images/bg-section-hero.webp')",
      }}
    >
      <div className="w-full flex flex-col justify-between items-start pt-[100px] pb-[50px] text-white ">
        <GlassContainer className="gap-3" isCardShadow={true}>
          <h1 className="text-[clamp(1.25rem,3vw,3rem)] font-medium whitespace-pre-line leading-[1.2]">
            {HERO_TITLE}
          </h1>
          <p className="text-[clamp(0.90rem,2.5vw,1.40rem)] font-light">
            {HERO_DESCRIPTION}
          </p>
          <div className="flex w-full justify-between items-center">
            <ButtonNavBar
              text={HERO_BUTTON}
              width="w-max"
              classname="t px-2 py-2 md:px-6 sm:py-2.5 text-xs md:text-base uppercase"
              href="/carbon-calculator"
            />
            <p className=" font-bold hidden md:block text-2xl uppercase">
              {HERO_BUTTON_TEXT}
            </p>
          </div>
        </GlassContainer>

        <ContainerStrokeGrayDivisor>
          <div className="px-[50px] ">
            <div className="pl-[62px]">
              <KeyMetrics value="300" description="recursos disponibles" />
            </div>
          </div>
          <div className="px-[50px]">
            <KeyMetrics value="12k" description="descargas totales" />
          </div>
          <div className="px-[50px]">
            <KeyMetrics value="10k" description="usuarios activos" />
          </div>
        </ContainerStrokeGrayDivisor>
        <ContainerStrokeGrayDivisor>
          <div className="2xl1920px-[80px] xl1440:px-[50px] px-4 ">
            <div className="pl-[32px]">
              <FeatureCard
                pathIcon={asteriskIcon}
                title="latest update news"
                subtitle="stay current"
                description="Over 1,000 articles published monthly"
              />
            </div>
          </div>
          <div className="2xl1920px-[80px] xl1440:px-[50px] px-4">
            <FeatureCard
              pathIcon={asteriskIcon}
              title="latest update news"
              subtitle="stay current"
              description="Over 1,000 articles published monthly"
            />
          </div>
          <div className="2xl1920px-[80px] xl1440:px-[50px] px-4">
            <FeatureCard
              pathIcon={asteriskIcon}
              title="latest update news"
              subtitle="stay current"
              description="Over 1,000 articles published monthly"
            />
          </div>
        </ContainerStrokeGrayDivisor>
      </div>
    </div>
  );
};

export default Hero;
