import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CallToAction() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className="mx-auto max-w-6xl studio-card px-6 py-10 sm:px-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            ¿Listo para tu próximo tatuaje?
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl">
            Reserva una cita con nuestro equipo y cuéntanos tu idea. Te asesoramos sobre diseño,
            tamaño, ubicación y cuidados para que todo salga perfecto.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/reservar" className="btn-studio-primary">
            Reservar cita online
          </Link>
          <a
            href="https://wa.me/34611603763"
            target="_blank"
            rel="noreferrer"
            className="btn-studio-outline"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
