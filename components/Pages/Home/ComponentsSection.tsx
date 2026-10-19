import Container from "@/components/Layouts/Container";
import Link from "next/link";
import {
  TbMessage2,
  TbAlertCircle,
  TbToggleRight,
  TbTable,
  TbForms,
  TbArrowRight,
} from "react-icons/tb";
import { FiBox } from "react-icons/fi";

const components = [
  {
    icon: TbMessage2,
    name: "Tooltips",
    description: "Context hints on hover — top, bottom, left, right.",
    tag: "New",
    tagColor: "bg-lime-500/15 text-lime-600",
    href: "/ui/tooltips",
    accent: "group-hover:text-lime-500",
  },
  {
    icon: TbAlertCircle,
    name: "Modals",
    description: "Animated dialogs with 5 sizes, custom header & footer.",
    tag: "New",
    tagColor: "bg-lime-500/15 text-lime-600",
    href: "/ui/modals",
    accent: "group-hover:text-lime-500",
  },
  {
    icon: TbToggleRight,
    name: "Toggle",
    description: "Accessible on/off switches with smooth animation.",
    tag: "Soon",
    tagColor: "bg-yellow-500/15 text-yellow-600",
    href: "#",
    accent: "group-hover:text-yellow-500",
  },
  {
    icon: TbTable,
    name: "Table",
    description: "Sortable, paginated data tables with sticky headers.",
    tag: "Soon",
    tagColor: "bg-yellow-500/15 text-yellow-600",
    href: "#",
    accent: "group-hover:text-yellow-500",
  },
  {
    icon: TbForms,
    name: "Input",
    description: "Text inputs, selects, textareas with validation states.",
    tag: "Soon",
    tagColor: "bg-yellow-500/15 text-yellow-600",
    href: "#",
    accent: "group-hover:text-yellow-500",
  },
  {
    icon: FiBox,
    name: "More coming…",
    description: "Accordion, Drawer, Toast, Badge, Progress — all on the way.",
    tag: "Planned",
    tagColor: "bg-gray-200/60 text-gray-500",
    href: "#",
    accent: "group-hover:text-gray-500",
  },
];

export default function ComponentsSection() {
  return (
    <div className="border-y border-(--border) my-3">
      <Container>
        <div className="py-16 space-y-10">
          {/* Heading */}
          <div className="text-center space-y-3">
            <span className="inline-block rounded-full border border-(--border) px-3 py-1 text-xs font-medium text-lime-600">
              Components
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready-to-use{" "}
              <span className="text-lime-500">building blocks</span>
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground max-w-xl mx-auto">
              Browse our growing library. Each component ships with full source
              code, props docs, and live examples.
            </p>
          </div>

          {/* Component Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {components.map(({ icon: Icon, name, description, tag, tagColor, href, accent }) => (
              <Link
                key={name}
                href={href}
                className={`group rounded-xl border border-(--border) bg-background p-6 flex flex-col gap-4 hover:border-lime-400 transition-colors duration-200 ${href === "#" ? "pointer-events-none opacity-60" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <Icon size={24} className={`text-muted-foreground transition-colors duration-200 ${accent}`} />
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagColor}`}>
                    {tag}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm">{name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
                {href !== "#" && (
                  <div className="flex items-center gap-1 text-xs text-lime-600 font-medium mt-auto">
                    View docs
                    <TbArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

