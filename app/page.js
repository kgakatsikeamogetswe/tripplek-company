import { Navigation } from "../components/layout/navigation.jsx"
import { Footer } from "../components/layout/footer.jsx"
import { HeroSection } from "../components/sections/hero-section.jsx";
import { ServicesSection } from "../components/sections/service-section.jsx";
import { TestimonialsSection } from "../components/sections/testimonials-section.jsx";
import { CTASection } from "../components/sections/cta-section.jsx";

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
