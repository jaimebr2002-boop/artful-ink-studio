import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WelcomeSection() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding" id="inicio">
      <div
        ref={ref}
        className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.3fr,1fr] items-center"
      >
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Bienvenidos a Wild Art Tattoo
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Arte en la piel hecho a medida, con detalle, pasión y profesionalidad.
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Creamos piezas únicas que cuentan tu historia, cuidamos cada línea y cada sombra
            y te acompañamos en todo el proceso para que tu tatuaje sea tan especial como tú.
          </p>
          <p className="text-muted-foreground max-w-xl">
            Arte personalizado, pasión y dedicación y profesionalismo se unen en nuestro estudio en
            el centro de Zaragoza para ofrecerte una experiencia cercana, segura y memorable.
          </p>
        </div>

        <figure className="relative">
          <div className="relative h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border border-border bg-card glow-shadow">
            <img
              src="https://images.pexels.com/photos/4123890/pexels-photo-4123890.jpeg"
              alt="Tatuador trabajando en el estudio Wild Art Tattoo"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </figure>
      </div>
    </section>
  );
}
