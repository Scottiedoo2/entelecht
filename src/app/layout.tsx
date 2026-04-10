import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Entelecht.ai — Governance Infrastructure for Autonomous AI",
  description:
    "The deterministic binding layer between what humans declare and what AI systems do. Making human intention architectable.",
  keywords: [
    "AI governance",
    "autonomous AI",
    "SPIRAL protocol",
    "AI safety",
    "governance infrastructure",
    "AI compliance",
  ],
  authors: [{ name: "Spiral Protocol Foundation" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Entelecht.ai — Governance Infrastructure for Autonomous AI",
    description:
      "The deterministic binding layer between what humans declare and what AI systems do.",
    url: "https://entelecht.ai",
    siteName: "Entelecht.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entelecht.ai — Governance Infrastructure for Autonomous AI",
    description: "Making human intention architectable.",
  },
  metadataBase: new URL("https://entelecht.ai"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Entelecht.ai",
  url: "https://entelecht.ai",
  description:
    "Governance infrastructure for autonomous AI. The deterministic binding layer between what humans declare and what AI systems do.",
  email: "architect@entelecht.ai",
};

const fontVars = [inter.variable, playfair.variable, jetbrainsMono.variable].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVars} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-dark focus:text-cream focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
