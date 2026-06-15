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
      <div className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.5em] text-[#B89A68]">
              Our Process
            </p>

            <h2 className="font-editorial text-5xl leading-tight md:text-7xl">
              From idea
              <br />
              to launch.
            </h2>
          </div>

          <p className="max-w-xl self-end text-lg leading-8 text-neutral-600">
            Every website is built through a clear and thoughtful process,
            making sure your brand looks refined, works smoothly, and feels
            intentional.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="min-h-[320px] rounded-[2rem] border border-black/10 bg-white/35 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#181818] hover:text-white"
            >
              <p className="mb-16 font-editorial text-6xl text-[#B89A68]">
                {step.number}
              </p>

              <h3 className="font-editorial text-4xl">{step.title}</h3>

              <p className="mt-6 text-sm leading-7 text-neutral-600 group-hover:text-neutral-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}