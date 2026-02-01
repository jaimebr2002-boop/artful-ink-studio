import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Diseño personalizado",
    description: "Partimos de tu idea, referencias o conceptos y creamos una pieza original para ti.",
  },
  {
    title: "Coberturas",
    description: "Diseñamos coberturas para tapar tatuajes antiguos con composiciones potentes.",
  },
  {
    title: "Retoques",
    description: "Mejoramos contraste y definición de tatuajes para que se vean como nuevos.",
  },
  {
    title: "Asesoría previa",
    description: "Te orientamos en tamaño, zona, estilo y cuidados antes de tatuar.",
  },
  {
    title: "Citas por proyectos",
    description: "Mangas, espaldas completas u otros proyectos grandes organizados en sesiones.",
  },
  {
    title: "Flash y diseños propios",
    description: "Piezas originales de los artistas para quienes buscáis inspiración rápida.",
  },
];

export default function ServicesPage() {
  const ref = useScrollAnimation();

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div ref={ref} className="mx-auto max-w-6xl">
          <h1 className="section-title">Servicios</h1>
          <p className="section-subtitle">
            Te ayudamos a transformar tu idea en un tatuaje único que encaje contigo.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="studio-card p-6">
                <h2 className="font-semibold mb-2 text-foreground">{service.title}</h2>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
