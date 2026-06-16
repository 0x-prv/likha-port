"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Website Design",
    description:
      "Elegant interfaces crafted for modern businesses and brands.",
    tag: "Design",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites built with modern technology.",
    tag: "Development",
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "Focused digital experiences designed to convert visitors.",
    tag: "Conversion",
  },
  {
    number: "04",
    title: "Custom Web Applications",
    description:
      "Tailored platforms and systems built around your business.",
    tag: "Engineering",
  },
];

export function Capabilities() {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#140505] text-[#F8F1E8]"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-[#8F2020]/15 blur-[120px]" />

      {/* Top border */}
      <div className="relative mx-auto max-w-[1700px] px-6 lg:px-12">
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-6 py-20 pb-10 lg:px-12 lg:pt-28 lg:pb-12">

        {/* Header row */}
        <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className={`mb-6 text-[10px] uppercase tracking-[0.5em] text-[#D6A75C] transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Capabilities
            </p>

            <h2
              className={`text-[clamp(3.5rem,10vw,6rem)] font-extralight leading-[0.95] tracking-[-0.04em] transition-all duration-1000 delay-100 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              What We
              <br />
              <span className="italic text-[#F8F1E8]/50">Create.</span>
            </h2>
          </div>

          <p
            className={`max-w-xs text-[11px] uppercase tracking-[0.3em] text-[#F8F1E8]/40 transition-all duration-700 delay-200 lg:text-right ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            End-to-end digital
            <br />
            solutions for modern brands.
          </p>
        </div>

        {/* Services list */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href="#contact"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative border-t border-white/10 transition-all duration-700 last:border-b last:border-white/10 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Hover fill */}
              <div
                className={`absolute inset-0 bg-[#8F2020]/10 transition-all duration-500 ${
                  hoveredIndex === i ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative flex items-center justify-between gap-6 px-0 py-8 lg:py-10">

                {/* Left — number + content */}
                <div className="flex items-start gap-6 lg:gap-10">
                  {/* Number */}
                  <span
                    className={`mt-1 hidden text-[10px] tracking-widest transition-colors duration-300 lg:block ${
                      hoveredIndex === i
                        ? "text-[#D6A75C]"
                        : "text-[#F8F1E8]/20"
                    }`}
                  >
                    {service.number}
                  </span>

                  <div>
                    <div className="flex items-center gap-4">
                      <h3
                        className={`text-2xl font-extralight tracking-[-0.02em] transition-colors duration-300 sm:text-3xl lg:text-4xl ${
                          hoveredIndex === i
                            ? "text-[#F8F1E8]"
                            : hoveredIndex !== null
                            ? "text-[#F8F1E8]/40"
                            : "text-[#F8F1E8]"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Tag pill */}
                      <span
                        className={`hidden rounded-full border border-[#D6A75C]/30 px-3 py-1 text-[9px] uppercase tracking-widest text-[#D6A75C]/60 transition-all duration-300 lg:inline-block ${
                          hoveredIndex === i
                            ? "border-[#D6A75C]/60 text-[#D6A75C] opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        {service.tag}
                      </span>
                    </div>

                    <p
                      className={`mt-2 max-w-lg text-sm leading-7 transition-all duration-300 sm:text-base ${
                        hoveredIndex === i
                          ? "text-[#F8F1E8]/60"
                          : "text-[#F8F1E8]/30"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Right — arrow */}
                <div
                  className={`flex shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                    hoveredIndex === i
                      ? "border-[#D6A75C]/50 bg-[#D6A75C]/10"
                      : "border-white/10 bg-transparent"
                  } h-10 w-10 lg:h-12 lg:w-12`}
                >
                  <span
                    className={`text-sm transition-all duration-300 ${
                      hoveredIndex === i
                        ? "rotate-45 text-[#D6A75C]"
                        : "rotate-0 text-[#F8F1E8]/40"
                    } inline-block`}
                  >
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 flex items-center gap-4 transition-all duration-700 delay-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-[#D6A75C]/50" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#F8F1E8]/40">
            All projects include post-launch support
          </p>
        </div>
      </div>
    </section>
  );
}