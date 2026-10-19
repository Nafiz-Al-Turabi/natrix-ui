import Container from "@/components/Layouts/Container";
import { TbDownload, TbCopy, TbRocket } from "react-icons/tb";

const steps = [
  {
    number: "01",
    icon: TbDownload,
    title: "Install Tailwind",
    description:
      "Natrix UI is built on top of Tailwind CSS. Make sure your Next.js project has Tailwind configured.",
    code: "npx create-next-app@latest --tailwind",
    accent: "border-lime-400 text-lime-500",
    iconBg: "bg-lime-500/10",
  },
  {
    number: "02",
    icon: TbCopy,
    title: "Copy the Component",
    description:
      "Visit any component page, grab the source code from the Code tab, and paste it anywhere in your project.",
    code: "components/ui/Modal.tsx",
    accent: "border-yellow-400 text-yellow-500",
    iconBg: "bg-yellow-500/10",
  },
  {
    number: "03",
    icon: TbRocket,
    title: "Use It Immediately",
    description:
      "Import and render. No config, no theme providers, no magic wrappers — just your own code.",
    code: `<Modal isOpen={open} onClose={() => setOpen(false)} />`,
    accent: "border-indigo-400 text-indigo-500",
    iconBg: "bg-indigo-500/10",
  },
];

export default function HowItWorksSection() {
  return (
    <div className="border-y border-(--border) my-3">
      <Container>
        <div className="py-16 space-y-12">
          {/* Heading */}
          <div className="text-center space-y-3">
            <span className="inline-block rounded-full border border-(--border) px-3 py-1 text-xs font-medium text-lime-600">
              How it works
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Up and running in{" "}
              <span className="text-lime-500">3 simple steps</span>
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground max-w-xl mx-auto">
              No CLI, no npm package per component. Just copy, paste, and ship.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map(({ number, icon: Icon, title, description, code, accent, iconBg }) => (
              <div key={number} className="flex flex-col gap-4">
                {/* Step header */}
                <div className="flex items-center gap-3">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl border ${accent.split(" ")[0]} ${iconBg} shrink-0`}>
                    <Icon size={20} className={accent.split(" ")[1]} />
                  </div>
                  <span className="text-2xl font-black text-muted-foreground/30 select-none">
                    {number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Code snippet */}
                <div className="rounded-lg border border-(--border) bg-background px-4 py-3">
                  <code className="text-[0.6rem] font-mono text-lime-600 break-all">
                    {code}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

