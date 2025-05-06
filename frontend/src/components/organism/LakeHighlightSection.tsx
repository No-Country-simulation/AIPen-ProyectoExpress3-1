import GlassContainer from "../atoms/GlassContainer";
import WaveSeparator from "../atoms/WaveSeparator";

const CARD1_TITLE = "SEAMOS TODOS PARTE DEL CAMBIO";
const CARD1_TEXT =
  "El planeta nos necesita, el cambio climático amenaza la sostenibilidad de la Tierra. Promovamos juntos acciones responsables para hacer la diferencia.";

const LakeHighlightSection = () => {
  return (
    <div
      className=" relative text-dark-gray container-padding pt-[110px] pb-[160px] flex  w-screen min-h-[calc(100vh)] overflow-hidden bg-cover  bg-no-repeat filter brightness-110 "
      style={{
        backgroundImage: "url('/images/bg-lakeHighlightSection.webp')",
      }}
    >
      <GlassContainer
        className="h-max text-[clamp(0.70rem,2.5vw,1rem)] text-white "
        isCardShadow={true}
      >
        <h5 className="font-bold">{CARD1_TITLE}</h5>
        <p>{CARD1_TEXT}</p>
      </GlassContainer>
      <WaveSeparator className="absolute left-0 -top-1 backdrop-blur-3xl bg-green-light/60 h-7!" flip={true}  color="transparent"/>
      <WaveSeparator className="absolute left-0 -top-1 backdrop-blur-3xl bg-green-light/30 h-6!" flip={true}  color="transparent"/>
      <WaveSeparator className="absolute left-0 -top-1 backdrop-blur-3xl bg-green-light/15 h-5!" flip={true}  color="transparent"/>
      
     
      <WaveSeparator className="absolute  -bottom-10 left-0 "  />
      <WaveSeparator className="absolute  -top-12 left-0 " color="#ffffff"  flip={true} />

    </div>
  );
};

export default LakeHighlightSection;
