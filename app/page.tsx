import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PaintingInterlude from "@/components/PaintingInterlude";
import FocusAreas from "@/components/FocusAreas";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContinuousWorldBackground from "@/components/ContinuousWorldBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#160f0a]">
      <ContinuousWorldBackground />
      <Navbar />
      <Hero />
      <About />
      <PaintingInterlude />
      <FocusAreas />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
