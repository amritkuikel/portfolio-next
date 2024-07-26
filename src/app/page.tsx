import { CardGrid } from "@/components/card-grid";
import { ColorModeToggle } from "@/components/color-mode-toggle";
import { NavBar } from "@/components/nav-bar";
import { StickyScroller } from "@/components/sticky-scroller";
import { TechStack } from "@/components/tech-stack";
import { VortexBackground } from "@/components/vortex-background";

export default function Home() {
  return (
    <main className="dark:bg-black bg-white">
      <ColorModeToggle />
      <NavBar />
      <VortexBackground />
      <div className="text-center py-4 font-bold text-2xl">MY PROJECTS</div>
      <CardGrid />
      <div className="text-center py-4 font-bold text-2xl">SOME SKILLS</div>
      <TechStack />
      <div className="text-center py-4 font-bold text-2xl">
        PROFESSIONAL SKILLS
      </div>
      <StickyScroller />
    </main>
  );
}
