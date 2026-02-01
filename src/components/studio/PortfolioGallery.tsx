import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const categories = ["Todos", "Realismo", "Neotradicional", "Blackwork", "Color"];

const images = [
  { src: "https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg", cat: "Realismo" },
  { src: "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg", cat: "Realismo" },
  { src: "https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg", cat: "Neotradicional" },
  { src: "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg", cat: "Blackwork" },
  { src: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg", cat: "Color" },
  { src: "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg", cat: "Color" },
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("Todos");
  const ref = useScrollAnimation();

  const filtered =
    filter === "Todos" ? images : images.filter((img) => img.cat === filter);

  return (
    <section className="section-padding" id="portfolio">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6">
          <div>
            <h2 className="section-title">Trabajos recientes</h2>
            <p className="section-subtitle">
              Una selección de tatuajes realizados en el estudio, inspirados en estilos que
              trabajamos a diario.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs sm:text-sm transition-colors",
                  filter === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:bg-secondary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {filtered.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-border bg-card group"
            >
              <div className="aspect-[3/4] w-full bg-secondary">
                <img
                  src={img.src}
                  alt={img.cat}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-2 left-2 rounded-full bg-background/70 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm">
                {img.cat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
