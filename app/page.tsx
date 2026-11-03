import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustIntro from "@/components/TrustIntro";
import MissionSection from "@/components/MissionSection";
import Gallery from "@/components/Gallery";
import GausevaSection from "@/components/GausevaSection";
import CowCareSection from "@/components/CowCareSection";
import TeamSection from "@/components/TeamSection";
import GaushalaInfo from "@/components/GaushalaInfo";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfaf6]">
      <Navigation />
      <HeroSection />
      <TrustIntro />
      <MissionSection />
      <Gallery />
      <GausevaSection />
      <CowCareSection />
      <TeamSection />
      <GaushalaInfo />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
