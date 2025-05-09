import ServiceCard from "../atoms/ServiceCard";

const services = [
  {
    title: "Resource Access",
    description:
      "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
  },
  {
    title: "Community Forum",
    description:
      "Join our active community forum to discuss industry trends and collaborate with peers.",
  },
  {
    title: "Tech Events",
    description:
      "Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.",
  },
];

const ServicesOverview = () => {
  return (
    <div className="max-w-[1596px] bg-background grid grid-cols-1 xl1440:grid-cols-3 md:flex-row justify-center items-center gap-2.5 border border-[var(--color-stroke-gray)] p-5 rounded-xl ">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServicesOverview;
