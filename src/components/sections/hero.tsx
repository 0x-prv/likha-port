"use client";

import { useEffect, useState, useRef } from "react";

const heroVideos = [
  { title: "Vision", src: "/hero-videos/vision.mp4" },
  { title: "Craft", src: "/hero-videos/craft.mp4" },
  { title: "Work", src: "/hero-videos/work.mp4" },
];

export function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % heroVideos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#140505] text-[#F8F1E8]">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,32,32,0.45),transparent_60%)]" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F2020]/20 blur-[150px]" />

      {/* Cursor light follow */}
      <div
        className="pointer-events-none absolute z-0 h-[300px] w-[300px] rounded-full bg-[#D6A75C]/5 blur-[80px] transition-transform duration-700 ease-out"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
        }}
      />

      <div
        ref={containerRef}
        className="relative mx-auto flex min-h-screen max-w-[1700px] items-center justify-between px-6 py-10 lg:px-12"
      >
        {/* LEFT SIDE */}
        <div className="hidden h-[85vh] flex-col justify-between lg:flex">
          {/* Top — Brand */}
          <div>
            <p className="text-sm font-light uppercase tracking-[0.7em] text-[#F8F1E8]/80">
              LIKHA
            </p>
          </div>

          {/* Middle — Headline */}
          <div>
            <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-[#D6A75C]">
              Boutique Web Studio
            </p>
            <h1 className="max-w-[280px] text-6xl font-extralight leading-[1.05] tracking-[-0.05em]">
              We craft
              <br />
              digital
              <br />
              experiences
              <br />
              that inspire
              <br />
              and connect.
            </h1>
          </div>

          {/* Bottom — Scroll indicator */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/70">
              Scroll to Explore
            </p>
            <div className="h-14 w-px bg-white/70" />
          </div>
        </div>

        {/* CENTER VIDEO */}
        <div className="relative flex flex-1 items-center justify-center px-4">
          <div className="relative h-[75vh] w-full max-w-[760px] overflow-hidden rounded-[30px] border border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            {heroVideos.map((video, index) => (
              <video
                key={video.src}
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                  activeVideo === index
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-[#140505]/70 via-transparent to-black/20" />

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <p className="text-[10px] uppercase tracking-[0.45em] text-white">
                {heroVideos[activeVideo].title}
              </p>
              <div className="mt-4 h-2 w-2 rounded-full bg-white" />
            </div>

            {/* Video progress indicators */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {heroVideos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(i)}
                  className={`h-px transition-all duration-500 ${
                    activeVideo === i
                      ? "w-8 bg-[#D6A75C]"
                      : "w-4 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Info only */}
        <div className="hidden h-[85vh] flex-col items-end justify-end lg:flex">
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
              Based in the Philippines
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-white/50">
              Available Worldwide
            </p>

            <div className="mt-10 flex justify-end gap-8">
              {[
                { label: "Email", href: "#contact" },
                { label: "Work", href: "#work" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative text-[10px] uppercase tracking-[0.35em] text-white/60 transition-colors duration-300 hover:text-[#D6A75C]"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D6A75C] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex w-full flex-col lg:hidden">
          <p className="mb-8 text-center text-sm uppercase tracking-[0-6em]">
            LIKHA
          </p>

          <div className="relative h-[65vh] overflow-hidden rounded-[24px] border border-white/10">
            {heroVideos.map((video, index) => (
              <video
                key={video.src}
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                  activeVideo === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#140505]/80 via-transparent to-black/20" />

            {/* Mobile progress indicators */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {heroVideos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(i)}
                  className={`h-px transition-all duration-500 ${
                    activeVideo === i ? "w-6 bg-[#D6A75C]" : "w-3 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <h1 className="mt-10 text-center text-4xl font-extralight leading-tight">
            We craft digital
            <br />
            experiences
            <br />
            that inspire.
          </h1>
        </div>
      </div>
    </section>
  );
}