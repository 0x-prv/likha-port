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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo/likha-logo.png"
            alt="LIKHA logo"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />

          <div>
            <div className="font-editorial text-2xl tracking-[0.28em] text-black">
              LIKHA
            </div>
            <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#B89A68]">
              Web Design & Development
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.32em] text-black lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#B89A68]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-[#B89A68] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A6A3D] hover:bg-[#B89A68] hover:text-white md:inline-flex"
        >
          Start
        </a>
      </div>
    </header>
  );
}