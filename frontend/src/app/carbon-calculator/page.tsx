"use client";
import { useState, useEffect } from "react";

const steps = [
  "Datos de la compañía",
  "Consumo de energía",
  "Vehículos",
  "Viajes de negocios",
  "Consumo y residuos",
  "Resumen y envío",
];

const CarbonCalculator = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [resultado, setResultado] = useState<null | {
    recomendaciones: string[];
    mensaje_final: string;
  }>(null);

  useEffect(() => {
    const el = document.querySelector(".inicio-scroll");
    if (el) {
      const offset = -20;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const [formData, setFormData] = useState({
    numero_empleados: "",
    electricidad_kwh: "",
    porcentaje_de_energia_verde: "",
    gas_natural_m3: "",
    cantidad_de_vehiculos_flota: "",
    promedio_km_vehiculo: "",
    porcentaje_vehiculos_electricos: "",
    viajes_avion_cantidad: "",
    porcentaje_de_vuelos_internacionales: "",
    papel_consumido_kg: "",
    agua_m3: "",
    residuos_producidos_kg: "",
  });

  const handleChange = (field: string, value: string) => {
    if (/^\d*$/.test(value)) {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleNext = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  };

  const handlePrev = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  const areAllFieldsValid = Object.values(formData).every(
    (val) => val !== "" && Number(val) > 0
  );

  const handleSubmit = async () => {
    if (!areAllFieldsValid) {
      alert("Por favor, completa todos los campos con valores mayores a cero.");
      return;
    }

    setIsLoading(true);
    setResultado(null);

    const actividadesNumericas = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, Number(value)])
    );

    const body = {
      emisionData: {
        actividades: actividadesNumericas,
        mes: new Date().getMonth() + 1,
        anio: new Date().getFullYear(),
      },
      save: true,
    };

    console.log("Datos enviados al backend:", body);

    try {
      const postRes = await fetch(
        "https://co2llector-express-project-production.up.railway.app/api/emissions/calculate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const postResult = await postRes.json();

      if (!postResult?.userId) {
        throw new Error("No se recibió userId después del POST.");
      }

      const getRes = await fetch(
        `https://co2llector-express-project-production.up.railway.app/api/recommendations/${postResult.userId}`
      );

      const getResult = await getRes.json();

      if (!getResult?.recomendacion) {
        throw new Error(
          "No se encontró la propiedad 'recomendacion' en la respuesta GET."
        );
      }

      setResultado({
        recomendaciones: getResult.recomendacion.recomendaciones || [],
        mensaje_final:
          getResult.recomendacion.mensaje_final ||
          "¡Gracias por calcular tu huella!",
      });
    } catch (error: any) {
      console.error("Error al enviar:", error);
      alert("Error al enviar los datos: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderInputs = () => {
    const fieldsByStep: Record<number, [string, string][]> = {
      0: [["numero_empleados", "Número de empleados"]],
      1: [
        ["electricidad_kwh", "Electricidad consumida (kWh/mes)"],
        ["porcentaje_de_energia_verde", "% de energía verde"],
        ["gas_natural_m3", "Gas natural (m³/mes)"],
      ],
      2: [
        ["cantidad_de_vehiculos_flota", "Cantidad de vehículos"],
        ["promedio_km_vehiculo", "Kilómetros por vehículo"],
        ["porcentaje_vehiculos_electricos", "% vehículos eléctricos"],
      ],
      3: [
        ["viajes_avion_cantidad", "Viajes de avión (mensual)"],
        ["porcentaje_de_vuelos_internacionales", "% vuelos internacionales"],
      ],
      4: [
        ["papel_consumido_kg", "Papel consumido (kg/mes)"],
        ["agua_m3", "Agua consumida (m³/mes)"],
        ["residuos_producidos_kg", "Residuos generados (kg/mes)"],
      ],
      5: Object.entries(formData).map(([key]) => [key, key.replace(/_/g, " ")]),
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-xl">
        {fieldsByStep[stepIndex]?.map(([field, label]) => (
          <div key={field} className="flex flex-col gap-2">
            <label
              htmlFor={field}
              className="text-sm font-medium text-gray-700"
            >
              {label}
            </label>
            <input
              id={field}
              inputMode="numeric"
              pattern="\\d*"
              value={formData[field as keyof typeof formData]}
              onChange={(e) => handleChange(field, e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-black-600 text-black"
            />
          </div>
        ))}
      </div>
    );
  };

  const renderResultado = () => {
    if (!resultado) return null;

    return (
      <div className="bg-white p-6 rounded-2xl shadow-xl space-y-6">
        <h2 className="text-2xl text-green-700 font-bold text-center">
          Recomendaciones
        </h2>
        <p className="text-center text-gray-700 font-medium">
          {resultado.mensaje_final}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {resultado.recomendaciones.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="inicio-scroll min-h-screen bg-gray-100 flex flex-col pt-28 pb-20 px-4 md:px-16">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-transparent text-gradient-green mb-14">
          Calculadora de Huella de Carbono
        </h1>

        <div className="flex justify-between mb-10">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  index === stepIndex
                    ? "bg-black text-white border-black"
                    : index < stepIndex
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-300 text-gray-700 border-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <p className="text-xs mt-2 font-medium text-gray-600 max-w-[6rem] mx-auto">
                {step}
              </p>
            </div>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center text-lg font-medium text-transparent text-gradient-green animate-pulse">
            Enviando... Por favor espera.
          </div>
        ) : resultado ? (
          renderResultado()
        ) : (
          renderInputs()
        )}

        {!isLoading && !resultado && (
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              disabled={stepIndex === 0}
              className="px-5 py-2 rounded-xl bg-gray-300 text-gray-700 hover:bg-gray-400"
            >
              Anterior
            </button>
            {stepIndex === steps.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-7 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
              >
                Enviar
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-7 py-2 rounded-xl bg-dark-gray text-white hover:bg-dark-gray"
              >
                Siguiente
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator;
