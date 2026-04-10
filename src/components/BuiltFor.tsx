import ScrollReveal from "./ScrollReveal";

const useCases = [
  {
    title: "Diagnostic imaging",
    description: "AI reading scans under clinical and regulatory constraints",
  },
  {
    title: "Lending & underwriting",
    description: "Automated decisions with fair lending requirements",
  },
  {
    title: "Clinical decision support",
    description:
      "AI recommendations where patient safety is non-negotiable",
  },
  {
    title: "Autonomous operations",
    description: "Any system where AI acts without human-in-the-loop",
  },
];

export default function BuiltFor() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="border-t border-dark/10 pt-12 sm:pt-16">
          <ScrollReveal>
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-teal font-medium mb-4">
              Built For
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="text-[24px] sm:text-[36px] lg:text-[44px] font-serif mb-8 sm:mb-12 font-normal leading-[1.15]">
              Organizations deploying AI into consequential decisions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-cream-dark rounded-lg overflow-hidden">
              {useCases.map((item, i) => (
                <div
                  key={i}
                  className={`p-6 sm:p-8 lg:p-10 ${
                    i < 2 ? "border-b border-dark/5" : ""
                  } ${i % 2 === 0 ? "sm:border-r border-dark/5" : ""} ${
                    i === 2 ? "border-b sm:border-b-0 border-dark/5" : ""
                  }`}
                >
                  <h3 className="text-[14px] sm:text-[15px] font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-dark/60 leading-[1.5]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
