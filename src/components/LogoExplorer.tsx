"use client";

import { useState, useCallback, useEffect } from "react";

interface LogoData {
  id: number;
  filename: string;
  svgContent: string;
  direction: string;
}

interface LogoExplorerProps {
  logos: LogoData[];
}

type TextCase = "lower" | "title" | "upper";

function getCaseText(c: TextCase): string {
  if (c === "lower") return "entelecht";
  if (c === "title") return "Entelecht";
  return "ENTELECHT";
}

function processSvgForDark(svg: string): string {
  return svg
    .replace(/fill="#1A1A1A"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#1A1A1B"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#141614"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#141919"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#111D1D"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#161C1D"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#001212"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#021815"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#000"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#283539"/gi, 'fill="#F5F0EB"')
    .replace(/fill="#F2ECD0"/gi, 'fill="transparent"')
    .replace(/fill="#F3EDD1"/gi, 'fill="transparent"')
    .replace(/fill="#F0E9E1"/gi, 'fill="transparent"')
    .replace(/fill="#F0E9DF"/gi, 'fill="transparent"')
    .replace(/fill="#F1EFE2"/gi, 'fill="transparent"');
}

function processSvgForLight(svg: string): string {
  return svg
    .replace(/fill="#F2ECD0"/gi, 'fill="transparent"')
    .replace(/fill="#F3EDD1"/gi, 'fill="transparent"')
    .replace(/fill="#F0E9E1"/gi, 'fill="transparent"')
    .replace(/fill="#F0E9DF"/gi, 'fill="transparent"')
    .replace(/fill="#F1EFE2"/gi, 'fill="transparent"');
}

export default function LogoExplorer({ logos }: LogoExplorerProps) {
  const [darkModes, setDarkModes] = useState<Record<number, boolean>>({});
  const [textCases, setTextCases] = useState<Record<number, TextCase>>({});
  const [modalId, setModalId] = useState<number | null>(null);
  const [modalDark, setModalDark] = useState(false);
  const [modalCase, setModalCase] = useState<TextCase>("title");

  const toggleDark = useCallback((id: number) => {
    setDarkModes((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const setCase = useCallback((id: number, c: TextCase) => {
    setTextCases((prev) => ({ ...prev, [id]: c }));
  }, []);

  const openModal = useCallback((logo: LogoData) => {
    setModalId(logo.id);
    setModalDark(false);
    setModalCase("title");
  }, []);

  const closeModal = useCallback(() => {
    setModalId(null);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);

  const modalLogo = modalId !== null ? logos.find((l) => l.id === modalId) : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5F0EB",
        fontFamily: "var(--font-inter), Inter, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid rgba(26,26,26,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px 40px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#5B8A72",
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            ENTELECHT
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 400,
              color: "#1A1A1A",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Brand Identity &amp; Logo Exploration
          </h1>
          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#6B7280",
              maxWidth: "720px",
            }}
          >
            {logos.length} unique logo variations across {new Set(logos.map((l) => l.direction)).size} design
            directions for Entelecht.ai&apos;s governance infrastructure brand. Symbols represent
            trust, precision, and structured intelligence. Click any logo to expand. Toggle
            between light/dark mode and text cases.
          </p>
        </div>
      </header>

      {/* Grid */}
      <main
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "24px",
          }}
          className="logo-grid"
        >
          {logos.map((logo) => {
            const isDark = darkModes[logo.id] || false;
            const currentCase = textCases[logo.id] || "title";
            const processedSvg = isDark
              ? processSvgForDark(logo.svgContent)
              : processSvgForLight(logo.svgContent);

            return (
              <div
                key={logo.id}
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(26,26,26,0.08)",
                  overflow: "hidden",
                  background: isDark
                    ? "linear-gradient(135deg, #1f2937, #111827)"
                    : "#ffffff",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                }}
                className="logo-card"
                onClick={() => openModal(logo)}
              >
                {/* Top bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(26,26,26,0.06)"}`,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "#5B8A72",
                        fontWeight: 600,
                      }}
                    >
                      Option {logo.id}
                    </span>
                    <span
                      style={{
                        marginLeft: "8px",
                        fontSize: "10px",
                        color: isDark ? "rgba(255,255,255,0.45)" : "#6B7280",
                      }}
                    >
                      {logo.direction}
                    </span>
                  </div>

                  {/* Dark mode toggle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDark(logo.id);
                    }}
                    style={{
                      width: "36px",
                      height: "20px",
                      borderRadius: "10px",
                      border: "none",
                      background: isDark ? "#5B8A72" : "rgba(26,26,26,0.15)",
                      position: "relative",
                      cursor: "pointer",
                      transition: "background 0.2s",
                      flexShrink: 0,
                    }}
                    title={isDark ? "Switch to light" : "Switch to dark"}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#fff",
                        position: "absolute",
                        top: "2px",
                        left: isDark ? "18px" : "2px",
                        transition: "left 0.2s",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                      }}
                    />
                  </button>
                </div>

                {/* SVG Display */}
                <div
                  style={{
                    padding: "32px 20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "180px",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "100%",
                      maxHeight: "140px",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: processedSvg.replace(
                        /(<svg[^>]*)(>)/,
                        '$1 style="max-width:100%;max-height:140px;width:auto;height:auto;"$2'
                      ),
                    }}
                  />
                </div>

                {/* Text case label */}
                <div
                  style={{
                    textAlign: "center",
                    paddingBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), Playfair Display, serif",
                      fontSize: "14px",
                      letterSpacing: "0.08em",
                      color: isDark ? "rgba(255,255,255,0.7)" : "#1A1A1A",
                    }}
                  >
                    {getCaseText(currentCase)}
                  </span>
                </div>

                {/* Case toggle buttons */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px 14px 12px",
                    gap: "2px",
                    borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(26,26,26,0.06)"}`,
                  }}
                >
                  {(["lower", "title", "upper"] as TextCase[]).map((c) => {
                    const label = c === "lower" ? "aa" : c === "title" ? "Aa" : "AA";
                    const isActive = currentCase === c;
                    return (
                      <button
                        key={c}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCase(logo.id, c);
                        }}
                        style={{
                          fontSize: "11px",
                          fontWeight: isActive ? 600 : 400,
                          color: isActive
                            ? "#B8975C"
                            : isDark
                              ? "rgba(255,255,255,0.35)"
                              : "#6B7280",
                          background: isActive
                            ? isDark
                              ? "rgba(184,151,92,0.12)"
                              : "rgba(184,151,92,0.1)"
                            : "transparent",
                          border: "none",
                          padding: "4px 10px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Color Palette */}
        <div
          style={{
            marginTop: "80px",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            paddingTop: "40px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#5B8A72",
              marginBottom: "24px",
              fontWeight: 600,
            }}
          >
            Brand Color Palette
          </p>
          <div
            style={{
              display: "flex",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            {[
              { name: "Cream", hex: "#F5F0EB", textColor: "#1A1A1A" },
              { name: "Gold", hex: "#B8975C", textColor: "#ffffff" },
              { name: "Teal", hex: "#5B8A72", textColor: "#ffffff" },
              { name: "Dark", hex: "#1A1A1A", textColor: "#ffffff" },
              { name: "Muted", hex: "#6B7280", textColor: "#ffffff" },
            ].map((c) => (
              <div key={c.hex} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: c.hex,
                    border: "1px solid rgba(26,26,26,0.1)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#1A1A1A",
                      margin: 0,
                    }}
                  >
                    {c.name}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6B7280",
                      margin: "2px 0 0",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                    }}
                  >
                    {c.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {modalLogo && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            backgroundColor: "rgba(26,26,26,0.6)",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: modalDark
                ? "linear-gradient(135deg, #1f2937, #111827)"
                : "#ffffff",
              borderRadius: "16px",
              padding: "40px",
              maxWidth: "640px",
              width: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "none",
                background: modalDark ? "rgba(255,255,255,0.1)" : "rgba(26,26,26,0.06)",
                color: modalDark ? "rgba(255,255,255,0.6)" : "#6B7280",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              &times;
            </button>

            {/* Modal header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#5B8A72",
                    fontWeight: 600,
                  }}
                >
                  Option {modalLogo.id}
                </span>
                <span
                  style={{
                    marginLeft: "10px",
                    fontSize: "11px",
                    color: modalDark ? "rgba(255,255,255,0.45)" : "#6B7280",
                  }}
                >
                  {modalLogo.direction}
                </span>
              </div>

              {/* Modal dark toggle */}
              <button
                onClick={() => setModalDark(!modalDark)}
                style={{
                  width: "40px",
                  height: "22px",
                  borderRadius: "11px",
                  border: "none",
                  background: modalDark ? "#5B8A72" : "rgba(26,26,26,0.15)",
                  position: "relative",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                title={modalDark ? "Switch to light" : "Switch to dark"}
              >
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#fff",
                    position: "absolute",
                    top: "2px",
                    left: modalDark ? "20px" : "2px",
                    transition: "left 0.2s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                />
              </button>
            </div>

            {/* Modal SVG */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "300px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  maxWidth: "100%",
                  maxHeight: "320px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                dangerouslySetInnerHTML={{
                  __html: (modalDark
                    ? processSvgForDark(modalLogo.svgContent)
                    : processSvgForLight(modalLogo.svgContent)
                  ).replace(
                    /(<svg[^>]*)(>)/,
                    '$1 style="max-width:100%;max-height:320px;width:auto;height:auto;"$2'
                  ),
                }}
              />
            </div>

            {/* Modal text label */}
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <span
                style={{
                  fontFamily: "var(--font-playfair), Playfair Display, serif",
                  fontSize: "20px",
                  letterSpacing: "0.1em",
                  color: modalDark ? "rgba(255,255,255,0.7)" : "#1A1A1A",
                }}
              >
                {getCaseText(modalCase)}
              </span>
            </div>

            {/* Modal case toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
                gap: "4px",
              }}
            >
              {(["lower", "title", "upper"] as TextCase[]).map((c) => {
                const label = c === "lower" ? "aa" : c === "title" ? "Aa" : "AA";
                const isActive = modalCase === c;
                return (
                  <button
                    key={c}
                    onClick={() => setModalCase(c)}
                    style={{
                      fontSize: "13px",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive
                        ? "#B8975C"
                        : modalDark
                          ? "rgba(255,255,255,0.35)"
                          : "#6B7280",
                      background: isActive
                        ? modalDark
                          ? "rgba(184,151,92,0.12)"
                          : "rgba(184,151,92,0.1)"
                        : "transparent",
                      border: "none",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        .logo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(26,26,26,0.12);
        }
        .logo-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        @media (max-width: 1100px) {
          .logo-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .logo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .logo-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
