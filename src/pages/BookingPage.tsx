import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const OPEN_DAYS = [1, 2, 3, 4, 5];
const OPEN_HOURS = { start: 11, end: 20 };
const BUSY_SLOTS = ["2026-02-03T16:00", "2026-02-03T17:00"];

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    style: "",
    size: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const ref = useScrollAnimation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const isOpenDay = (dateStr: string) => {
    const d = new Date(dateStr);
    const day = d.getDay();
    return OPEN_DAYS.includes(day);
  };

  const isValidTime = (timeStr: string) => {
    if (!timeStr) return false;
    const [h] = timeStr.split(":").map(Number);
    return h >= OPEN_HOURS.start && h < OPEN_HOURS.end;
  };

  const isBusy = (dateStr: string, timeStr: string) => {
    if (!dateStr || !timeStr) return false;
    const key = `${dateStr}T${timeStr}`;
    return BUSY_SLOTS.includes(key);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isOpenDay(form.date)) {
      toast.error("El estudio solo abre de lunes a viernes. Elige otro día.");
      return;
    }
    if (!isValidTime(form.time)) {
      toast.error("Selecciona una hora dentro del horario de 11:00 a 20:00.");
      return;
    }
    if (isBusy(form.date, form.time)) {
      toast.error("Esa hora ya está ocupada. Prueba otro horario.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Reserva enviada. Te contactaremos para confirmar día y hora.");
      setForm({
        name: "",
        email: "",
        phone: "",
        style: "",
        size: "",
        date: "",
        time: "",
        notes: "",
      });
    }, 1200);
  };

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div ref={ref} className="mx-auto max-w-3xl">
          <h1 className="section-title">Reservar una cita</h1>
          <p className="section-subtitle">
            Completa el formulario para solicitar una cita. Te responderemos lo antes posible para concretar tu sesión.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6 studio-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm mb-1 text-foreground">Nombre</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-foreground">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="tucorreo@ejemplo.com"
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-foreground">Teléfono</label>
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+34 ..."
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-foreground">Estilo aproximado</label>
                <select
                  name="style"
                  value={form.style}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="realismo">Realismo</option>
                  <option value="neotradicional">Neotradicional</option>
                  <option value="blackwork">Blackwork</option>
                  <option value="color">Color</option>
                  <option value="linea-fina">Línea fina / minimal</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-sm mb-1 text-foreground">Tamaño aproximado</label>
                <select
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selecciona</option>
                  <option value="pequeno">Pequeño</option>
                  <option value="mediano">Mediano</option>
                  <option value="grande">Grande / proyecto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1 text-foreground">Fecha preferida</label>
                <Input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Abrimos de lunes a viernes.
                </p>
              </div>
              <div>
                <label className="block text-sm mb-1 text-foreground">Hora preferida</label>
                <Input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Horario de 11:00 a 20:00.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1 text-foreground">Cuéntanos tu idea</label>
              <Textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Zona del cuerpo, referencias, tamaño aproximado..."
                className="bg-secondary border-border"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-studio-primary w-full sm:w-auto disabled:opacity-50"
            >
              {submitting ? "Enviando..." : "Solicitar cita"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
