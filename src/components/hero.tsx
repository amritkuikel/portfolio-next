"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { TxtGenerator } from "./txt-generator";

export function Hero() {
  return (
    <div className="h-[50vh] relative w-full overflow-hidden bg-slate-400 dark:bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h2>
        <TxtGenerator />
      </h2>
    </div>
  );
}
