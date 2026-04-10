export default function Footer() {
  return (
    <footer className="bg-dark border-t border-cream/10 py-6">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-[12px] text-cream/40">
        <p>© 2026 Spiral Protocol Foundation</p>
        <div className="flex items-center gap-5">
          <a
            href="https://x.com/EntelechtAI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entelecht.ai on X (Twitter)"
            className="flex items-center gap-1.5 hover:text-cream/70 transition-colors duration-300"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            @EntelechtAI
          </a>
          <a
            href="mailto:architect@entelecht.ai"
            className="hover:text-cream/60 transition-colors duration-300"
          >
            architect@entelecht.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
