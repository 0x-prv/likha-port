"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [navExpanded, setNavExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* DESKTOP — fixed right, vertical pill */}
      <div className="fixed right-6 top-6 z-50 hidden lg:block">
        <div
          onMouseEnter={() => setNavExpanded(true)}
          onMouseLeave={() => {
            setNavExpanded(false);
            setHoveredLink(null);
          }}
          className={`flex flex-col items-center rounded-[2rem] border border-white/10 bg-[#140505]/70 backdrop-blur-xl transition-all duration-500 ease-out ${
            navExpanded
              ? "gap-0 px-5 py-4 shadow-[0_8px_60px_rgba(0,0,0,0.6)]"
              : "gap-0 px-3 py-3"
          }`}
        >
          {/* LOGO — always visible */}
          <a href="#" className="flex shrink-0 items-center justify-center">
            <Image
              src="/logo/likha-logo.png"
              alt="LIKHA"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
          </a>

          {/* Divider */}
          <div
            className={`w-full transition-all duration-400 ${
              navExpanded
                ? "my-3 h-px bg-white/10 opacity-100"
                : "my-0 h-0 opacity-0"
            }`}
          />

          {/* NAV LINKS — normal horizontal text, stacked vertically */}
          <nav
            className={`flex flex-col items-center overflow-hidden transition-all duration-500 ease-out ${
              navExpanded ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {navLinks.map((link, i) => (
<a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`group relative flex w-full flex-col items-center py-3 transition-all duration-500 ${
                  navExpanded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
                style={{
                  transitionDelay: navExpanded ? `${80 + i * 50}ms` : "0ms",
                }}
              >
                {/* Number */}
                <span
                  className={`mb-1 text-[7px] tracking-widest transition-all duration-300 ${
                    hoveredLink === link.label
                      ? "text-[#D6A75C]/70 opacity-100"
                      : "opacity-0"
                  }`}
                >
                  0{i + 1}
                </span>

                {/* Label — normal upright text */}
                <span
                  className={`block text-[10px] uppercase tracking-[0.32em] transition-all duration-300 ${
                    hoveredLink === link.label
                      ? "text-[#D6A75C]"
                      : hoveredLink !== null
                      ? "text-[#F8F1E8]/25"
                      : "text-[#F8F1E8]/60"
                  }`}
                >
                  {link.label}
                </span>

                {/* Gold underline */}
                <span
                  className={`mt-1 h-px bg-[#D6A75C] transition-all duration-300 ${
                    hoveredLink === link.label
                      ? "w-4 opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Divider 2 */}
          <div
            className={`w-full transition-all duration-400 ${
              navExpanded
                ? "my-3 h-px bg-white/10 opacity-100"
                : "my-0 h-0 opacity-0"
            }`}
          />

          {/* CTA */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              navExpanded ? "max-h-[60px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-[#D6A75C]/40 bg-[#D6A75C]/5 px-4 py-2.5 transition-all duration-300 hover:border-[#D6A75C] hover:bg-[#D6A75C]"
            >
              <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.28em] text-[#F8F1E8] transition-colors duration-300 group-hover:text-[#140505]">
                Start
              </span>
              <span className="text-[10px] text-[#D6A75C] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#140505]">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE — top bar */}
      <header className="fixed left-0 top-0 z-50 w-full lg:hidden">
        <div className="mx-auto mt-4 flex max-w-[1700px] items-center justify-between rounded-full border border-white/10 bg-[#140505]/70 px-4 py-3 backdrop-blur-xl sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/logo/likha-logo.png"
              alt="LIKHA"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
            <div>
              <div className="font-editorial text-lg tracking-[0.22em] text-[#F8F1E8]">
                LIKHA
              </div>
              <div className="text-[7px] uppercase tracking-[0.2em] text-[#D6A75C]">
                Web Design & Dev
              </div>
            </div>
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 transition-colors duration-300 hover:border-[#D6A75C]/40"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-4 bg-[#F8F1E8] transition-all duration-300 ${
                menuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-[#F8F1E8] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-[#F8F1E8] transition-all duration-300 ${
                menuOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#140505] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F2020]/20 blur-[120px]" />

        <div className="relative flex flex-1 flex-col justify-center px-8 pb-24 pt-32">
          <p className="mb-12 text-[9px] uppercase tracking-[0.5em] text-[#D6A75C]">
            Navigation
          </p>

          <nav className="flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center justify-between border-b border-white/10 py-6 transition-all duration-500 ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
              >
                <div className="flex items-center gap-5">
                  <span className="text-[10px] tracking-widest text-[#D6A75C]/50">
                    0{i + 1}
                  </span>
                  <span className="text-4xl font-extralight tracking-[-0.02em] text-[#F8F1E8] transition-colors duration-300 group-hover:text-[#D6A75C]">
                    {link.label}
                  </span>
                </div>
                <span className="text-[#F8F1E8]/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D6A75C]">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-16 flex items-end justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-white/40">
                Based in the Philippines
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.4em] text-white/40">
                Available Worldwide
              </p>
            </div>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-[#D6A75C]/40 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-[#D6A75C] transition-all duration-300 hover:bg-[#D6A75C] hover:text-[#140505]"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}