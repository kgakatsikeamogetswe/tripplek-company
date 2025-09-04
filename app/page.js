import { Navigation } from "../components/layout/navigation"
import { Footer } from "../components/layout/footer"
import { HeroSection } from "../components/sections/hero-section";
import { ServicesSection } from "../components/sections/service-section";
import { TestimonialsSection } from "../components/sections/testimonials-section";
import { CTASection } from "../components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
