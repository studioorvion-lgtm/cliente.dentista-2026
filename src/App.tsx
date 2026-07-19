import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Technology from "@/components/Technology";
import Difference from "@/components/Difference";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Cursor from "@/components/ui/Cursor";

function App() {
  return (
    <div className="relative bg-obsidian min-h-screen">
      {/* Custom cursor — hidden on touch devices via CSS */}
      <Cursor />

      {/* Cinematic grain overlay — editorial texture at 4% opacity */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Technology />
        <Difference />
        <HowItWorks />
        <Results />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
