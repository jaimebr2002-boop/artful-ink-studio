import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/studio/Header";
import Footer from "@/components/studio/Footer";
import ScrollToTop from "@/components/studio/ScrollToTop";
import FloatingWhatsApp from "@/components/studio/FloatingWhatsApp";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import PortfolioPage from "@/pages/PortfolioPage";
import TeamPage from "@/pages/TeamPage";
import BookingPage from "@/pages/BookingPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/equipo" element={<TeamPage />} />
              <Route path="/reservar" element={<BookingPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
