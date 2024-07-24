import { CardGrid } from "@/components/card-grid";
import { ColorModeToggle } from "@/components/color-mode-toggle";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/nav-bar";
import { StickyScroller } from "@/components/sticky-scroller";
import { TechStack } from "@/components/tech-stack";
import { VortexBackground } from "@/components/vortex-background";

export default function Home() {
  return (
    <main>
      <div className="fixed bottom-2 left-2 z-50 no-scrollbar">
        <ColorModeToggle />
      </div>
      <NavBar />
      <VortexBackground />
      <Hero />
      <CardGrid />
      <StickyScroller />
      <TechStack />
      <div className="h-[300vh]"></div>
    </main>
  );
}
