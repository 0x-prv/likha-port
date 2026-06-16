"use client";

import { useEffect, useRef, useState } from "react";

export function Contact() {
  const [visible, setVisible] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
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

  const infoCards = [
    {
      label: "Email",
      content: (
        <a
          href="mailto:likha@gmail.com"
          className="break-words text-base text-[#F8F1E8] transition-colors duration-300 hover:text-[#D6A75C] sm:text-lg"
        >
          likha@gmail.com
        </a>
      ),
    },
    {
      label: "Services",
      content: (
        <ul className="space-y-1">
          {["Website Design", "Web Development", "Landing Pages", "Custom Web Applications"].map(
            (s) => (
              <li key={s} className="flex items-center gap-3 text-sm text-[#F8F1E8]/50 sm:text-base">
                <span className="h-px w-3 bg-[#D6A75C]/40" />
                {s}
              </li>
            )
          )}
        </ul>
      ),
    },
    {
      label: "Studio",
      content: (
        <div className="space-y-1">
          <p className="text-sm text-[#F8F1E8]/50 sm:text-base">
            Web Design & Development
          </p>
          <p className="text-sm text-[#F8F1E8]/30 sm:text-base">
            Designed to Leave an Impression.
          </p>
          <p className="mt-4 text-[9px] uppercase tracking-[0.4em] text-[#D6A75C]/50">
            Based in the Philippines · Available Worldwide
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#140505] text-[#F8F1E8]"
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F2020]/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-[#D6A75C]/5 blur-[100px]" />

      {/* Top border */}
      <div className="relative mx-auto max-w-[1700px] px-6 lg:px-12">
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-6 py-20 pb-10 lg:px-12 lg:pt-28 lg:pb-12">

        {/* Label */}
        <p
          className={`mb-16 text-[10px] uppercase tracking-[0.5em] text-[#D6A75C] transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Contact
        </p>

        {/* Heading */}
        <h2
          className={`max-w-4xl text-[clamp(3.5rem,10vw,6.5rem)] font-extralight leading-[0.93] tracking-[-0.04em] transition-all duration-1000 delay-100 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Ready to Build
          <br />
          <span className="italic text-[#F8F1E8]/40">Something</span>
          <br />
          Meaningful?
        </h2>

        {/* Body + CTAs row */}
        <div
          className={`mt-16 flex flex-col gap-12 transition-all duration-1000 delay-200 lg:flex-row lg:items-end lg:justify-between ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="max-w-xl text-lg font-extralight leading-8 text-[#F8F1E8]/50 sm:text-xl sm:leading-9">
            Whether you're launching a new business or refreshing an existing
            brand, LIKHA is here to create a thoughtful digital experience for
            you.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {[
              {
                label: "Start a Project",
                href: "mailto:princeroveev@gmail.com",
                primary: true,
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/profile.php?id=61573510591382",
                primary: false,
                external: true,
              },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredBtn(btn.label)}
                onMouseLeave={() => setHoveredBtn(null)}
                className={`group relative flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.28em] transition-all duration-500 sm:text-xs sm:tracking-[0.3em] ${
                  btn.primary
                    ? "bg-[#D6A75C] text-[#140505] hover:bg-[#E4B56B]"
                    : "border border-[#D6A75C]/40 bg-white/5 text-[#F8F1E8] hover:border-[#D6A75C] hover:bg-[#D6A75C] hover:text-[#140505]"
                }`}
              >
                <span>{btn.label}</span>
                <span
                  className={`transition-all duration-300 ${
                    hoveredBtn === btn.label ? "translate-x-0.5" : ""
                  }`}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Info cards grid */}
        <div
          className={`mt-20 grid gap-0 border-t border-white/10 transition-all duration-1000 delay-300 md:grid-cols-3 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {infoCards.map((card, i) => (
            <div
              key={card.label}
              className={`group border-b border-white/10 py-7 transition-all duration-700 md:border-b-0 md:py-8 ${
                i < infoCards.length - 1 ? "md:border-r md:border-white/10 md:pr-10" : ""
              } ${i > 0 ? "md:pl-10" : ""}`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-[#D6A75C]">
                {card.label}
              </p>
              {card.content}
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div
          className={`mt-8 flex items-center justify-between border-t border-white/10 pt-6 transition-all duration-700 delay-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#F8F1E8]/20">
            © {new Date().getFullYear()} LIKHA. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-px w-6 bg-[#D6A75C]/40" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D6A75C]/40">
              LIKHA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}