import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 sm:pt-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-[720px]">
          <ScrollReveal>
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-teal font-medium mb-4 sm:mb-6">
              Governance Infrastructure for Autonomous AI
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h1 className="text-[36px] sm:text-[56px] lg:text-[64px] font-serif leading-[1.08] mb-6 sm:mb-8 font-normal">
              Making human intention{" "}
              <em className="text-accent">architectable</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-[16px] sm:text-[20px] text-muted leading-[1.6] max-w-[520px] mb-8 sm:mb-10">
              The deterministic binding layer between what humans declare and
              what AI systems do.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-dark text-cream px-6 sm:px-8 py-3.5 sm:py-4 text-[14px] font-medium rounded hover:bg-dark/85 transition-colors duration-300 w-full sm:w-auto"
              >
                Start a conversation
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center text-[14px] text-muted hover:text-dark transition-colors duration-300 gap-1.5"
              >
                See the architecture <span className="text-[16px]">↓</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
