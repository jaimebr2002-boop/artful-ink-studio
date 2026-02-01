import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "Alex",
    specialty: "Realismo y sombra",
    description: "Retratos, animales y piezas con mucho detalle.",
  },
  {
    name: "Sara",
    specialty: "Neotradicional y color",
    description: "Ilustración, color y composiciones creativas.",
  },
  {
    name: "Javi",
    specialty: "Blackwork y líneas finas",
    description: "Diseños gráficos, minimalistas y de alto contraste.",
  },
];

export default function TeamPage() {
  const ref = useScrollAnimation();

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div ref={ref} className="mx-auto max-w-6xl">
          <h1 className="section-title">Equipo</h1>
          <p className="section-subtitle">
            Conoce a las personas que hay detrás de las máquinas, la tinta y los diseños.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="studio-card p-6">
                <h2 className="font-semibold mb-1 text-foreground">{member.name}</h2>
                <p className="text-xs text-muted-foreground mb-3">{member.specialty}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
