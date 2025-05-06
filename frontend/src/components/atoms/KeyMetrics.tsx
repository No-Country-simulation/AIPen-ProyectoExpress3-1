interface KeyMetricsProps {
  value: string;
  description: string;
  classname?: string;
}
const KeyMetrics = ({ value, description, classname }: KeyMetricsProps) => {
  return (
    <div className="flex flex-col gap-2.5 py-[50px]  leading-normal tracking-tight">
      <p className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-white">
        {value}
        <span className="text-amber-400">+</span>{" "}
      </p>
      <h5 className="text-[clamp(0.90rem,2.5vw,1.125rem)] text-light-gray-50 capitalize">
        {description}
      </h5>
    </div>
  );
};

export default KeyMetrics;
