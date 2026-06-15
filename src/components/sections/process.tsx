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
  return (
    <section id="process" className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mb-10 grid gap-8 md:mb-16 lg:mb-20 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.38em] text-[#B89A68] sm:mb-8 sm:text-xs sm:tracking-[0.5em]">
              Our Process
            </p>

            <h2 className="font-editorial text-[clamp(3.25rem,13vw,5rem)] leading-[0.98] md:text-7xl md:leading-tight">
              From idea
              <br />
              to launch.
            </h2>
          </div>

          <p className="max-w-xl self-end text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            Every website is built through a clear and thoughtful process,
            making sure your brand looks refined, works smoothly, and feels
            intentional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex min-h-[260px] flex-col rounded-[1.75rem] border border-black/10 bg-white/35 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#181818] hover:text-white sm:min-h-[300px] sm:rounded-[2rem] sm:p-8 lg:min-h-[320px]"
            >
              <p className="mb-10 font-editorial text-5xl text-[#B89A68] sm:mb-16 sm:text-6xl">
                {step.number}
              </p>

              <h3 className="font-editorial text-3xl sm:text-4xl">{step.title}</h3>

              <p className="mt-5 text-sm leading-7 text-neutral-600 group-hover:text-neutral-300 sm:mt-6">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
