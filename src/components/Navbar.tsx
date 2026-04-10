"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="nav-enter fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-[16px] sm:text-[18px] font-sans font-medium tracking-tight">
          <Image src="/logo.png" alt="Entelecht.ai logo" width={28} height={28} className="rounded-full" />
          entelecht<span className="text-teal">.ai</span>
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="hidden sm:flex items-center gap-2 text-[13px] text-muted">
            <span className="w-[7px] h-[7px] rounded-full bg-teal inline-block" />
            Phase 1 in development
          </span>
          <a
            href="#contact"
            className="text-[12px] sm:text-[13px] border border-dark/20 rounded-md px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-dark hover:text-cream transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
