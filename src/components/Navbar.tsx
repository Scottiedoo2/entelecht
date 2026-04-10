"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MenuItem = {
  label: string;
  href: string;
  external?: boolean;
};

const menuItems: MenuItem[] = [
  { label: "About us", href: "#architecture" },
  { label: "The Technology", href: "#technology" },
  { label: "Social", href: "https://x.com/EntelechtAI", external: true },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

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
          <div ref={containerRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={open}
              className="flex items-center gap-1.5 text-[12px] sm:text-[13px] border border-dark/20 rounded-md px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-dark hover:text-cream transition-colors duration-300"
            >
              Menu
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-48 bg-cream border border-dark/15 rounded-md shadow-lg overflow-hidden"
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    role="menuitem"
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-[13px] text-dark hover:bg-dark hover:text-cream transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
