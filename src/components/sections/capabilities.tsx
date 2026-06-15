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
      <div className="mx-auto max-w-7xl px-8 py-32">
        <p className="mb-8 text-xs uppercase tracking-[0.5em] text-[#B89A68]">
          Capabilities
        </p>

        <h2 className="font-editorial mb-16 text-5xl md:text-7xl">
          What We Create.
        </h2>

        <div className="space-y-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href="#contact"
              className="group block rounded-3xl border border-black/10 bg-white/40 p-8 transition-all duration-300 hover:bg-[#181818] hover:text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-editorial text-3xl md:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-neutral-500 group-hover:text-neutral-300">
                    {service.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={38}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}