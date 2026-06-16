const navLinks = [
  { label: "About", href: "#about" },
  { label: "How", href: "#how" },
  { label: "Brands", href: "#brands" },
  { label: "Creators", href: "#creators" },
  { label: "Campaigns", href: "#campaigns" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/24 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-6">
        <a href="#hero" className="font-editorial text-2xl font-semibold tracking-[0.22em] text-white sm:text-3xl">
          LIKHA
        </a>
        <nav className="hidden items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/62 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition duration-500 hover:text-amber-100">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-amber-100 transition duration-500 hover:bg-amber-100 hover:text-black sm:px-5">
          Begin
        </a>
      </div>
    </header>
  );
}
