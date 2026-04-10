import fs from "fs";
import path from "path";

const LABELS = [
  "Minimal Wordmark",
  "Minimal Wordmark",
  "Spiral Icon",
  "Spiral Icon",
  "Abstract Monogram",
  "Abstract Monogram",
  "Gradient Mark",
  "Gradient Mark",
  "Dual-Tone",
];

export default function LogosPage() {
  const logosDir = path.join(process.cwd(), "public/logos");
  const files = fs
    .readdirSync(logosDir)
    .filter((f) => f.endsWith(".svg"))
    .sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ""));
      const numB = parseInt(b.replace(/\D/g, ""));
      return numA - numB;
    });

  const logos = files.map((file, i) => ({
    src: `/logos/${file}`,
    svg: fs.readFileSync(path.join(logosDir, file), "utf-8"),
    label: LABELS[i] || "Logo Concept",
    number: i + 1,
  }));

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
        <div className="max-w-7xl mx-auto px-6 py-8">
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
            {logos.length} AI-generated logo concepts across 5 design
            directions. Click any logo to download the SVG.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-6">
          {logos.slice(0, 5).map((logo) => (
            <a
              key={logo.number}
              href={logo.src}
              download={`entelecht-logo-${logo.number}.svg`}
              className="group block border transition-all hover:shadow-lg"
              style={{
                borderColor: "rgba(26,26,26,0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                className="px-3 py-2 border-b"
                style={{ borderColor: "rgba(26,26,26,0.06)" }}
              >
                <span
                  className="text-[10px] uppercase tracking-wide"
                  style={{ color: "#5B8A72", letterSpacing: "0.15em" }}
                >
                  {logo.number}
                </span>
                <span
                  className="ml-2 text-[10px]"
                  style={{ color: "#6B7280" }}
                >
                  {logo.label}
                </span>
              </div>
              <div
                className="p-6 flex items-center justify-center min-h-[180px]"
                dangerouslySetInnerHTML={{ __html: logo.svg }}
              />
              <div
                className="px-3 py-2 border-t text-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: "rgba(26,26,26,0.06)" }}
              >
                <span
                  className="text-[10px] uppercase tracking-wide"
                  style={{ color: "#B8975C", letterSpacing: "0.1em" }}
                >
                  Download SVG
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {logos.slice(5).map((logo) => (
            <a
              key={logo.number}
              href={logo.src}
              download={`entelecht-logo-${logo.number}.svg`}
              className="group block border transition-all hover:shadow-lg"
              style={{
                borderColor: "rgba(26,26,26,0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                className="px-3 py-2 border-b"
                style={{ borderColor: "rgba(26,26,26,0.06)" }}
              >
                <span
                  className="text-[10px] uppercase tracking-wide"
                  style={{ color: "#5B8A72", letterSpacing: "0.15em" }}
                >
                  {logo.number}
                </span>
                <span
                  className="ml-2 text-[10px]"
                  style={{ color: "#6B7280" }}
                >
                  {logo.label}
                </span>
              </div>
              <div
                className="p-6 flex items-center justify-center min-h-[180px]"
                dangerouslySetInnerHTML={{ __html: logo.svg }}
              />
              <div
                className="px-3 py-2 border-t text-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: "rgba(26,26,26,0.06)" }}
              >
                <span
                  className="text-[10px] uppercase tracking-wide"
                  style={{ color: "#B8975C", letterSpacing: "0.1em" }}
                >
                  Download SVG
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Brand Colors Reference */}
        <div
          className="mt-16 border-t pt-8"
          style={{ borderColor: "rgba(26,26,26,0.1)" }}
        >
          <p
            className="text-[10px] uppercase tracking-widest mb-4"
            style={{ color: "#6B7280", letterSpacing: "0.2em" }}
          >
            Brand Palette
          </p>
          <div className="flex gap-4 flex-wrap">
            {[
              { name: "Cream", hex: "#F5F0EB" },
              { name: "Gold", hex: "#B8975C" },
              { name: "Teal", hex: "#5B8A72" },
              { name: "Dark", hex: "#1A1A1A" },
            ].map((c) => (
              <div key={c.hex} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-sm border"
                  style={{
                    backgroundColor: c.hex,
                    borderColor: "rgba(26,26,26,0.1)",
                  }}
                />
                <div>
                  <p
                    className="text-[11px] font-medium"
                    style={{ color: "#1A1A1A" }}
                  >
                    {c.name}
                  </p>
                  <p className="text-[10px]" style={{ color: "#6B7280" }}>
                    {c.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
