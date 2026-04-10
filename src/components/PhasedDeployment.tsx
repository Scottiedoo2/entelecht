import ScrollReveal from "./ScrollReveal";

const phases = [
  {
    number: "01",
    title: "Vault + Camera",
    badge: "BUILDING NOW",
    active: true,
    items: [
      "Governance artifacts exist and are auditable",
      "Structured capture via conversation or existing docs",
      "Content-addressed signatures with version chains",
      "SDK for pre-inference governance context retrieval",
    ],
  },
  {
    number: "02",
    title: "+ Integrity",
    badge: "NEXT",
    active: false,
    items: [
      "Alignment visible, drift measurable",
      "Coherence scoring and constraint graphs",
    ],
  },
  {
    number: "03",
    title: "+ Lock",
    badge: "FUTURE",
    active: false,
    items: [
      "Misalignment prevented, not just detected",
      "Mechanical enforcement with fail-closed admission",
    ],
  },
];

export default function PhasedDeployment() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="border-t border-dark/10 pt-12 sm:pt-16">
          <ScrollReveal>
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-teal font-medium mb-4">
              Phased Deployment
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="text-[24px] sm:text-[36px] lg:text-[44px] font-serif mb-10 sm:mb-16 font-normal leading-[1.15]">
              Ship value at every phase
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="reveal-stagger" className="max-w-[720px]">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="border-t border-dark/10 py-8 sm:py-10"
              >
                <div className="flex items-start gap-4 sm:gap-10">
                  <span className="text-[32px] sm:text-[48px] font-serif text-dark/15 leading-none shrink-0 select-none">
                    {phase.number}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <h3 className="text-[15px] sm:text-[17px] font-medium">
                        {phase.title}
                      </h3>
                      <span
                        className={`text-[9px] sm:text-[10px] font-medium px-2.5 sm:px-3 py-1 rounded ${
                          phase.active
                            ? "bg-dark text-cream"
                            : "border border-dark/20 text-dark/60"
                        }`}
                      >
                        {phase.badge}
                      </span>
                    </div>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {phase.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-[13px] sm:text-[14px] text-dark/70 leading-[1.5]"
                        >
                          <span className="text-dark/30 shrink-0">–</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
