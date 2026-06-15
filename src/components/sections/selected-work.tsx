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
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mb-10 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.38em] text-[#B89A68] sm:mb-8 sm:text-xs sm:tracking-[0.5em]">
              Selected Work
            </p>

            <h2 className="font-editorial text-[clamp(3.25rem,13vw,5rem)] leading-[0.98] md:text-7xl md:leading-tight">
              Digital
              <br />
              Experiences.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            A curated collection of platforms, websites, and digital products
            crafted with intention.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <article className="group grid gap-6 rounded-[1.75rem] border border-black/10 bg-white/35 p-6 transition-all duration-300 hover:bg-[#181818] hover:text-white sm:rounded-[2rem] sm:p-8 md:grid-cols-[0.9fr_1.35fr_auto] md:gap-8">
                <div>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#B89A68] sm:text-xs sm:tracking-[0.35em]">
                    {project.year}
                  </p>

                  <h3 className="font-editorial text-3xl leading-tight sm:text-4xl md:text-5xl">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.22em] text-neutral-500 group-hover:text-neutral-300 sm:mb-4 sm:text-sm sm:tracking-[0.25em]">
                    {project.category}
                  </p>

                  <p className="max-w-xl text-sm leading-7 text-neutral-600 group-hover:text-neutral-300 sm:text-base sm:leading-8">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-start justify-start md:justify-end">
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
