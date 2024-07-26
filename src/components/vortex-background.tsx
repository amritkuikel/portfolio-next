import React from "react";
import { Vortex } from "./ui/vortex";
import { Button } from "./ui/moving-border";
import { Typewriter } from "./type-writer";

export function VortexBackground() {
  return (
    <div className="w-full mx-auto rounded-md  overflow-hidden">
      <Vortex
        rangeY={200}
        className="flex items-center flex-col justify-center  w-full h-screen bg-slate-400/80 dark:bg-transparent"
      >
       <div className="text-4xl p-4 z-20 flex items-center gap-4">
        <div>HELLO, I&apos;M</div>

        <Button
          containerClassName="relative z-20 w-auto"
          className="text-4xl p-4 text-blue-300 dark:text-blue-500 "
        >
          AMRIT
        </Button>
      </div>
      <div className="z-20 mt-4 ">
        <Typewriter />
      </div>
      </Vortex>
    </div>
  );
}
