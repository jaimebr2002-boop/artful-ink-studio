import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34611603763"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-primary-foreground shadow-glow hover:bg-emerald-400 transition-colors duration-200"
    >
      <span className="sr-only">Contactar por WhatsApp</span>
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
