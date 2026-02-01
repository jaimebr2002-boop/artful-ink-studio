import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, Instagram, MapPin } from "lucide-react";

const contactInfo = [
  {
    title: "WhatsApp",
    detail: "+34 611 603 763",
    link: "https://wa.me/34611603763",
    linkText: "Abrir chat",
    icon: MessageCircle,
  },
  {
    title: "Instagram",
    detail: "@wild.art.tattoo",
    link: "https://instagram.com/wild.art.tattoo",
    linkText: "Ver perfil",
    icon: Instagram,
  },
  {
    title: "Estudio",
    detail: "Av. de César Augusto 91, Zaragoza",
    icon: MapPin,
  },
];

export default function ContactSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding" id="contacto">
      <div className="mx-auto max-w-6xl space-y-4">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">
          Escríbenos por WhatsApp, llámanos o pásate por el estudio para resolver dudas o hablar de tu idea.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {contactInfo.map((info) => (
            <div key={info.title} className="studio-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <info.icon className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">{info.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{info.detail}</p>
              {info.link && (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  {info.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
