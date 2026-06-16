"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  { number: "01", label: "Intention" },
  { number: "02", label: "Craft" },
  { number: "03", label: "Connection" },
];

export function Philosophy() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#140505] text-[#F8F1E8]"
    >
      {/* Ambient glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[#8F2020]/15 blur-[120px]" />

      {/* Top border */}
      <div className="relative mx-auto max-w-[1700px] px-6 lg:px-12">
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-6 py-24 lg:px-12 lg:py-36">

        {/* Label */}
        <p
          className={`mb-16 text-[10px] uppercase tracking-[0.5em] text-[#D6A75C] transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Our Philosophy
        </p>

        {/* Main grid */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* LEFT — Heading */}
          <div>
            <h2
              className={`text-[clamp(3.5rem,10vw,6rem)] font-extralight leading-[0.95] tracking-[-0.04em] transition-all duration-1000 delay-100 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Crafting
              <br />
              <span className="italic text-[#F8F1E8]/50">Digital</span>
              <br />
              Experiences.
            </h2>

            {/* Decorative line */}
            <div
              className={`mt-12 h-px bg-gradient-to-r from-[#D6A75C]/60 to-transparent transition-all duration-1000 delay-300 ${
                visible ? "w-24 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>

          {/* RIGHT — Body copy */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-200 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-xl font-extralight leading-relaxed text-[#F8F1E8]/90 sm:text-2xl">
              We believe a website should do more than simply exist.
            </p>

            <p className="mt-8 text-base leading-8 text-[#F8F1E8]/50 sm:text-lg">
              It should communicate trust, elevate a brand, and create
              meaningful connections between a business and its audience.
            </p>

            <p className="mt-6 text-base leading-8 text-[#F8F1E8]/50 sm:text-lg">
              Every project at LIKHA is approached with intention, balancing
              timeless design with modern development.
            </p>

            {/* Pillars */}
            <div className="mt-14 flex flex-col gap-0 border-t border-white/10">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.number}
                  className={`group flex items-center justify-between border-b border-white/10 py-5 transition-all duration-700 ${
                    visible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] tracking-widest text-[#D6A75C]/60">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.35em] text-[#F8F1E8]/70 transition-colors duration-300 group-hover:text-[#D6A75C]">
                      {pillar.label}
                    </span>
                  </div>

                  <span className="translate-x-2 text-[#D6A75C] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}