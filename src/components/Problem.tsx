import ScrollReveal from "./ScrollReveal";

const problems = [
  "No structured record of what the organization declared as its principles",
  "No measurement of whether AI behavior drifted from those principles",
  "No mechanical gate to stop misaligned actions before execution",
  "Governance that logs outputs but never conditions inputs",
];

export default function Problem() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="border-t border-dark/10 pt-12 sm:pt-16">
          <ScrollReveal>
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-teal font-medium mb-6 sm:mb-8">
              The Problem
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <blockquote className="border-l-[3px] border-accent/40 pl-5 sm:pl-8 mb-10 sm:mb-12">
              <p className="text-[18px] sm:text-[24px] font-serif italic text-dark/80 leading-[1.5]">
                If you removed your AI governance layer tomorrow, would your
                systems behave any differently?
              </p>
            </blockquote>
          </ScrollReveal>
          <ScrollReveal variant="reveal-stagger" className="max-w-[720px]">
            {problems.map((text, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 sm:gap-4 py-4 sm:py-5 border-t border-dark/10 ${
                  i === problems.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="text-muted text-[13px] mt-0.5 select-none">
                  ✕
                </span>
                <p className="text-[14px] sm:text-[15px] text-dark/80 leading-[1.6]">
                  {text}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
