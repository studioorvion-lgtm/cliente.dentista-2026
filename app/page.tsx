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

export default function Home() {
  return (
    <div className="relative bg-obsidian min-h-screen">
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
