"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const COLORS = [
  { name: "Cream", variable: "--color-cream", hex: "#F5F0EB", textDark: true },
  { name: "Cream Dark", variable: "--color-cream-dark", hex: "#EDE8E2", textDark: true },
  { name: "Accent Gold", variable: "--color-accent", hex: "#B8975C", textDark: true },
  { name: "Teal", variable: "--color-teal", hex: "#5B8A72", textDark: false },
  { name: "Dark", variable: "--color-dark", hex: "#1A1A1A", textDark: false },
  { name: "Muted", variable: "--color-muted", hex: "#6B7280", textDark: false },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="text-[10px] tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function BrandKit() {
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScrollDown() {
    scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero / Entry */}
      <section className="h-screen flex flex-col items-center justify-center relative px-4">
        <div className="text-center">
          <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-muted mb-6">
            Brand Guidelines
          </p>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-serif font-normal leading-[1.05] mb-4">
            Entelecht<span className="text-teal">.ai</span>
          </h1>
          <p className="text-[14px] sm:text-[16px] text-muted max-w-[400px] mx-auto leading-[1.7]">
            Visual identity system for governance infrastructure
          </p>
        </div>

        {/* Floating scroll indicator */}
        <button
          onClick={handleScrollDown}
          className={`absolute bottom-12 flex flex-col items-center gap-3 transition-all duration-700 cursor-pointer ${
            scrolled
              ? "opacity-0 translate-y-4 pointer-events-none"
              : "opacity-100 translate-y-0"
          }`}
        >
          <span className="text-[11px] tracking-[0.15em] uppercase text-muted/70">
            Scroll to explore
          </span>
          <span className="w-[1px] h-8 bg-accent/40 block animate-pulse" />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-accent animate-bounce"
          >
            <path
              d="M8 3v10m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>

      <div ref={scrollTargetRef} />

      {/* Logo Section */}
      <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6">
        <div className="max-w-[960px] mx-auto">
          <SectionLabel>01 — Logo</SectionLabel>
          <h2 className="text-[28px] sm:text-[40px] font-serif font-normal mb-6">
            Primary Mark
          </h2>
          <p className="text-[14px] sm:text-[15px] text-muted leading-[1.7] max-w-[520px] mb-12 sm:mb-16">
            The Entelecht emblem combines a crystalline lattice structure rising
            from an open book — representing the emergence of structured
            intelligence from foundational knowledge.
          </p>

          {/* Logo display cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Light background */}
            <div className="bg-cream-dark rounded-xl p-10 sm:p-14 flex flex-col items-center justify-center min-h-[280px] border border-dark/5">
              <Image
                src="/logo.png"
                alt="Entelecht.ai logo on light background"
                width={160}
                height={160}
                className="rounded-full"
              />
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted mt-6">
                Light Background
              </p>
            </div>
            {/* Dark background */}
            <div className="bg-dark rounded-xl p-10 sm:p-14 flex flex-col items-center justify-center min-h-[280px]">
              <Image
                src="/logo.png"
                alt="Entelecht.ai logo on dark background"
                width={160}
                height={160}
                className="rounded-full"
              />
              <p className="text-[11px] tracking-[0.15em] uppercase text-cream/50 mt-6">
                Dark Background
              </p>
            </div>
          </div>

          {/* Logo usage */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-dark/10 rounded-xl p-6 sm:p-8">
              <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="#5B8A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[13px] font-medium mb-1">Minimum Size</p>
              <p className="text-[12px] text-muted leading-[1.6]">
                24px minimum for digital, 10mm for print
              </p>
            </div>
            <div className="border border-dark/10 rounded-xl p-6 sm:p-8">
              <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="#5B8A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[13px] font-medium mb-1">Clear Space</p>
              <p className="text-[12px] text-muted leading-[1.6]">
                Maintain padding equal to the &quot;E&quot; height on all sides
              </p>
            </div>
            <div className="border border-dark/10 rounded-xl p-6 sm:p-8">
              <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="#5B8A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[13px] font-medium mb-1">File Formats</p>
              <p className="text-[12px] text-muted leading-[1.6]">
                PNG for digital, SVG for scalable applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="h-[1px] bg-dark/8" />
      </div>

      {/* Color Palette Section */}
      <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6">
        <div className="max-w-[960px] mx-auto">
          <SectionLabel>02 — Color</SectionLabel>
          <h2 className="text-[28px] sm:text-[40px] font-serif font-normal mb-6">
            Color Palette
          </h2>
          <p className="text-[14px] sm:text-[15px] text-muted leading-[1.7] max-w-[520px] mb-12 sm:mb-16">
            A warm, grounded palette anchored by cream and dark tones. Gold
            accent conveys authority; teal signals vitality and trust.
          </p>

          {/* Primary colors - large cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <ColorCard color={COLORS[4]} large />
            <ColorCard color={COLORS[0]} large />
          </div>

          {/* Secondary colors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[COLORS[2], COLORS[3], COLORS[1], COLORS[5]].map((c) => (
              <ColorCard key={c.hex} color={c} />
            ))}
          </div>

          {/* Usage guidance */}
          <div className="mt-12 sm:mt-16 bg-cream-dark rounded-xl p-6 sm:p-10 border border-dark/5">
            <p className="text-[13px] font-medium mb-4">Color Usage</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-dark mt-0.5 shrink-0" />
                <p className="text-[12px] sm:text-[13px] text-muted leading-[1.6]">
                  <span className="text-dark font-medium">Dark (#1A1A1A)</span>{" "}
                  — Primary text, headings, navigation, buttons
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-cream border border-dark/10 mt-0.5 shrink-0" />
                <p className="text-[12px] sm:text-[13px] text-muted leading-[1.6]">
                  <span className="text-dark font-medium">Cream (#F5F0EB)</span>{" "}
                  — Page backgrounds, content areas
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-accent mt-0.5 shrink-0" />
                <p className="text-[12px] sm:text-[13px] text-muted leading-[1.6]">
                  <span className="text-dark font-medium">Gold (#B8975C)</span>{" "}
                  — Accent highlights, CTAs, focus indicators
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-teal mt-0.5 shrink-0" />
                <p className="text-[12px] sm:text-[13px] text-muted leading-[1.6]">
                  <span className="text-dark font-medium">Teal (#5B8A72)</span>{" "}
                  — Status indicators, secondary accent, brand dot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="h-[1px] bg-dark/8" />
      </div>

      {/* Typography Section */}
      <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6">
        <div className="max-w-[960px] mx-auto">
          <SectionLabel>03 — Typography</SectionLabel>
          <h2 className="text-[28px] sm:text-[40px] font-serif font-normal mb-6">
            Type System
          </h2>
          <p className="text-[14px] sm:text-[15px] text-muted leading-[1.7] max-w-[520px] mb-12 sm:mb-16">
            Three typefaces form a deliberate hierarchy: a refined serif for
            display, a clean sans-serif for body, and a monospace for technical
            detail.
          </p>

          {/* Playfair Display */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-accent mb-1">
                  Display / Headings
                </p>
                <p className="text-[13px] text-muted">Playfair Display — 400, 500, 600</p>
              </div>
            </div>
            <div className="bg-cream-dark rounded-xl p-6 sm:p-10 border border-dark/5">
              <p className="text-[48px] sm:text-[64px] lg:text-[80px] font-serif font-normal leading-[1.05] mb-6">
                Aa
              </p>
              <p className="text-[24px] sm:text-[32px] font-serif font-normal leading-[1.2] mb-4">
                Governance Infrastructure for Autonomous AI
              </p>
              <p className="text-[16px] sm:text-[20px] font-serif italic text-muted leading-[1.4]">
                Making human intention architectable
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-6">
              <TypeSpec label="Sizes" value="40–72px display, 28–40px headings" />
              <TypeSpec label="Weight" value="Regular (400), Medium (500), SemiBold (600)" />
              <TypeSpec label="Line Height" value="1.05–1.2" />
            </div>
          </div>

          {/* Inter */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-accent mb-1">
                  Body / UI
                </p>
                <p className="text-[13px] text-muted">Inter — 400</p>
              </div>
            </div>
            <div className="bg-cream-dark rounded-xl p-6 sm:p-10 border border-dark/5">
              <p className="text-[48px] sm:text-[64px] lg:text-[80px] font-sans font-normal leading-[1.05] mb-6">
                Aa
              </p>
              <p className="text-[15px] sm:text-[16px] font-sans leading-[1.7] text-dark/80 max-w-[560px]">
                The deterministic binding layer between what humans declare and
                what AI systems do. Every autonomous action traces back to a
                human-authored governance rule — no ambiguity, no drift, no
                silent overrides.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-6">
              <TypeSpec label="Sizes" value="13–16px body, 10–11px labels" />
              <TypeSpec label="Weight" value="Regular (400), Medium (500)" />
              <TypeSpec label="Line Height" value="1.6–1.7" />
            </div>
          </div>

          {/* JetBrains Mono */}
          <div>
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-accent mb-1">
                  Code / Technical
                </p>
                <p className="text-[13px] text-muted">JetBrains Mono — 400</p>
              </div>
            </div>
            <div className="bg-dark rounded-xl p-6 sm:p-10">
              <p className="text-[48px] sm:text-[64px] lg:text-[80px] font-mono font-normal leading-[1.05] mb-6 text-cream">
                Aa
              </p>
              <pre className="text-[13px] sm:text-[14px] font-mono text-cream/70 leading-[1.8] overflow-x-auto">
{`spiral.bind({
  agent: "entelecht-core",
  governance: "strict",
  audit: true
})`}
              </pre>
            </div>
            <div className="mt-4 flex flex-wrap gap-6">
              <TypeSpec label="Sizes" value="13–14px" />
              <TypeSpec label="Weight" value="Regular (400)" />
              <TypeSpec label="Usage" value="Code blocks, technical labels, protocol references" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="h-[1px] bg-dark/8" />
      </div>

      {/* Spacing & Elements */}
      <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6">
        <div className="max-w-[960px] mx-auto">
          <SectionLabel>04 — Elements</SectionLabel>
          <h2 className="text-[28px] sm:text-[40px] font-serif font-normal mb-6">
            UI Elements
          </h2>
          <p className="text-[14px] sm:text-[15px] text-muted leading-[1.7] max-w-[520px] mb-12 sm:mb-16">
            Core interactive components follow the brand&apos;s tone: understated,
            precise, and warm.
          </p>

          {/* Buttons */}
          <div className="mb-12 sm:mb-16">
            <p className="text-[11px] tracking-[0.15em] uppercase text-accent mb-6">
              Buttons
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-dark text-cream px-6 py-3 text-[14px] font-medium rounded hover:bg-dark/85 transition-colors duration-300">
                Primary Action
              </button>
              <button className="bg-accent text-dark px-6 py-3 text-[14px] font-medium rounded hover:bg-accent/85 transition-colors duration-300">
                Accent Action
              </button>
              <button className="border border-dark/20 text-dark px-6 py-3 text-[14px] font-medium rounded hover:bg-dark hover:text-cream transition-colors duration-300">
                Secondary
              </button>
            </div>
          </div>

          {/* Labels */}
          <div className="mb-12 sm:mb-16">
            <p className="text-[11px] tracking-[0.15em] uppercase text-accent mb-6">
              Labels & Tags
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-[10px] tracking-[0.2em] uppercase text-teal font-medium bg-teal/10 px-3 py-1.5 rounded">
                Active
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium bg-accent/10 px-3 py-1.5 rounded">
                In Progress
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted font-medium bg-dark/5 px-3 py-1.5 rounded">
                Planned
              </span>
              <span className="flex items-center gap-2 text-[13px] text-muted">
                <span className="w-[7px] h-[7px] rounded-full bg-teal inline-block" />
                Status Indicator
              </span>
            </div>
          </div>

          {/* Input */}
          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-accent mb-6">
              Form Input
            </p>
            <div className="max-w-[400px]">
              <label className="block text-[10px] tracking-[0.15em] uppercase text-muted mb-2">
                Email Address
              </label>
              <input
                type="text"
                placeholder="you@company.com"
                readOnly
                className="w-full bg-transparent border border-dark/15 rounded px-4 py-3 text-[14px] text-dark placeholder-dark/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-dark/8">
        <div className="max-w-[960px] mx-auto text-center">
          <Image
            src="/logo.png"
            alt="Entelecht.ai"
            width={48}
            height={48}
            className="rounded-full mx-auto mb-4"
          />
          <p className="text-[13px] text-muted">
            Entelecht.ai Brand Kit &middot; {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-accent font-medium mb-4">
      {children}
    </p>
  );
}

function ColorCard({
  color,
  large,
}: {
  color: (typeof COLORS)[number];
  large?: boolean;
}) {
  return (
    <div className="group">
      <div
        className={`rounded-xl ${large ? "h-[180px] sm:h-[220px]" : "h-[120px] sm:h-[140px]"} flex items-end p-5`}
        style={{ backgroundColor: color.hex }}
      >
        <div className="flex items-end justify-between w-full">
          <div>
            <p
              className={`text-[13px] font-medium ${color.textDark ? "text-dark" : "text-cream"}`}
            >
              {color.name}
            </p>
            <p
              className={`text-[12px] font-mono ${color.textDark ? "text-dark/50" : "text-cream/50"}`}
            >
              {color.hex}
            </p>
          </div>
          <div className={color.textDark ? "text-dark/40" : "text-cream/40"}>
            <CopyButton text={color.hex} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TypeSpec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.1em] uppercase text-muted mb-0.5">
        {label}
      </p>
      <p className="text-[12px] sm:text-[13px] text-dark/70">{value}</p>
    </div>
  );
}
