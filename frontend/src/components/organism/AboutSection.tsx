import HeaderSection from "../molecules/HeaderSection";
import ContainerStrokeGrayDivisor from "../molecules/ContainerDivisorStrokeGray";
import FeatureSection from "../molecules/FeatureSectionAbout";

import blogIcon from "../../../public/svg/icon-triangle.svg";
import researchIcon from "../../../public/svg/icon-circle-simple.svg";

const blogData = {
    icon: blogIcon,
    heading: "Future Technology Blog",
    description: "Stay informed with our blog section dedicated to future technology.",
    features: [
        {
            title: "Quantity",
            description: "Over 1,000 articles on emerging tech trends and breakthroughs.",
        },
        {
            title: "Variety",
            description: "Articles cover fields like AI, robotics, biotechnology, and more.",
        },
        {
            title: "Frequency",
            description: "Fresh content added daily to keep you up to date.",
        },
        {
            title: "Authoritative",
            description: "Written by our team of tech experts and industry professionals.",
        },
    ],
};

const researchData = {
    icon: researchIcon,
    heading: "Research Insights Blogs",
    description: "Dive deep into future technology concepts with our research section.",
    features: [
        {
            title: "Depth",
            description: "500+ research articles for in-depth understanding.",
        },
        {
            title: "Graphics",
            description: "Visual aids and infographics to enhance comprehension.",
        },
        {
            title: "Trends",
            description: "Explore emerging trends in future technology research.",
        },
        {
            title: "Contributors",
            description: "Contributions from tech researchers and academics.",
        },
    ],
};

const AboutSection = () => {
    return (
        <div id="Acerca" className="relative w-full font-montserrat">
            <HeaderSection
                label="Unlock the Power of"
                title="FutureTech Features"
                hasLinkButton={true}
                textButton="view blog"
            />
            <ContainerStrokeGrayDivisor>
                <FeatureSection {...blogData} />
            </ContainerStrokeGrayDivisor>
            <ContainerStrokeGrayDivisor>
                <FeatureSection {...researchData} />
            </ContainerStrokeGrayDivisor>
        </div>
    );
};

export default AboutSection;
