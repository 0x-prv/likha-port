import { Code2, Diamond, Circle, Sparkles } from "lucide-react";

const principles = [
  {
    icon: Circle,
    title: "Thoughtful Design",
    description:
      "Designs that are intentional, elegant, and human-centered.",
  },
  {
    icon: Code2,
    title: "Modern Development",
    description:
      "Built with modern technologies for speed, security, and scale.",
  },
  {
    icon: Diamond,
    title: "Timeless Experience",
    description:
      "Creating digital experiences that stand the test of time.",
  },
  {
    icon: Sparkles,
    title: "Built With Purpose",
    description:
      "Every project is crafted to elevate brands and create impact.",
  },
];

export function Principles() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-20 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title}>
              <Icon
                size={34}
                strokeWidth={1.2}
                className="mb-8 text-[#B89A68]"
              />

              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.35em]">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-neutral-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}