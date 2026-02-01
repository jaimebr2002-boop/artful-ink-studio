import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "Alex",
    specialty: "Realismo y sombra",
    description: "Especializado en retratos y piezas de alto detalle.",
  },
  {
    name: "Sara",
    specialty: "Neotradicional y color",
    description: "Ilustración potente, color vibrante y composiciones dinámicas.",
  },
  {
    name: "Javi",
    specialty: "Blackwork y líneas finas",
    description: "Piezas gráficas, minimalistas y alto contraste.",
  },
];

export default function TeamSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding" id="equipo">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Nuestro equipo</h2>
        <p className="section-subtitle">
          Un equipo de artistas con estilos complementarios para que encuentres el tatuador perfecto para tu idea.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="studio-card p-5">
              <h3 className="font-semibold mb-1 text-foreground">{member.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{member.specialty}</p>
              <p className="text-sm text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
