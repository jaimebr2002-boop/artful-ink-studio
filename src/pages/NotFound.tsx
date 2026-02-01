import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="pt-20 min-h-[80vh] flex items-center justify-center">
      <div className="text-center section-padding">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Página no encontrada
        </p>
        <Link to="/" className="btn-studio-primary">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default NotFound;