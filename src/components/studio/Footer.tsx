export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Wild Art Tattoo. Todos los derechos reservados.</p>
        <p>Av. de César Augusto 91, Zaragoza · +34 611 603 763</p>
      </div>
    </footer>
  );
}
