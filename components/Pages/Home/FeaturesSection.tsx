import Container from "@/components/Layouts/Container";
import {
  TbBolt,
  TbPalette,
  TbAccessible,
  TbCode,
  TbMoonStars,
  TbPackage,
} from "react-icons/tb";

const features = [
  {
    icon: TbBolt,
    title: "Blazing Fast",
    description:
      "Zero-runtime overhead. Components are pure Tailwind — no extra CSS bundle, no layout shift.",
    accent: "text-lime-500",
    bg: "bg-lime-500/10",
  },
  {
    icon: TbPalette,
    title: "Fully Customisable",
    description:
      "Copy the source, own the code. Tweak colours, sizes, and behaviour however you need.",
    accent: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: TbMoonStars,
    title: "Dark Mode Ready",
    description:
      "Every component respects your CSS variables. Light, dark, or system — it just works.",
    accent: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: TbAccessible,
    title: "Accessible by Default",
    description:
      "ARIA roles, keyboard navigation, and focus management built in from day one.",
    accent: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: TbCode,
    title: "Copy & Paste Ready",
    description:
      "No install step per component. Browse the docs, copy the snippet, paste in your project.",
    accent: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: TbPackage,
    title: "Dependency-light",
    description:
      "Only React, Tailwind, and a pinch of react-icons. No opinionated state libraries bloating your bundle.",
    accent: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function FeaturesSection() {
  return (
    <div className="border-y border-(--border)">
      <Container>
        <div className="py-16 space-y-10">
          {/* Heading */}
          <div className="text-center space-y-3">
            <span className="inline-block rounded-full border border-(--border) px-3 py-1 text-xs font-medium text-lime-600">
              Why Natrix UI?
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Everything you need,{" "}
              <span className="text-lime-500">nothing you don&apos;t</span>
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground max-w-xl mx-auto">
              A lean, modern component library built for developers who value
              speed, flexibility, and clean code.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, description, accent, bg }) => (
              <div
                key={title}
                className="group rounded-xl border border-(--border) bg-background p-6 space-y-4 hover:border-lime-400 transition-colors duration-200"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${bg}`}>
                  <Icon size={22} className={accent} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

