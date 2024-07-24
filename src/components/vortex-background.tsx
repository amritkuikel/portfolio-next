import React from "react";
import { Vortex } from "./ui/vortex";
import { TxtGenerator } from "./txt-generator";

export function VortexBackground() {
  return (
    <div className="w-full mx-auto rounded-md  h-[55vh] overflow-hidden">
      <Vortex
        backgroundColor="slate-900"
        className="flex items-center flex-col justify-center  w-full h-full"
      >
        <h2>
          <TxtGenerator />
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          - Cory House
        </p>
      </Vortex>
    </div>
  );
}
