import Image, { StaticImageData } from "next/image";

interface AvatarItem {
  avatar: StaticImageData | string;
  className?: string;
}

export const AvatarGroup = [
  { avatar: "/png/avatar1.png" },
  { avatar: "/png/avatar2.png" },
  { avatar: "/png/avatar3.png" },
  { avatar: "/png/avatar4.png" },
];

const AvatarImage = ({ avatar, className }: AvatarItem) => {
  return (
    <div className={`relative -translate-x-6 size-[50px] rounded-full border-[2px] border-[var(--color-light-gray-40)] bg-[var(--color-stroke-gray)] ${className}`}>
      <Image src={avatar} alt="avatar" className="object-cover rounded-full" fill />
    </div>
  );
};

const AvatarContainer = () => {
  return (
    <div className="relative flex">
      <AvatarImage avatar={AvatarGroup[0].avatar} />
      <AvatarImage avatar={AvatarGroup[1].avatar} className="-left-4 -translate-x-6 z-30"/>
      <AvatarImage avatar={AvatarGroup[2].avatar} className="-left-8 -translate-x-6 z-40"/>
      <AvatarImage avatar={AvatarGroup[3].avatar} className="-left-12 -translate-x-6 z-50"/>
    </div>
  );
};

export default AvatarContainer;
