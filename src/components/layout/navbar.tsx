import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#F5F1EA]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <a href="#" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Image
            src="/logo/likha-logo.png"
            alt="LIKHA logo"
            width={52}
            height={52}
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
            priority
          />

          <div className="min-w-0">
            <div className="font-editorial text-xl tracking-[0.22em] text-black sm:text-2xl sm:tracking-[0.28em]">
              LIKHA
            </div>
            <div className="max-w-[11rem] truncate text-[8px] font-medium uppercase tracking-[0.22em] text-[#B89A68] sm:max-w-none sm:text-[9px] sm:tracking-[0.3em]">
              Web Design & Development
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-black lg:flex xl:gap-9 xl:text-[11px] xl:tracking-[0.32em]">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-[#B89A68]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 rounded-full border border-[#B89A68] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A6A3D] transition hover:bg-[#B89A68] hover:text-white md:inline-flex lg:px-6 lg:py-3 lg:text-[11px]"
        >
          Start
        </a>
      </div>
    </header>
  );
}
