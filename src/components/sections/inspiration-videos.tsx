"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  {
    title: "Luxury Editorial",
    tag: "01",
    src: "/inspo-videos/luxury-landing.mp4",
  },
  {
    title: "Premium Corporate",
    tag: "02",
    src: "/inspo-videos/matcha-inspo.mp4",
  },
  {
    title: "Creative Digital Agency",
    tag: "03",
    src: "/inspo-videos/minimal-agency.mp4",
  },
];

export function InspirationVideos() {
  const [visible, setVisible] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
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
      ref={sectionRef}
      className="relative overflow-hidden bg-[#140505] text-[#F8F1E8]"
    >
      {/* Ambient glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-[#8F2020]/15 blur-[120px]" />

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
              Creative Direction
            </p>

            <h2
              className={`text-[clamp(3.5rem,10vw,6rem)] font-extralight leading-[0.95] tracking-[-0.04em] transition-all duration-1000 delay-100 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Visual
              <br />
              <span className="italic text-[#F8F1E8]/50">Inspiration.</span>
            </h2>
          </div>

          <p
            className={`max-w-sm text-base font-extralight leading-8 text-[#F8F1E8]/40 transition-all duration-1000 delay-200 lg:text-right ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            A curated collection of visual references that inspire the style,
            interaction, and creative direction behind our projects.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {videos.map((video, i) => (
            <div
              key={video.title}
              onMouseEnter={() => setHoveredVideo(video.title)}
              onMouseLeave={() => setHoveredVideo(null)}
              className={`group overflow-hidden rounded-[1.75rem] border transition-all duration-700 sm:rounded-[2rem] ${
                hoveredVideo === video.title
                  ? "border-[#D6A75C]/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  : hoveredVideo !== null
                  ? "border-white/5 opacity-50"
                  : "border-white/10"
              } ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              {/* Video */}
              <div className="relative overflow-hidden bg-black">
                <video
                  className={`aspect-[4/5] w-full object-cover transition-all duration-700 sm:aspect-video md:aspect-[4/5] xl:aspect-video ${
                    hoveredVideo === video.title ? "scale-105" : "scale-100"
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#140505]/80 via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredVideo === video.title ? "opacity-100" : "opacity-60"
                  }`}
                />

                {/* Number tag */}
                <div className="absolute left-5 top-5">
                  <span
                    className={`text-[10px] tracking-widest transition-colors duration-300 ${
                      hoveredVideo === video.title
                        ? "text-[#D6A75C]"
                        : "text-white/30"
                    }`}
                  >
                    {video.tag}
                  </span>
                </div>

                {/* Title overlay on hover */}
                <div
                  className={`absolute bottom-5 left-5 right-5 transition-all duration-500 ${
                    hoveredVideo === video.title
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#D6A75C]/80">
                    Creative Direction
                  </p>
                  <h3 className="mt-1 text-lg font-extralight tracking-[-0.01em] text-[#F8F1E8]">
                    {video.title}
                  </h3>
                </div>
              </div>

              {/* Card footer */}
              <div
                className={`flex items-center justify-between px-5 py-4 transition-all duration-300 sm:px-6 ${
                  hoveredVideo === video.title
                    ? "bg-[#1a0808]"
                    : "bg-[#0f0303]"
                }`}
              >
                <h3
                  className={`text-sm font-extralight uppercase tracking-[0.25em] transition-colors duration-300 ${
                    hoveredVideo === video.title
                      ? "text-[#F8F1E8]"
                      : "text-[#F8F1E8]/40"
                  }`}
                >
                  {video.title}
                </h3>

                <span
                  className={`text-xs transition-all duration-300 ${
                    hoveredVideo === video.title
                      ? "translate-x-0 text-[#D6A75C] opacity-100"
                      : "translate-x-1 opacity-0"
                  }`}
                >
                  ↗
                </span>
              </div>
            </div>
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
            References updated regularly
          </p>
        </div>
      </div>
    </section>
  );
}