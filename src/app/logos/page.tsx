"use client";

import { useState } from "react";

interface Logo {
  svg: string;
  prompt: string;
}

const PROMPT_LABELS = [
  "Minimal Wordmark (Gold on Dark)",
  "Minimal Wordmark (Gold on Dark)",
  "Spiral Icon + Logotype (Teal & Gold)",
  "Spiral Icon + Logotype (Teal & Gold)",
  "Abstract Monogram (Dark on Cream)",
  "Abstract Monogram (Dark on Cream)",
  "Gradient Mark (Teal to Gold)",
  "Gradient Mark (Teal to Gold)",
  "Dual-Tone Architectural (All Brand Colors)",
  "Dual-Tone Architectural (All Brand Colors)",
];

export default function LogosPage() {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  async function generateLogos() {
    setLoading(true);
    setError(null);
    setLogos([]);
    setSelected(new Set());

    try {
      const res = await fetch("/api/logos", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate logos");
      }

      setLogos(data.logos);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function toggleSelect(index: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  function downloadSvg(svg: string, index: number) {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `entelecht-logo-${index + 1}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F5F0EB", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <header
        className="border-b"
        style={{ borderColor: "rgba(26,26,26,0.1)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#5B8A72", letterSpacing: "0.2em" }}
          >
            Brand Identity
          </p>
          <h1
            className="text-4xl md:text-5xl font-normal"
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#1A1A1A",
            }}
          >
            Entelecht Logo Options
          </h1>
          <p className="mt-3 text-sm" style={{ color: "#6B7280" }}>
            10 AI-generated logo concepts across 5 different design directions.
            Select your favorites below.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Generate Button */}
        {logos.length === 0 && !loading && (
          <div className="text-center py-20">
            <button
              onClick={generateLogos}
              className="px-8 py-4 text-sm font-medium tracking-wide uppercase transition-colors cursor-pointer"
              style={{
                backgroundColor: "#1A1A1A",
                color: "#F5F0EB",
                letterSpacing: "0.15em",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(26,26,26,0.85)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1A1A1A")
              }
            >
              Generate 10 Logo Concepts
            </button>
            <p className="mt-4 text-xs" style={{ color: "#6B7280" }}>
              This will generate 10 unique SVG logos using your brand colors
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div
              className="inline-block w-8 h-8 border-2 rounded-full animate-spin"
              style={{
                borderColor: "rgba(26,26,26,0.1)",
                borderTopColor: "#B8975C",
              }}
            />
            <p className="mt-4 text-sm" style={{ color: "#6B7280" }}>
              Generating logos with Quiver AI... This may take a minute.
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div
            className="text-center py-12 px-6 border"
            style={{
              borderColor: "rgba(26,26,26,0.1)",
              backgroundColor: "rgba(26,26,26,0.02)",
            }}
          >
            <p className="text-sm" style={{ color: "#1A1A1A" }}>
              {error}
            </p>
            <button
              onClick={generateLogos}
              className="mt-4 px-6 py-2 text-xs uppercase tracking-wide cursor-pointer"
              style={{
                backgroundColor: "#5B8A72",
                color: "#F5F0EB",
                letterSpacing: "0.15em",
              }}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Logo Grid */}
        {logos.length > 0 && (
          <>
            {/* Selection summary */}
            {selected.size > 0 && (
              <div
                className="mb-8 p-4 border flex items-center justify-between"
                style={{
                  borderColor: "#B8975C",
                  backgroundColor: "rgba(184,151,92,0.05)",
                }}
              >
                <p className="text-sm" style={{ color: "#1A1A1A" }}>
                  <strong>{selected.size}</strong> logo
                  {selected.size !== 1 ? "s" : ""} selected
                </p>
                <button
                  onClick={() => {
                    selected.forEach((i) => downloadSvg(logos[i].svg, i));
                  }}
                  className="px-4 py-2 text-xs uppercase tracking-wide cursor-pointer"
                  style={{
                    backgroundColor: "#B8975C",
                    color: "#F5F0EB",
                    letterSpacing: "0.15em",
                  }}
                >
                  Download Selected
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  onClick={() => toggleSelect(i)}
                  className="border transition-all cursor-pointer"
                  style={{
                    borderColor: selected.has(i)
                      ? "#B8975C"
                      : "rgba(26,26,26,0.1)",
                    backgroundColor: selected.has(i)
                      ? "rgba(184,151,92,0.05)"
                      : "#ffffff",
                    boxShadow: selected.has(i)
                      ? "0 0 0 2px #B8975C"
                      : "none",
                  }}
                >
                  {/* Label */}
                  <div
                    className="px-5 py-3 border-b flex items-center justify-between"
                    style={{ borderColor: "rgba(26,26,26,0.06)" }}
                  >
                    <div>
                      <span
                        className="text-xs uppercase tracking-wide"
                        style={{ color: "#5B8A72", letterSpacing: "0.15em" }}
                      >
                        Option {i + 1}
                      </span>
                      <span
                        className="ml-3 text-xs"
                        style={{ color: "#6B7280" }}
                      >
                        {PROMPT_LABELS[i] || "Logo Concept"}
                      </span>
                    </div>
                    {selected.has(i) && (
                      <span
                        className="text-xs font-medium"
                        style={{ color: "#B8975C" }}
                      >
                        Selected
                      </span>
                    )}
                  </div>

                  {/* SVG Preview */}
                  <div
                    className="p-8 flex items-center justify-center min-h-[240px]"
                    dangerouslySetInnerHTML={{ __html: logo.svg }}
                  />

                  {/* Actions */}
                  <div
                    className="px-5 py-3 border-t flex justify-end gap-3"
                    style={{ borderColor: "rgba(26,26,26,0.06)" }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadSvg(logo.svg, i);
                      }}
                      className="text-xs uppercase tracking-wide cursor-pointer"
                      style={{ color: "#5B8A72", letterSpacing: "0.1em" }}
                    >
                      Download SVG
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Regenerate */}
            <div className="text-center mt-12 pb-12">
              <button
                onClick={generateLogos}
                className="px-6 py-3 text-xs uppercase tracking-wide border cursor-pointer transition-colors"
                style={{
                  borderColor: "rgba(26,26,26,0.2)",
                  color: "#1A1A1A",
                  letterSpacing: "0.15em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(26,26,26,0.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                Regenerate All
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
