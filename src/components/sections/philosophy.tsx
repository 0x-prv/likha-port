export function Philosophy() {
  return (
    <section id="about" className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.38em] text-[#B89A68] sm:mb-8 sm:text-xs sm:tracking-[0.5em]">
          Our Philosophy
        </p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-editorial text-[clamp(3.25rem,13vw,5rem)] leading-[0.98] md:text-7xl md:leading-tight">
              Crafting
              <br />
              Digital
              <br />
              Experiences.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-neutral-600 sm:text-xl sm:leading-10">
              We believe a website should do more than simply exist.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-600 sm:mt-8 sm:text-lg sm:leading-9">
              It should communicate trust, elevate a brand, and create
              meaningful connections between a business and its audience.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-600 sm:mt-8 sm:text-lg sm:leading-9">
              Every project at LIKHA is approached with intention, balancing
              timeless design with modern development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
