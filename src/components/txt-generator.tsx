"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Welcome to my portfolio! I am a dedicated and versatile full stack web developer with a passion for creating dynamic, responsive, and user-friendly web applications.`;

export function TxtGenerator() {
  return <TextGenerateEffect words={words} />;
}
