"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";

const content = [
  {
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, React allows developers to create reusable UI components, manage the state of their applications efficiently, and render changes seamlessly through its virtual DOM.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <FaReact className="h-full w-full " />
      </div>
    ),
  },
  {
    title: "Node.js",
    description:
      "Node.js is a versatile JavaScript runtime built on Chrome's V8 engine, designed for building scalable and high-performance server-side applications. It uses an event-driven, non-blocking I/O model, making it efficient for handling concurrent requests.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
       <FaNodeJs className="h-full w-full " />
      </div>
    ),
  },
  {
    title: "Next.js",
    description:
      "Next.js is a powerful React framework that enables server-side rendering, static site generation, and dynamic routing. It simplifies building fast, SEO-friendly web applications with features like API routes, file-based routing, and built-in CSS support. Ideal for both small projects and large-scale applications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
       <RiNextjsFill className="h-full w-full " />
      </div>
    ),
  },
  {
    title: "Nest.js",
    description:
      "NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It leverages TypeScript and incorporates elements of OOP (Object-Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).  With a modular architecture and built-in support for microservices and GraphQL, NestJS is ideal for creating robust and maintainable enterprise-grade applications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
       <SiNestjs className="h-full w-full " />
      </div>
    ),
  },
 
];
export function StickyScroller() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
