import GlassContainer from "../atoms/GlassContainer";
import WaveSeparator from "../atoms/WaveSeparator";

const CARD1_TITLE = "SEAMOS TODOS PARTE DEL CAMBIO";
const CARD1_TEXT =
  "El planeta nos necesita, el cambio climático amenaza la sostenibilidad de la Tierra. Promovamos juntos acciones responsables para hacer la diferencia.";

const SacredTreesMapSection = () => {
  return (
    <div
      className="relative text-dark-gray container-padding pt-[110px] pb-[160px] flex  justify-end  w-screen min-h-[calc(100vh)] overflow-hidden bg-cover bg-no-repeat filter brightness-110 "
      style={{
        backgroundImage: "url('/images/bg-SacredTreesMapSection.webp')",
      }}
    >
      <GlassContainer
        className="h-max text-[clamp(0.70rem,2.5vw,1rem)] text-white "
        isCardShadow={true}
      >
        <h5 className="font-bold">{CARD1_TITLE}</h5>
        <p>{CARD1_TEXT}</p>
      </GlassContainer>
      <WaveSeparator className="absolute left-0 -top-1 backdrop-blur-3xl bg-green-primary/20 h-3!" flip={true}  color="transparent"/>
      <WaveSeparator className="absolute left-0 -top-2 backdrop-blur-3xl bg-green-primary/30 h-4!" flip={true}  color="transparent"/>
      <WaveSeparator className="absolute left-0 -top-3 backdrop-blur-3xl bg-green-primary/40 h-5!" flip={true}  color="transparent"/>

    </div>
  );
};

export default SacredTreesMapSection;
