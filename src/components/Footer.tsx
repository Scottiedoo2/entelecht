export default function Footer() {
  return (
    <footer className="bg-dark border-t border-cream/10 py-6">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-[12px] text-cream/40">
        <p>© 2026 Spiral Protocol Foundation</p>
        <a
          href="mailto:architect@entelecht.ai"
          className="hover:text-cream/60 transition-colors duration-300"
        >
          architect@entelecht.ai
        </a>
      </div>
    </footer>
  );
}
