import WelcomeSection from "@/components/studio/WelcomeSection";
import ServicesSection from "@/components/studio/ServicesSection";
import PortfolioGallery from "@/components/studio/PortfolioGallery";
import TeamSection from "@/components/studio/TeamSection";
import ContactSection from "@/components/studio/ContactSection";
import MapSection from "@/components/studio/MapSection";
import CallToAction from "@/components/studio/CallToAction";

export default function HomePage() {
  return (
    <main className="pt-20">
      <WelcomeSection />
      <ServicesSection />
      <PortfolioGallery />
      <TeamSection />
      <ContactSection />
      <MapSection />
      <CallToAction />
    </main>
  );
}
