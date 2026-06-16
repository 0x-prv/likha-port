"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "LIKHA Marketplace",
    category: "Creator Campaign Platform",
    year: "2026",
    description:
      "A creator marketplace designed for brands to launch campaigns and collaborate with modern creators.",
    href: "https://likha-dun.vercel.app/",
  },
  {
    title: "VastMint",
    category: "NFT Marketplace",
    year: "2026",
    description:
      "A Web3 marketplace and launchpad experience built with a premium dark interface.",
    href: "https://vastmint.site/",
  },
  {
    title: "Solfolio",
    category: "AI Portfolio Dashboard",
    year: "2026",
    description:
      "An AI-powered portfolio dashboard for tracking Solana assets and insights.",
    href: "https://solfolio-psi.vercel.app/",
  },
];

export function SelectedWork() {
  const [visible, setVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#140505] text-[#F8F1E8]"
    >
      {/* Ambient glow */}
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-[#8F2020]/15 blur-[120px]" />

      {/* Top border */}
      <div className="relative mx-auto max-w-[1700px] px-6 lg:px-12">
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-6 py-24 lg:px-12 lg:py-36">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-10 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <p
              className={`mb-10 text-[10px] uppercase tracking-[0.5em] text-[#D6A75C] transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Selected Work
            </p>

            <h2
              className={`text-[clamp(3.5rem,10vw,6rem)] font-extralight leading-[0.95] tracking-[-0.04em] transition-all duration-1000 delay-100 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Digital
              <br />
              <span className="italic text-[#F8F1E8]/50">Experiences.</span>
            </h2>
          </div>

          <p
            className={`max-w-sm text-base font-extralight leading-8 text-[#F8F1E8]/40 transition-all duration-1000 delay-200 lg:text-right ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            A curated collection of platforms, websites, and digital products
            crafted with intention.
          </p>
        </div>

        {/* Projects list */}
        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group border-b border-white/10 transition-all duration-700 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Hover bg */}
              <div
                className={`relative transition-all duration-500 ${
                  hoveredProject === project.title
                    ? "bg-[#8F2020]/8"
                    : "bg-transparent"
                }`}
              >
                <article className="grid gap-6 py-8 lg:grid-cols-[0.4fr_0.9fr_1fr_auto] lg:items-center lg:gap-10 lg:py-10">

                  {/* Year */}
                  <p
                    className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                      hoveredProject === project.title
                        ? "text-[#D6A75C]"
                        : "text-[#F8F1E8]/20"
                    }`}
                  >
                    {project.year}
                  </p>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-extralight tracking-[-0.02em] transition-all duration-300 sm:text-3xl lg:text-4xl ${
                      hoveredProject === project.title
                        ? "text-[#F8F1E8]"
                        : hoveredProject !== null
                        ? "text-[#F8F1E8]/25"
                        : "text-[#F8F1E8]"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Category + description */}
                  <div>
                    <p
                      className={`mb-2 text-[10px] uppercase tracking-[0.35em] transition-colors duration-300 ${
                        hoveredProject === project.title
                          ? "text-[#D6A75C]/80"
                          : "text-[#F8F1E8]/30"
                      }`}
                    >
                      {project.category}
                    </p>
                    <p
                      className={`text-sm leading-7 transition-colors duration-300 sm:text-base ${
                        hoveredProject === project.title
                          ? "text-[#F8F1E8]/60"
                          : "text-[#F8F1E8]/25"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`flex items-center justify-end transition-all duration-300 ${
                      hoveredProject === project.title
                        ? "translate-x-0 opacity-100"
                        : "translate-x-2 opacity-20"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 lg:h-12 lg:w-12 ${
                        hoveredProject === project.title
                          ? "border-[#D6A75C]/50 bg-[#D6A75C]/10 text-[#D6A75C]"
                          : "border-white/10 text-[#F8F1E8]"
                      }`}
                    >
                      <span
                        className={`text-sm transition-transform duration-300 inline-block ${
                          hoveredProject === project.title ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-12 flex items-center gap-4 transition-all duration-700 delay-600 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-[#D6A75C]/40" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#F8F1E8]/25">
            More projects coming soon
          </p>
        </div>
      </div>
    </section>
  );
}