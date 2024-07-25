"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export function CardGrid() {
  return (
    <div className="max-w-5xl mx-auto px-8 ">
      {" "}
      <HoverEffect items={projects} className="dark:bg-black bg-white" />
    </div>
  );
}
export const projects = [
  {
    title: "Messenging App",
    description:
      "Instant, secure, and seamless communication at your fingertips. Chat with your close one without any hassle. ",
    link: "https://messenger-frontend-orpin.vercel.app",
  },

  {
    title: "Stackoverflow Clone",
    description:
      "Your go-to community for coding questions and expert answers. Find answers to your coding questions and expert answers. Your go-to community for coding questions and expert answers.",
    link: "https://amrit-stackoverflow-clone-project.vercel.app/",
  },
  {
    title: "Movie Series Stream",
    description:
      "Stream your favorite movies and series anytime, anywhere. Watch your favorite movies and series anytime, anywhere.",
    link: "https://ak-flix.vercel.app/",
  },
  {
    title: "Blogging App",
    description:
      "Create and publish your own blog with ease. Publish your own blog with ease. Create and publish your own blog with ease.",
    link: "https://openblog-kappa.vercel.app/",
  },
];
