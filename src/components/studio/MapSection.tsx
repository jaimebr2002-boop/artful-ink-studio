import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function MapSection() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding pt-0" id="mapa">
      <div ref={ref} className="mx-auto max-w-6xl space-y-4">
        <h2 className="section-title">Dónde estamos</h2>
        <p className="section-subtitle">
          Nos encontrarás en pleno centro de Zaragoza, en Av. de César Augusto 91.
          Fácil acceso en transporte público y parkings cercanos.
        </p>
        <div className="mt-4 overflow-hidden rounded-3xl border border-border bg-card">
          <iframe
            title="Ubicación Wild Art Tattoo"
            src="https://www.google.com/maps?q=Wild+Art+Tattoo+Zaragoza&output=embed"
            loading="lazy"
            className="h-80 w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
