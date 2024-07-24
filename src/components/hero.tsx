"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { Typewriter } from "./type-writer";
import { Button } from "./ui/moving-border";

export function Hero() {
  return (
    <div className="h-[45vh] relative w-full overflow-hidden bg-slate-400 dark:bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="text-4xl p-4 z-20 flex items-center gap-4">
        <div>HI, I&apos;M</div>

        <Button
          containerClassName="relative z-20 w-auto"
          className="text-4xl p-4 text-blue-300 dark:text-blue-500"
        >
          AMRIT
        </Button>
      </div>

      <div className="z-20 mt-4 ">
        <Typewriter />
      </div>
    </div>
  );
}
