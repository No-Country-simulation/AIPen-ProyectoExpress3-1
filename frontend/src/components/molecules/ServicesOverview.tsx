import ServiceCard from "../atoms/ServiceCard"


const ServicesOverview = () => {
  return (
    <div className="max-w-[1596px] h-[481px] md:h-[188px] xl:h-[246px] flex flex-col md:flex-row justify-center items-center gap-2.5 border border-[var(--color-stroke-gray)] p-5 rounded-xl ">
      <ServiceCard title="Resource Access" description="Visitors can access a wide range of resources, including ebooks, whitepapers, reports."/>
      <ServiceCard title="Community Forum" description="Join our active community forum to discuss industry trends and collaborate with peers."/>
      <ServiceCard title="Tech Eventsh" description="Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge."/>
    </div>
  )
}

export default ServicesOverview
