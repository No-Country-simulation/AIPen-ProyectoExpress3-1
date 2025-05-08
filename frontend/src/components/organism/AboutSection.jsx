import Image from "next/image"
import HeaderSection from "../molecules/HeaderSection"

const AboutSection = () => {
    return (
        <div id="Acerca" className="relative w-full min-h-screen flex flex-col-reverse md768:flex-row justify-center  gap-6  font-montserrat ">
            <HeaderSection label="Unlock the Power of" title="FutureTech Features"  hasLinkButton={true} textButton="view blog"/>
        </div>
    )
}

export default AboutSection