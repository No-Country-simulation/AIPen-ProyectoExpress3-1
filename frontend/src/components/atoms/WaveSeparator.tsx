const WaveSeparator = ({
  color = "#ffffff",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) => (
  <svg
    viewBox="0 0 1440 150"
    className={`w-full h-[100px] ${flip ? "rotate-180" : ""} ${className}`}
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M0,30 C360,80 1080,0 1440,60 L1440,150 L0,150 Z"
    />
  </svg>
);
export default WaveSeparator;