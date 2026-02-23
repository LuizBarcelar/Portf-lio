import About from "@/components/About";
import ContactSection from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <ContactSection />
    </main>
  );
}
