import fs from "fs";
import path from "path";
import LogoExplorer from "@/components/LogoExplorer";

const DESIGN_DIRECTIONS: Record<number, string> = {
  1: "Serif Wordmark",
  2: "Serif Display",
  3: "Monogram Crest",
  4: "Geometric Emblem",
  5: "Celtic Knot",
  6: "Flowing Rings",
  7: "Spiral Mark",
  8: "Horizontal Lockup",
  9: "Block Letterform",
  10: "Arrow Monogram",
  11: "Teal Accent",
  12: "Stacked Type",
  13: "Tech Monogram",
  14: "Emblem Ring",
  15: "Circular Seal",
  16: "Geometric Sigil",
  17: "Angular Lettermark",
  18: "Shield Crest",
  19: "Trust Badge",
  20: "Stacked Serif",
  21: "Gold Type",
  22: "Neural Grid",
  23: "Node Network",
  24: "Hex Spiral",
  25: "Hex Mark",
  26: "Line Art",
  27: "Continuous Stroke",
  28: "Bold Gradient",
  29: "Gradient Type",
  30: "Dual Tone",
};

export default function LogosPage() {
  const logosDir = path.join(process.cwd(), "public", "logos");
  const files = fs
    .readdirSync(logosDir)
    .filter((f) => f.endsWith(".svg"))
    .sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ""), 10);
      const numB = parseInt(b.replace(/\D/g, ""), 10);
      return numA - numB;
    });

  const logos = files.map((file) => {
    const num = parseInt(file.replace("logo-", "").replace(".svg", ""), 10);
    const svgContent = fs.readFileSync(path.join(logosDir, file), "utf-8");
    return {
      id: num,
      filename: file,
      svgContent,
      direction: DESIGN_DIRECTIONS[num] || `Style ${num}`,
    };
  });

  return <LogoExplorer logos={logos} />;
}
