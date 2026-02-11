import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SecuritySpotlight } from "@/components/SecuritySpotlight";

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
            <Hero />
            <Skills />
            <Projects />
            <SecuritySpotlight />
        </main>
    );
}
