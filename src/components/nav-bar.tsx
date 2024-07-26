"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Interests">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Frontend Development</HoveredLink>
            <HoveredLink href="/">Interface Design</HoveredLink>
            <HoveredLink href="/">Backend Development</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Messenging App"
              href="https://messenger-frontend-orpin.vercel.app"
              src="https://utfs.io/f/611ad80b-5dcf-4b8a-b777-32d05e28c86c-qdl1x6.vercel.app.jpeg"
              description="Instant, secure, and seamless communication at your fingertips."
            />
            <ProductItem
              title="Movie Series Stream"
              href="https://ak-flix.vercel.app/"
              src="https://utfs.io/f/94948216-214d-47cc-b95a-fbef8a3f519c-rggdnv.vercel.app.jpeg"
              description="Stream your favorite movies and series anytime, anywhere."
            />
            <ProductItem
              title="Stackoverflow Clone"
              href="https://amrit-stackoverflow-clone-project.vercel.app/"
              src="https://utfs.io/f/9c0345fa-5995-47e8-bd9a-20a3627e9f2a-tibz4t.vercel.app.jpeg"
              description="Your go-to community for coding questions and expert answers."
            />
            <ProductItem
              title="Blogging App"
              href="https://openblog-kappa.vercel.app/"
              src="https://utfs.io/f/4e5a0cde-8977-4689-ac2b-4efe0462809d-l11937.vercel.app.jpeg"
              description="Create and publish your own blog with ease."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Links">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://github.com/amritkuikel">Github</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/amrit-kuikel-9a708b320/">LinkedIn</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Resume"
        ><HoveredLink href="/api/resume" download>Download</HoveredLink></MenuItem>
      </Menu>
    </div>
  );
}
