import Image from "next/image"

const iconSocial = [
  {
    src: '/svg/icon-twitter.svg',
    alt: 'Icon Twitter',
  },
  {
    src: '/svg/icon-circle-footer.svg',
    alt: 'Icon Medium',
  },
  {
    src: '/svg/icon-linkedin.svg',
    alt: 'Icon Linkedin',
  },
]

const SocialLinks = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center py-10">
      <p>Terms & Conditions | Privacy Policy</p>
      <div className="flex flex-row gap-3.5">
        {
          iconSocial.map((item, i) => (
            <Image src={item.src} alt={item.alt} key={i} width={24} height={24} />
          ))
        }
      </div>
      <p>
        © 2024 FutureTech. All rights reserved.
      </p>
    </div>
  )
}

export default SocialLinks
