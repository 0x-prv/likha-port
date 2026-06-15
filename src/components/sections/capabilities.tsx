import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Website Design",
    description:
      "Elegant interfaces crafted for modern businesses and brands.",
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites built with modern technology.",
  },
  {
    title: "Landing Pages",
    description:
      "Focused digital experiences designed to convert visitors.",
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored platforms and systems built around your business.",
  },
];

export function Capabilities() {
  return (
    <section id="services" className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <p className="mb-6 text-[11px] uppercase tracking-[0.38em] text-[#B89A68] sm:mb-8 sm:text-xs sm:tracking-[0.5em]">
          Capabilities
        </p>

        <h2 className="font-editorial mb-10 text-[clamp(3.25rem,13vw,5rem)] leading-[0.98] md:mb-16 md:text-7xl">
          What We Create.
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href="#contact"
              className="group block rounded-[1.75rem] border border-black/10 bg-white/40 p-6 transition-all duration-300 hover:bg-[#181818] hover:text-white sm:rounded-3xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-editorial text-3xl leading-tight sm:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-500 group-hover:text-neutral-300 sm:mt-4 sm:text-base">
                    {service.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={34}
                  className="mt-1 shrink-0 transition-transform duration-300 group-hover:rotate-45 sm:size-[38px]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
