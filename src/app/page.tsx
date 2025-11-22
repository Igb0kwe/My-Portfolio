import { About } from "@/components/home/about";
import { Projects } from "@/components/home/projects";
import { TerminalHero } from "@/components/home/terminal-hero";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <TerminalHero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
