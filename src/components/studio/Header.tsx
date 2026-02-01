import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/equipo", label: "Equipo" },
  { to: "/reservar", label: "Reservar" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-border bg-secondary flex items-center justify-center text-xs font-semibold tracking-widest uppercase text-foreground">
            WAT
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-foreground">
              Wild Art Tattoo
            </span>
            <span className="text-xs text-muted-foreground">
              César Augusto 91 · Zaragoza
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-muted-foreground hover:text-foreground transition-colors",
                  isActive && "text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/reservar"
          className="hidden md:inline-flex btn-studio-primary"
        >
          Reservar cita
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground hover:bg-secondary transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-2 text-muted-foreground hover:text-foreground",
                    isActive && "text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/reservar"
              onClick={() => setOpen(false)}
              className="mt-2 btn-studio-primary text-center"
            >
              Reservar cita
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
