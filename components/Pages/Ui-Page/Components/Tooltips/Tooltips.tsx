import Container from "@/components/Layouts/Container";
import Header from "@/components/Shared/Header";
import Tooltip from "@/components/Ui-Comp/Tooltips/Tooltip";
import TooltipUse from "./TooltipUses/TooltipUse";
import { FiTrash2, FiEdit2, FiShare2, FiInfo, FiLock, FiStar } from "react-icons/fi";

export default function Tooltips() {
  return (
    <div>
      <Container>
        <div className="space-y-4">
          {/* Page Header */}
          <div className="py-3">
            <Header
              title="Tooltips"
              description="Provide helpful contextual hints that appear when users hover over or focus on interface elements, making actions easier to understand without cluttering the UI."
            />
          </div>

          {/* ── Section: Positions ── */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold ">Positions</h2>
              <p className="mt-1 text-sm">
                Tooltip supports four positions:{" "}
                <code className="rounded bg-lime-600 px-1 py-0.5 text-xs font-mono">top</code>,{" "}
                <code className="rounded bg-lime-600 px-1 py-0.5 text-xs font-mono">bottom</code>,{" "}
                <code className="rounded bg-lime-600 px-1 py-0.5 text-xs font-mono">left</code>, and{" "}
                <code className="rounded bg-lime-600 px-1 py-0.5 text-xs font-mono">right</code>.
                Hover over each button to see the tooltip appear.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10 rounded-xl border border-(--border) bg-background py-12">
              <div className="flex flex-col items-center gap-3">
                <Tooltip position="top" content="I am on top!">
                  <button className="rounded-lg bg-blue-500 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition">
                    Hover me
                  </button>
                </Tooltip>
                <p className="text-xs">top</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Tooltip position="bottom" content="I am at the bottom!">
                  <button className="rounded-lg bg-cyan-500 px-6 py-2 text-sm font-semibold text-white hover:bg-cyan-600 transition">
                    Hover me
                  </button>
                </Tooltip>
                <p className="text-xs">bottom</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Tooltip position="left" content="I am on the left!">
                  <button className="rounded-lg bg-green-500 px-6 py-2 text-sm font-semibold text-white hover:bg-green-600 transition">
                    Hover me
                  </button>
                </Tooltip>
                <p className="text-xs">left</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Tooltip position="right" content="I am on the right!">
                  <button className="rounded-lg bg-purple-500 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-600 transition">
                    Hover me
                  </button>
                </Tooltip>
                <p className="text-xs">right</p>
              </div>
            </div>
          </section>

          {/* ── Section: Real-world Use Cases ── */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold ">Real-world Examples</h2>
              <p className="mt-1 text-sm">
                Tooltips work with any child element — icon buttons, form labels, disabled inputs, and more.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 rounded-xl border border-(--border) bg-background px-8 py-10">

              {/* Delete icon */}
              <div className="flex flex-col items-center gap-2">
                <Tooltip position="top" content="Delete item">
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500 text-white shadow-sm hover:bg-red-600 transition">
                    <FiTrash2 size={16} />
                  </button>
                </Tooltip>
                <p className="text-xs text-gray-400">Delete</p>
              </div>

              {/* Edit icon */}
              <div className="flex flex-col items-center gap-2">
                <Tooltip position="top" content="Edit this field">
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500 text-white shadow-sm hover:bg-blue-600 transition">
                    <FiEdit2 size={16} />
                  </button>
                </Tooltip>
                <p className="text-xs text-gray-400">Edit</p>
              </div>

              {/* Share icon */}
              <div className="flex flex-col items-center gap-2">
                <Tooltip position="right" content="Share this link">
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500 text-white shadow-sm hover:bg-green-600 transition">
                    <FiShare2 size={16} />
                  </button>
                </Tooltip>
                <p className="text-xs text-gray-400">Share</p>
              </div>

              {/* Info / Form label */}
              <div className="flex flex-col items-center gap-2">
                <Tooltip position="top" content="This field is required">
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-sm hover:bg-indigo-600 transition">
                    <FiInfo size={16} />
                  </button>
                </Tooltip>
                <p className="text-xs text-gray-400">Info</p>
              </div>

              {/* Disabled button */}
              <div className="flex flex-col items-center gap-2">
                <Tooltip position="bottom" content="You don't have permission">
                  <span className="inline-block cursor-not-allowed">
                    <button
                      disabled
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-300 text-white pointer-events-none"
                    >
                      <FiLock size={16} />
                    </button>
                  </span>
                </Tooltip>
                <p className="text-xs text-gray-400">Disabled</p>
              </div>

              {/* Premium / Badge */}
              <div className="flex flex-col items-center gap-2">
                <Tooltip position="top" content="Premium plan feature">
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 text-white shadow-sm hover:bg-amber-500 transition">
                    <FiStar size={16} />
                  </button>
                </Tooltip>
                <p className="text-xs text-gray-400">Premium</p>
              </div>
            </div>
          </section>

          {/* ── Props Reference ── */}
          <section className="space-y-3">
            <div>
              <h2 className="text-base font-semibold ">Props</h2>
              <p className="mt-1 text-sm">
                All available props for the{" "}
                <code className="rounded bg-lime-600 px-1 py-0.5 text-xs font-mono">Tooltip</code> component.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-(--border)">
              <table className="min-w-full text-sm">
                <thead className="bg-lime-500">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Prop</th>
                    <th className="px-4 py-3 text-left font-semibold">Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Default</th>
                    <th className="px-4 py-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-lime-600">children</td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">ReactNode</td>
                    <td className="px-4 py-3 text-xs">—</td>
                    <td className="px-4 py-3 text-xs">
                      The trigger element. Any React node — button, span, icon, etc.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-lime-600">content</td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">string</td>
                    <td className="px-4 py-3 text-xs">—</td>
                    <td className="px-4 py-3 text-xs">
                      The text to display inside the tooltip bubble.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-lime-600">position</td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">
                      {'"top" | "bottom" | "left" | "right"'}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs">{'"top"'}</td>
                    <td className="px-4 py-3 text-xs">
                      Where the tooltip appears relative to the trigger element.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Accessibility Notes ── */}
          <section className="space-y-3">
            <div>
              <h2 className="text-base font-semibold ">Usage Tips</h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Wrap <strong>any</strong> element — button, icon, badge, label — as the trigger.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                For <strong>disabled</strong> buttons, wrap them in a{" "}
                <code className="rounded bg-lime-600 px-1 text-xs font-mono">&lt;span&gt;</code> so hover events still fire.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Use <code className="rounded bg-lime-600 px-1 text-xs font-mono">position</code> to avoid clipping at viewport edges.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-yellow-500">⚠</span>
                Keep <code className="rounded bg-lime-600 px-1 text-xs font-mono">content</code> short — tooltips are hints, not paragraphs.
              </li>
            </ul>
          </section>

          {/* ── Code Preview ── */}
          <div>
            <TooltipUse />
          </div>
        </div>
      </Container>
    </div>
  );
}

