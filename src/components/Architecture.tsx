import ScrollReveal from "./ScrollReveal";

const components = [
  {
    name: "Vault",
    label: "Capture",
    items: [
      "Structured articulation of governing principles",
      "Content-addressed, versioned artifacts (SHA-256)",
      "Mandatory remainder — never claims completeness",
      "Multiple entry paths: documents to open exploration",
    ],
  },
  {
    name: "Camera",
    label: "Audit",
    items: [
      "Append-only event trail",
      "Full provenance: principle → decision → action",
      "Schema-validated with conditional rules",
      "No updates. No deletes. No exceptions.",
    ],
  },
  {
    name: "Integrity",
    label: "Measurement",
    items: [
      "Coherence scoring against declared principles",
      "Drift detection over time",
      "Constraint graph",
      "Advisory before enforcement",
    ],
  },
  {
    name: "Lock",
    label: "Enforcement",
    items: [
      "Admission gate on every proposed action",
      "Divergence computed against governing authority",
      "Threshold-based blocking",
      "Fail-closed — no permit, no execution",
    ],
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="border-t border-dark/10 pt-12 sm:pt-16">
          <ScrollReveal>
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-teal font-medium mb-4">
              The Architecture
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="text-[24px] sm:text-[36px] lg:text-[44px] font-serif mb-8 sm:mb-12 font-normal leading-[1.15]">
              Four components. One infrastructure.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="grid sm:grid-cols-2 border border-dark/10 rounded-lg overflow-hidden mb-8 sm:mb-12">
              {components.map((comp, i) => (
                <div
                  key={comp.name}
                  className={`p-6 sm:p-8 lg:p-10 ${
                    i < 2 ? "border-b border-dark/10" : ""
                  } ${i % 2 === 0 ? "sm:border-r border-dark/10" : ""} ${
                    i === 2 ? "border-b sm:border-b-0 border-dark/10" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <h3 className="text-[18px] sm:text-[20px] font-serif font-normal">
                      {comp.name}
                    </h3>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-teal font-medium">
                      {comp.label}
                    </span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {comp.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-[13px] sm:text-[14px] text-dark/70 leading-[1.5]"
                      >
                        <span className="text-dark/30 shrink-0">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="code-slide">
            <div className="bg-dark text-cream/80 rounded-lg px-4 sm:px-8 py-4 sm:py-5 font-mono text-[11px] sm:text-[13px] leading-relaxed overflow-x-auto whitespace-nowrap">
              <span className="text-teal">capture</span>(principles) →{" "}
              <span className="text-teal">canonicalize</span>(json) →{" "}
              <span className="text-teal">hash</span>(sha256) →{" "}
              <span className="text-teal">store</span>(immutable) →{" "}
              <span className="text-teal">audit</span>(append_only) →{" "}
              <span className="text-teal">governance_artifact</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
