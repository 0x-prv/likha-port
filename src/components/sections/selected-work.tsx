import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "LIKHA Marketplace",
    category: "Creator Campaign Platform",
    year: "2026",
    description:
      "A creator marketplace designed for brands to launch campaigns and collaborate with modern creators.",
    href: "https://likha-dun.vercel.app/",
  },
  {
    title: "VastMint",
    category: "NFT Marketplace",
    year: "2026",
    description:
      "A Web3 marketplace and launchpad experience built with a premium dark interface.",
    href: "https://vastmint.site/",
  },
  {
    title: "Solfolio",
    category: "AI Portfolio Dashboard",
    year: "2026",
    description:
      "An AI-powered portfolio dashboard for tracking Solana assets and insights.",
    href: "https://solfolio-psi.vercel.app/",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.5em] text-[#B89A68]">
              Selected Work
            </p>

            <h2 className="font-editorial text-5xl leading-tight md:text-7xl">
              Digital
              <br />
              Experiences.
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-neutral-600">
            A curated collection of platforms, websites, and digital products
            crafted with intention.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <article className="group grid gap-8 rounded-[2rem] border border-black/10 bg-white/35 p-8 transition-all duration-300 hover:bg-[#181818] hover:text-white md:grid-cols-[1fr_1.5fr_auto]">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#B89A68]">
                    {project.year}
                  </p>

                  <h3 className="font-editorial text-4xl md:text-5xl">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500 group-hover:text-neutral-300">
                    {project.category}
                  </p>

                  <p className="max-w-xl leading-8 text-neutral-600 group-hover:text-neutral-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-start justify-end">
                  <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}