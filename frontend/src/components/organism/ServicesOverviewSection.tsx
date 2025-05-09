import Image from "next/image"
import ServicesOverview from "../molecules/ServicesOverview"
import iconLogo from "../../../public/svg/icon-logo.svg"


const ServicesOverviewSection = () => {
  return (
    <div className="flex flex-col bg-light-gray-10 justify-center items-center 2xl1920:py-[120px] 2xl1920:px-[162px] xl1440:p-20 px-4 py-10  gap-[clamp(40px,6vw,100px)]">
      <div className="flex flex-row justify-center items-center gap-5 xl1440:gap-10 2xl1920:gap-20">
        <div className="relative min-w-[60px] min-h-[60px] md:size-[120px] xl:size-[150px] flex items-center
        ">
          <Image src={iconLogo} alt="icon logo" className=" object-contain"/>
        </div>
        <div>
          <div className="gap-[30px]">
            <span className="span-gray-highlight text-[clamp(0.875rem,1.2vw,1.25rem)]">Learn, Connect, and Innovate</span>
            <h1 className="text-[clamp(1.75rem,2.6vw,3.625rem)]">Be Part of the Future Tech Revolution</h1>
          </div>
          <p className="text-[clamp(0.875rem,1.2vw,1.125rem)] text-[var(--color-light-gray-60)]">Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
        </div>
      </div>
      <ServicesOverview />
    </div>
  )
}

export default ServicesOverviewSection
