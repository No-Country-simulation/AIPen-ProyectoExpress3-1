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
        <div className="flex">
          <div className="2xl1920:pl-[162px] 2xl1920:pr-[50px] xl1440:pl-[80px] xl1440:pr-[40px] px-4 ">
            <h2 className="text-[clamp(1.125rem,2.5vw,1.875rem)] text-light-gray-40">
              Your Journey to Tomorrow Begins Here
            </h2>
            <h1 className="text-[clamp(2rem,5vw,4.35rem)]">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <h3 className="text-[clamp(1rem,2.5vw,1.125rem)] text-light-gray-40">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </h3>
          </div>
        </div>

        <ContainerStrokeGrayDivisor>
          <div className="px-[50px] ">
            <div className="xl1440pl-[30px] 2xl1920:pl-[112px]">
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
          <div className="sm:px-[50px] xl1440:px-[80px] 2xl1920:px-[162px]">
            <div className="">
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
