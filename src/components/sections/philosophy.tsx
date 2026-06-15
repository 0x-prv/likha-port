export function Philosophy() {
  return (
<section id="about" className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-8 py-32">

        <p className="mb-8 text-xs font-medium uppercase tracking-[0.5em] text-[#B89A68]">
          Our Philosophy
        </p>

        <div className="grid gap-16 lg:grid-cols-2">

          <div>
            <h2 className="font-editorial text-5xl leading-tight md:text-7xl">
              Crafting
              <br />
              Digital
              <br />
              Experiences.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xl leading-10 text-neutral-600">
              We believe a website should do more than simply
              exist.
            </p>

            <p className="mt-8 text-lg leading-9 text-neutral-600">
              It should communicate trust, elevate a brand,
              and create meaningful connections between a
              business and its audience.
            </p>

            <p className="mt-8 text-lg leading-9 text-neutral-600">
              Every project at LIKHA is approached with
              intention, balancing timeless design with modern
              development.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}