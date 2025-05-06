import DraggableScroll from "./DragggableScrollContainer";
import ProjectCartd from "../molecules/ProjectCartd";
import ButtonNavBar from "../atoms/ButtonNavBar";

const InsightsGallerySection = () => {
  return (
    <div
      id="RespaldoProfesional"
      className=" relative scroll-mt-18 sm:scroll-mt-0 text-dark-gray  container-padding w-screen  min-h-screen flex flex-col justify-center items-center gap-7 md768:gap-10 xl1440:gap-[80px] 2xl:gap-[104px] xl1440:py-[160px] md768:py-[80px] py-10 font-montserrat "
    >
      <div className="flex flex-col gap-4 md768:gap-6  ">
        <div className="flex flex-col gap-1 md768:gap-2 ">
          <p className="font-bold ">RESPALDO PROFESIONAL</p>
          <h5 className="text-[clamp(18px,5.5vw,37px)] text-gradient-green text-transparent font-bold">
            Contamos en nuestro equipo con destacados profesionales ambientales
            para asesorarlo.
          </h5>
        </div>
        <p className="text-[clamp(14px,2.5vw,29px)] font-light ">
          Brindamos asesoramiento ambiental profesional y personalizado. Creamos
          propuestas a medida para que su empresa u organización reduzca su
          huella de carbono de forma efectiva, alineando sostenibilidad con sus
          objetivos y capacidades reales.
        </p>
      </div>
      <div className="w-screen flex flex-col gap-6 md768:gap-10">
        <DraggableScroll>
          <ProjectCartd
            title="neem-tree"
            alternativeTitle="The Neem Tree of Thailand: A Medicinal and Ecological Treasure"
            imageUrl="/images/pictures_gallery_section_2.webp"
            author="Nisa Patel"
            date="Sept. 01, 2022"
          />
          <ProjectCartd
            title="neem-tree"
            alternativeTitle="The Neem Tree of Thailand: A Medicinal and Ecological Treasure"
            imageUrl="/images/pictures_gallery_section_1.webp"
            author="Nisa Patel"
            date="Sept. 01, 2022"
          />
          

          <ProjectCartd
            title="neem-tree"
            alternativeTitle="The Neem Tree of Thailand: A Medicinal and Ecological Treasure"
            imageUrl="/images/pictures_gallery_section_3.webp"
            author="Nisa Patel"
            date="Sept. 01, 2022"
          />
  
        </DraggableScroll>
      </div>
      <ButtonNavBar text="Contáctenos" classname="px-6 py-2.5 uppercase bg-black text-white border-2 border-black!" />
      
    </div>
  );
};

export default InsightsGallerySection;
