"use client";

import { useEffect, useState } from "react";

const heroVideos = [
  {
    title: "Vision",
    src: "/hero-videos/vision.mp4",
  },
  {
    title: "Craft",
    src: "/hero-videos/craft.mp4",
  },
  {
    title: "Work",
    src: "/hero-videos/work.mp4",
  },
];

export function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((current) => (current + 1) % heroVideos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-12 py-14 sm:py-16 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-0">
        <div>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.38em] text-[#B89A68] sm:mb-8 sm:text-xs sm:tracking-[0.55em]">
            Boutique Web Studio
          </p>

          <h1 className="font-editorial max-w-3xl text-[clamp(4.25rem,18vw,7rem)] font-semibold leading-[0.88] tracking-tight text-[#181818] md:text-8xl lg:text-9xl">
            Designed
            <br />
            to Leave
            <br />
            an Impression.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 sm:mt-8 sm:text-lg sm:leading-8">
            LIKHA creates thoughtful websites for businesses, startups, and
            modern brands seeking a refined digital presence.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="rounded-full bg-black px-7 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#B89A68] sm:px-9 sm:text-xs sm:tracking-[0.3em]"
            >
              Start Your Project
            </a>

            <a
              href="#work"
              className="rounded-full border border-black px-7 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-black hover:text-white sm:px-9 sm:text-xs sm:tracking-[0.3em]"
            >
              Explore Work
            </a>
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div className="absolute h-[min(42vw,520px)] w-[min(42vw,520px)] rounded-full bg-[#B89A68]/10 blur-3xl" />

          <div className="relative grid h-[min(42vw,520px)] w-[min(42vw,520px)] grid-cols-3 gap-4">
            {heroVideos.map((video, index) => (
              <div
                key={video.src}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white/30 shadow-sm transition-all duration-700 ${
                  activeVideo === index
                    ? "scale-105 border-[#B89A68]/70 opacity-100 shadow-2xl"
                    : "scale-95 border-black/10 opacity-35"
                }`}
              >
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className={`h-full w-full object-cover transition duration-700 ${
                    activeVideo === index ? "scale-105" : "scale-100"
                  }`}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />

                <div className="pointer-events-none absolute bottom-4 left-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/90">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}