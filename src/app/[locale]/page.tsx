import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SecuritySpotlight } from "@/components/SecuritySpotlight";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 pb-20 sm:px-6 lg:px-8"
    >
      <Hero />
      <Skills />
      <Projects />
      <SecuritySpotlight />
      <Contact />
    </main>
  );
}
