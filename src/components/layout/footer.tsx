export function Footer() {
  return (
    <footer className="relative bg-[#140505] text-[#F8F1E8]">
      {/* Top border */}
      <div className="mx-auto max-w-[1700px] px-6 lg:px-12">
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="mx-auto max-w-[1700px] px-6 py-8 lg:px-12 lg:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Left — brand */}
          <div className="flex items-center gap-4">
            <span className="font-editorial text-sm tracking-[0.28em] text-[#F8F1E8]/60">
              LIKHA
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#D6A75C]/60">
              Boutique Web Studio
            </span>
          </div>

          {/* Right — copyright */}
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#F8F1E8]/20">
            © {new Date().getFullYear()} LIKHA. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}