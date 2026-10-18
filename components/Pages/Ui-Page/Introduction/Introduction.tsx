import Container from "@/components/Layouts/Container";
import {
  BiCodeAlt,
  BiPalette,
  BiLayer,
  BiRocket,
  BiAccessibility,
  BiCube,
  BiWrench,
  BiHeart,
  BiCheckShield,
  BiDevices,
} from "react-icons/bi";

const features = [
  {
    icon: BiCube,
    title: "Reusable Components",
    description:
      "Build interfaces faster with reusable, modular components designed for consistency and maintainability.",
  },
  {
    icon: BiPalette,
    title: "Beautiful by Design",
    description:
      "Create visually appealing interfaces with modern layouts, thoughtful spacing, and customizable styles.",
  },
  {
    icon: BiRocket,
    title: "Developer Experience",
    description:
      "Enjoy a straightforward workflow with predictable APIs, clean examples, and developer-friendly documentation.",
  },
  {
    icon: BiDevices,
    title: "Responsive by Default",
    description:
      "Build interfaces that adapt naturally to mobile, tablet, and desktop screen sizes.",
  },
  {
    icon: BiAccessibility,
    title: "Accessibility in Mind",
    description:
      "Follow accessibility best practices to make interfaces more usable for a wider range of people.",
  },
  {
    icon: BiWrench,
    title: "Flexible Customization",
    description:
      "Adapt components to your brand, design system, and project requirements without unnecessary complexity.",
  },
];

const principles = [
  {
    number: "01",
    title: "Simplicity First",
    description:
      "Keep components easy to understand, configure, and integrate into existing projects.",
  },
  {
    number: "02",
    title: "Consistency Matters",
    description:
      "Maintain consistent visual patterns, spacing, interactions, and behavior across your application.",
  },
  {
    number: "03",
    title: "Built for Reuse",
    description:
      "Encourage modular architecture so developers can compose, extend, and reuse UI elements.",
  },
  {
    number: "04",
    title: "Freedom to Create",
    description:
      "Provide a flexible foundation without limiting your creativity or forcing a rigid design system.",
  },
];

const audiences = [
  "Frontend developers building React applications",
  "Next.js developers creating modern web experiences",
  "Designers and developers working with shared design systems",
  "Teams building dashboards, admin panels, and SaaS products",
  "Developers who want to prototype ideas quickly",
  "Students learning component-based UI development",
];

export default function IntroductionPage() {
  return (
    <section className="">
      <div className="border-b border-(--border)">
        <Container>
          {/* Hero / Introduction */}
          <div className="max-w-4xl mt-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-600 dark:text-lime-400">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
              Documentation / Introduction
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="bg-linear-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                Natrix UI
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              A modern UI component library designed to help developers build
              beautiful, responsive, and consistent web interfaces with less
              effort and more creative freedom.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              From everyday interface elements to interactive components and
              polished user experiences, Natrix UI provides a reusable
              foundation for turning ideas into production-ready interfaces.
              Spend less time repeating patterns and more time building
              meaningful products.
            </p>
          </div>

          {/* Quick Overview */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: BiLayer,
                title: "Modular",
                text: "Use only the components your project needs.",
              },
              {
                icon: BiCodeAlt,
                title: "Developer-focused",
                text: "Readable code and predictable component APIs.",
              },
              {
                icon: BiRocket,
                title: "Flexible",
                text: "Adapt the UI to your own creative direction.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-(--border) bg-white p-5 transition-colors dark:border-white/10 dark:bg-white/3"
                >
                  <Icon className="mb-4 text-2xl text-lime-600 dark:text-lime-400" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* What is Natrix UI? */}
          <div className="mt-16 mb-3 max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What is Natrix UI?
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              <p>
                Natrix UI is a reusable component library that helps developers
                create and maintain user interfaces through a collection of
                composable UI building blocks. Instead of rebuilding common
                elements for every project, you can start with reusable
                components and customize them to suit your application.
              </p>

              <p>
                A good component library is more than a collection of buttons,
                cards, inputs, and modals. It establishes a consistent approach
                to design, interaction, composition, and maintainability. Natrix
                UI aims to make those building blocks easier to discover,
                understand, and use.
              </p>

              <p>
                Whether you're starting a new application or improving an
                existing codebase, the goal is to provide a practical foundation
                that helps you move from an idea to a polished interface
                efficiently.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Features */}
      <div className="my-3 border-y border-(--border)">
        <Container>
          <div className="my-3">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-600 dark:text-lime-400">
                Features
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Everything you need to build better interfaces
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                A component-first approach that combines flexibility, consistent
                design, and a smooth development workflow.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group rounded-2xl border border-(--border) p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime-500/40 hover:shadow-lg hover:shadow-lime-500/5 dark:border-white/10 dark:hover:border-lime-500/30"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-500/10 text-2xl text-lime-600 transition-colors group-hover:bg-lime-500/15 dark:text-lime-400">
                      <Icon />
                    </div>

                    <h3 className="text-base font-semibold">{feature.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {/* Philosophy */}
      <div className="border-y border-(--border)">
        <Container>
          <div className="my-3">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-600 dark:text-lime-400">
                Our Philosophy
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Thoughtful components. Better experiences.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                We believe great UI should be intuitive for users, practical for
                developers, and flexible enough to evolve with a product.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="flex gap-4 rounded-2xl border border-(--border) p-5 dark:border-white/10 sm:gap-6 sm:p-6"
                >
                  <span className="pt-1 font-mono text-sm font-bold text-lime-600 dark:text-lime-400">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="font-semibold">{principle.title}</h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Developer Experience */}
      <div className="border-y border-(--border) my-3">
        <Container>
          <div className="my-3 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Designed for your workflow
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                Components should fit naturally into your development process.
                Natrix UI focuses on reusable patterns, understandable examples,
                and customization that helps developers maintain control over
                their code.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Composable components for different interface needs",
                  "Consistent styling and interaction patterns",
                  "Examples that help explain component usage",
                  "A structure designed to support maintainable code",
                  "Room to adapt components to your own design system",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <BiCheckShield className="mt-0.5 shrink-0 text-xl text-lime-600 dark:text-lime-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-lime-500/20 bg-linear-to-br from-lime-500/8 via-transparent to-emerald-500/8 p-6 sm:p-8">
              <BiHeart className="text-3xl text-lime-600 dark:text-lime-400" />

              <h3 className="mt-5 text-xl font-bold">
                Built with developers in mind
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                Good developer experience means spending less time figuring out
                how things work and more time solving real problems. Clear
                examples, sensible composition, and flexible styling are
                important parts of that goal.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                Natrix UI is intended to be a helpful starting point, not a
                limitation. Your application, your design decisions, and your
                development workflow remain yours.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-y border-(--border)">
        <Container>
          {/* Who is it for? */}
          <div className="mt-3">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Who is Natrix UI for?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              Natrix UI is intended for developers and teams who want to create
              consistent interfaces without starting every component from
              scratch.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-start gap-3 rounded-xl border border-(--border) p-4 dark:border-white/10"
                >
                  <BiCheckShield className="mt-0.5 shrink-0 text-xl text-lime-600 dark:text-lime-400" />

                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {audience}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div className="mt-16 mb-3 rounded-3xl border border-(--border) p-6 dark:border-white/10 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-600 dark:text-lime-400">
              Get Started
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to explore Natrix UI?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              Start by exploring the documentation, understanding the available
              components, and learning how to customize them for your project.
              Follow the installation instructions before integrating components
              into your application.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-lg bg-lime-500/10 px-4 py-2 text-sm font-medium text-lime-700 dark:text-lime-400">
                Installation
              </span>

              <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-white/5 dark:text-gray-300">
                Components
              </span>

              <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-white/5 dark:text-gray-300">
                Customization
              </span>
            </div>
          </div>
        </Container>
      </div>
      {/* Footer Note */}
      <div className="my-3 border-t border-gray-200 dark:border-white/10">
        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400 max-w-339 mx-auto ">
          Thank you for exploring Natrix UI. We hope it helps you build
          interfaces that are more consistent, maintainable, and enjoyable to
          create.
        </p>
      </div>
    </section>
  );
}
