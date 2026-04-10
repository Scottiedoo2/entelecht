import { NextResponse } from "next/server";

const QUIVER_API_KEY = process.env.QUIVERAI_API_KEY || "sk_live_39JPCeQR9ytHoFxtdCwvN9";
const API_URL = "https://api.quiver.ai/v1/svgs/generations";

const PROMPTS = [
  // Prompt 1 — Minimal Wordmark (Gold on Dark) x2
  `Minimal, modern wordmark logo for "ENTELECHT". Clean serif letterforms. Gold (#B8975C) text on charcoal (#1A1A1A) background. No icon, no tagline. Enterprise-grade, similar to OpenAI or Anthropic branding. Flat design, no gradients. Professional AI governance company.`,

  // Prompt 2 — Spiral Icon + Logotype (Teal & Gold) x2
  `Sophisticated logo for "ENTELECHT" featuring a geometric spiral icon representing structured AI governance. Icon uses teal (#5B8A72) with gold (#B8975C) accent. Logotype in dark charcoal (#1A1A1A) using elegant serif font. Clean white background. Minimal, architectural, premium B2B SaaS aesthetic.`,

  // Prompt 3 — Abstract Monogram (Dark on Cream) x2
  `Abstract monogram logo using the letters "E" and "S" interlocked for "Entelecht SPIRAL". Dark charcoal (#1A1A1A) on warm cream (#F5F0EB) background. Geometric, precise linework. Modernist, scientific feel. No decoration — pure form. Swiss design meets AI enterprise.`,

  // Prompt 4 — Gradient Mark (Teal to Gold) x2
  `Modern logomark for "ENTELECHT" — a stylized spiral or helix shape using a subtle gradient from teal (#5B8A72) to gold (#B8975C). Paired with clean sans-serif logotype in charcoal (#1A1A1A). Cream (#F5F0EB) background. Conveys trust, precision, and governance. Flat, minimal, scalable.`,

  // Prompt 5 — Dual-Tone Architectural (All Brand Colors) x2
  `Enterprise logo for "ENTELECHT.AI" — AI governance platform. Geometric icon suggesting layered structure or protocol stack. Uses teal (#5B8A72) and gold (#B8975C) as dual accent tones, with dark (#1A1A1A) logotype. Warm cream (#F5F0EB) background. Clean, authoritative, inspired by architectural blueprints. No busy details.`,
];

async function generateLogo(prompt: string, n: number = 2): Promise<{ svg: string; prompt: string }[]> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${QUIVER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "arrow-preview",
      prompt,
      n,
      stream: false,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Quiver API error (${res.status}): ${err}`);
  }

  const json = await res.json();
  return (json.data || []).map((item: { svg: string }) => ({
    svg: item.svg,
    prompt,
  }));
}

export async function POST() {
  try {
    const results = [];

    // Generate 2 logos per prompt = 10 total
    // Sequential to respect rate limits (20/min)
    for (const prompt of PROMPTS) {
      const logos = await generateLogo(prompt, 2);
      results.push(...logos);
    }

    return NextResponse.json({ logos: results });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
