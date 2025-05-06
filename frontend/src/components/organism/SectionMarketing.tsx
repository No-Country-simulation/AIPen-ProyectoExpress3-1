"use client";

const StatItem = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl font-bold text-green-600">{value}</span>
      <span className="text-sm font-medium text-gray-600 mt-2">{label}</span>
    </div>
  );
};

const SectionMarketing = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10 text-gray-800">
        Impacto de nuestra comunidad
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <StatItem value={150} label="Empresas comprometidas" />
        <StatItem value={2345} label="Toneladas de CO₂ compensadas" />
        <StatItem value={86} label="Proyectos registrados" />
        <StatItem value={412} label="Horas de capacitación" />
      </div>
    </section>
  );
};

export default SectionMarketing;
