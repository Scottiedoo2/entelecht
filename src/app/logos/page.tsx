import fs from "fs";
import path from "path";
import LogoExplorer from "@/components/LogoExplorer";

const DESIGN_DIRECTIONS: Record<number, string> = {
  // Row 1: Wordmarks
  1: "Classic Serif",
  2: "Gold Serif",
  3: "Italic Serif",
  4: "Bold Sans",
  5: "Spaced Serif",
  // Row 2: Monograms
  6: "Circle Monogram",
  7: "Block Monogram",
  8: "Interlocking EA",
  9: "Stacked Monogram",
  10: "Diamond Monogram",
  // Row 3: Spiral Icons
  11: "Spiral + Wordmark",
  12: "Golden Spiral",
  13: "Spiral Seal",
  14: "Double Spiral",
  15: "Fibonacci Square",
  // Row 4: Geometric / Abstract
  16: "Hex Network",
  17: "Protocol Stack",
  18: "Shield Crest",
  19: "Circular Emblem",
  20: "Badge Crest",
  // Row 5: Abstract Marks
  21: "Node Graph",
  22: "Concentric Rings",
  23: "Triple Ring",
  24: "Grid Matrix",
  25: "Signal Bars",
  // Row 6: Modern Lockups
  26: "Line E + Type",
  27: "Stroke Wordmark",
  28: "Split Color",
  29: "Gradient Bar",
  30: "Boxed Modern",
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
