"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, audience, and the purpose of your website.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft a clean, elegant, and user-focused interface that reflects your brand.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We turn the design into a fast, responsive, and modern website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We prepare your website for deployment and help you go live with confidence.",
  },
];

export function Process() {
  const [visible, setVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
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
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#140505] text-[#F8F1E8]"
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F2020]/10 blur-[140px]" />

      {/* Top border */}
      <div className="relative mx-auto max-w-[1700px] px-6 lg:px-12">
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-6 py-24 lg:px-12 lg:py-36">

        {/* Header */}
        <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p
              className={`mb-10 text-[10px] uppercase tracking-[0.5em] text-[#D6A75C] transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Our Process
            </p>

            <h2
              className={`text-[clamp(3.5rem,10vw,6rem)] font-extralight leading-[0.95] tracking-[-0.04em] transition-all duration-1000 delay-100 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              From idea
              <br />
              <span className="italic text-[#F8F1E8]/50">to launch.</span>
            </h2>
          </div>

          <p
            className={`max-w-xl self-end text-base font-extralight leading-8 text-[#F8F1E8]/50 transition-all duration-1000 delay-200 sm:text-lg sm:leading-9 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Every website is built through a clear and thoughtful process,
            making sure your brand looks refined, works smoothly, and feels
            intentional.
          </p>
        </div>

        {/* Steps — horizontal row with dividers */}
        <div className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <article
              key={step.number}
              onMouseEnter={() => setHoveredStep(step.number)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`group relative border-b border-white/10 py-10 transition-all duration-700 lg:border-b-0 lg:py-12 ${
                i < steps.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-8" : ""
              } ${i > 0 ? "lg:pl-8" : ""} ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Hover bg */}
              <div
                className={`absolute inset-0 bg-[#8F2020]/8 transition-all duration-500 ${
                  hoveredStep === step.number ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative">
                {/* Number */}
                <p
                  className={`mb-10 font-extralight text-5xl transition-colors duration-300 sm:text-6xl ${
                    hoveredStep === step.number
                      ? "text-[#D6A75C]"
                      : "text-[#F8F1E8]/15"
                  }`}
                >
                  {step.number}
                </p>

                {/* Title */}
                <h3
                  className={`text-2xl font-extralight tracking-[-0.02em] transition-colors duration-300 sm:text-3xl ${
                    hoveredStep === step.number
                      ? "text-[#F8F1E8]"
                      : hoveredStep !== null
                      ? "text-[#F8F1E8]/30"
                      : "text-[#F8F1E8]"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Gold line */}
                <div
                  className={`my-5 h-px bg-[#D6A75C] transition-all duration-500 ${
                    hoveredStep === step.number ? "w-8 opacity-100" : "w-0 opacity-0"
                  }`}
                />

                {/* Description */}
                <p
                  className={`text-sm leading-7 transition-colors duration-300 sm:text-base ${
                    hoveredStep === step.number
                      ? "text-[#F8F1E8]/60"
                      : "text-[#F8F1E8]/30"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Connector line */}
        <div
          className={`mt-16 flex items-center gap-4 transition-all duration-700 delay-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-[#D6A75C]/40" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#F8F1E8]/30">
            Typically 2–4 weeks from start to launch
          </p>
        </div>
      </div>
    </section>
  );
}