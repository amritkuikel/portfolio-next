"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Code is like humor. When you have to explain it, it’s bad. Simplicity is the soul of efficiency.`;

export function TxtGenerator() {
  return <TextGenerateEffect words={words} />;
}
