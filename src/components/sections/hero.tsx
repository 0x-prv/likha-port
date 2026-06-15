import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-8 pt-36">
      <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.55em] text-[#B89A68]">
            Boutique Web Studio
          </p>

          <h1 className="font-editorial max-w-3xl text-7xl font-semibold leading-[0.9] tracking-tight text-[#181818] md:text-8xl lg:text-9xl">
            Designed
            <br />
            to Leave
            <br />
            an Impression.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
            LIKHA creates thoughtful websites for businesses, startups, and
            modern brands seeking a refined digital presence.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-black px-9 py-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#B89A68]"
            >
              Start Your Project
            </a>

            <a
              href="#work"
              className="rounded-full border border-black px-9 py-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-black hover:text-white"
            >
              Explore Work
            </a>
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div className="absolute h-[520px] w-[520px] rounded-full bg-[#B89A68]/10 blur-3xl" />

          <Image
            src="/logo/likha-logo.png"
            alt="LIKHA emblem"
            width={620}
            height={620}
            className="relative h-[520px] w-[520px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}