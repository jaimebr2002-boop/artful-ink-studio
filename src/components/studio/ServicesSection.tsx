import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Tatuaje a medida",
    description: "Diseños personalizados desde cero, pensados contigo y para ti.",
  },
  {
    title: "Coberturas y arreglos",
    description: "Damos una segunda vida a tatuajes antiguos o que ya no te representan.",
  },
  {
    title: "Sesiones de retoque",
    description: "Ajustes y repasos para mantener tu tatuaje siempre vivo.",
  },
];

export default function ServicesSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding" id="servicios">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Servicios</h2>
        <p className="section-subtitle">
          Trabajamos diferentes estilos para adaptarnos a lo que estás buscando.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="studio-card p-5">
              <h3 className="font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
