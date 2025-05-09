import ContainerStrokeGrayDivisor from "../molecules/ContainerDivisorStrokeGray";
import HeaderSection from "../molecules/HeaderSection";
import Image from "next/image";
import iconEbook from "../../../public/svg/icon-ebooks.svg";
import iconWhitePaper from "../../../public/svg/icon-whitepaper.svg";
import ButtonNavLink from "../atoms/ButtonNavLink";
import iconArrow90deg from "@/../public/svg/icon-arrow-simple.svg";
import variety_topics from "../../../public/png/variety_topics_image.png";
import iconEyes from "../../../public/svg/icon-eyes.svg";
import AvatarContainer from "../atoms/AvatarContainer";
const ResourcesSections = () => {
  return (
    <div className="w-full min-h-screen">
      <HeaderSection
        label="Your Gateway to In-Depth Information"
        title="Unlock Valuable Knowledge with FutureTech's Resources"
        hasLinkButton={true}
        textButton="View All Resources"
        classnameButton="text-nowrap min-w-max ml-10"
      />

      <div>
        <ContainerStrokeGrayDivisor>
          <div className="flex flex-col gap-[50px] 2xl1920:pl-[162px] xl1440:pl-[80px] p-4 sm:pr-5 md:pr-14 xl1440:pr-[80px] justify-center  ">
            <Image
              src={iconEbook}
              alt="icon logo ebook"
              width={64}
              height={64}
            />
            <div>
              <h5>Ebooks</h5>
              <p>
                Explore our collection of ebooks covering a wide spectrum of
                future technology topics.
              </p>
            </div>
            <ButtonNavLink
              text="Download Ebooks Now"
              isBorder={true}
              icon={iconArrow90deg}
              classname="w-max"
            />
            <div className="container-gray-border flex flex-row items-center justify-between p-5 gap-8">
              <div className="flex-2/3">
                <p className="text-nowrap">Download By</p>
                <p>10K+ Users</p>
              </div>
              <div className="flex-1/3 ml-2">
                <AvatarContainer />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1.875rem] 2xl1920:pr-[162px] xl1440:py-[80px] p-4 sm:pr-4 md:pr-20 xl1440:pl-[80px] justify-center col-span-2">
            <div className="flex gap-14 items-center">
              <h5 className="text-nowrap">Variety of Topics</h5>
              <p>
                Topics include AI in education (25%), renewable energy (20%),
                healthcare (15%), space exploration (25%), and biotechnology
                (15%).
              </p>
            </div>
            <div className="relative w-full h-[275px] rounded-[10px] overflow-hidden">
              <Image
                src={variety_topics}
                alt="image variety topics"
                fill
                className="object-cover"
              />
            </div>
            <div className="[&>div]:p-6! flex flex-col gap-[1.875rem]">
              <div className="container-gray-border flex flex-row items-center justify-between">
                <p>Total Ebooks</p>
                <p>Over 100 ebooks</p>
              </div>
              <div className="container-gray-border flex flex-row items-center justify-between">
                <div>
                  <p>Download Formats</p>
                  <p>PDF format for access.</p>
                </div>
                <ButtonNavLink
                  text="Preview"
                  isBorder={true}
                  icon={iconEyes}
                  classname="w-max"
                />
              </div>
            </div>
          </div>
        </ContainerStrokeGrayDivisor>
      </div>
    </div>
  );
};

export default ResourcesSections;
