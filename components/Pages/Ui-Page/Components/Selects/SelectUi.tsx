"use client";

import React, { useState } from "react";
import Container from "@/components/Layouts/Container";
import Header from "@/components/Shared/Header";
import CustomSelect from "@/components/Ui-Comp/Selects/Select";
import MultiSelect from "@/components/Ui-Comp/Selects/MultiSelect";
import SelectUse from "./SelectsUsages/SelectUse";
import MultiSelectUse from "./SelectsUsages/MultiSelectUse";

const departmentOptions = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Product", value: "product" },
  { label: "Marketing", value: "marketing" },
  { label: "Human Resources", value: "hr" },
  { label: "Finance", value: "finance" },
];

const skillOptions = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "TypeScript", value: "typescript" },
  { label: "Tailwind CSS", value: "tailwind" },
  { label: "Node.js", value: "nodejs" },
  { label: "GraphQL", value: "graphql", disabled: true },
  { label: "PostgreSQL", value: "postgres" },
];

export default function SelectUi() {
  const [basicVal, setBasicVal] = useState("");
  const [preselectedVal, setPreselectedVal] = useState("engineering");

  const [multiBasic, setMultiBasic] = useState<string[]>([]);
  const [multiPreselected, setMultiPreselected] = useState<string[]>(["react", "nextjs"]);
  const [multiNoSearch, setMultiNoSearch] = useState<string[]>([]);

  return (
    <div>
      <Container>
        <div className="space-y-12 py-4">

          {/* ── Page Header ── */}
          <div className="py-3">
            <Header
              title="Select"
              description="Accessible, animated dropdown selects — single-value and multi-value with search, clear-all, and select-all built in."
            />
          </div>

          {/* ══════════════════════════════════════
              SECTION 1: Single Select
          ══════════════════════════════════════ */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold text-gray-900">Single Select</h2>
              <p className="mt-1 text-sm text-gray-500">
                A custom dropdown that replaces the native{" "}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono">&lt;select&gt;</code>.
                Supports smart up/down direction detection, keyboard{" "}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono">Escape</code> to close,
                and click-outside dismiss.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 rounded-xl border border-gray-200 bg-gray-50 p-8 sm:grid-cols-2">
              {/* Basic */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500">Basic</p>
                <CustomSelect
                  options={departmentOptions}
                  value={basicVal}
                  onChange={setBasicVal}
                  placeholder="Select a department"
                />
                {basicVal && (
                  <p className="text-xs text-gray-400">
                    Selected: <span className="font-medium text-gray-700">{basicVal}</span>
                  </p>
                )}
              </div>

              {/* Pre-selected */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500">Pre-selected value</p>
                <CustomSelect
                  options={departmentOptions}
                  value={preselectedVal}
                  onChange={setPreselectedVal}
                  placeholder="Select a department"
                />
              </div>

              {/* Disabled */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500">Disabled state</p>
                <CustomSelect
                  options={departmentOptions}
                  value="design"
                  disabled
                  placeholder="Select a department"
                />
              </div>

              {/* Empty options */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500">No options</p>
                <CustomSelect
                  options={[]}
                  placeholder="Nothing to choose from"
                />
              </div>
            </div>
          </section>

          {/* Single Select Props */}
          <section className="space-y-3">
            <div>
              <h2 className="text-base font-semibold text-gray-900">Select Props</h2>
              <p className="mt-1 text-sm text-gray-500">
                All available props for the{" "}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono">CustomSelect</code>{" "}
                component.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Prop</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Default</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {[
                    ["options", "SelectOption[]", "—", "Array of { label, value } objects to display."],
                    ["value", "string", "undefined", "Currently selected value."],
                    ["onChange", "(value: string) => void", "undefined", "Called with the new value when an option is selected."],
                    ["placeholder", "string", '"Select an option"', "Text shown when no value is selected."],
                    ["disabled", "boolean", "false", "Disables the trigger and prevents interaction."],
                    ["className", "string", '""', "Extra classes applied to the root wrapper."],
                  ].map(([prop, type, def, desc]) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs text-gray-800">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-blue-600">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-500">{def}</td>
                      <td className="px-4 py-3 text-xs text-gray-600">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Single Select Code */}
          <SelectUse />

          {/* ══════════════════════════════════════
              SECTION 2: Multi Select
          ══════════════════════════════════════ */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold text-gray-900">Multi Select</h2>
              <p className="mt-1 text-sm text-gray-500">
                Select multiple values with inline tag badges. Supports{" "}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono">searchable</code>,{" "}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono">clearable</code>,{" "}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono">selectAll</code>, and per-option{" "}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono">disabled</code> state.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 rounded-xl border border-gray-200 bg-gray-50 p-8 sm:grid-cols-2">
              {/* Basic multiselect */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500">Basic</p>
                <MultiSelect
                  options={skillOptions}
                  value={multiBasic}
                  onChange={setMultiBasic}
                  placeholder="Pick your skills"
                />
                {multiBasic.length > 0 && (
                  <p className="text-xs text-gray-400">
                    {multiBasic.length} selected
                  </p>
                )}
              </div>

              {/* Pre-selected */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500">Pre-selected values</p>
                <MultiSelect
                  options={skillOptions}
                  value={multiPreselected}
                  onChange={setMultiPreselected}
                  placeholder="Pick your skills"
                />
              </div>

              {/* No search, no select-all */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500">
                  Without search &amp; select-all
                </p>
                <MultiSelect
                  options={departmentOptions}
                  value={multiNoSearch}
                  onChange={setMultiNoSearch}
                  placeholder="Select departments"
                  searchable={false}
                  selectAll={false}
                />
              </div>

              {/* Disabled */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500">Disabled state</p>
                <MultiSelect
                  options={skillOptions}
                  value={["react", "nextjs"]}
                  disabled
                  placeholder="Pick your skills"
                />
              </div>
            </div>
          </section>

          {/* MultiSelect Props */}
          <section className="space-y-3">
            <div>
              <h2 className="text-base font-semibold text-gray-900">MultiSelect Props</h2>
              <p className="mt-1 text-sm text-gray-500">
                All available props for the{" "}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono">MultiSelect</code>{" "}
                component.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Prop</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Default</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {[
                    ["options", "MultiSelectOption[]", "—", "Array of { label, value, disabled? } objects."],
                    ["value", "string[]", "[]", "Array of currently selected values."],
                    ["onChange", "(value: string[]) => void", "undefined", "Called with the updated selected array."],
                    ["placeholder", "string", '"Select options"', "Text shown when nothing is selected."],
                    ["searchPlaceholder", "string", '"Search options..."', "Placeholder text inside the search input."],
                    ["disabled", "boolean", "false", "Disables the entire component."],
                    ["searchable", "boolean", "true", "Show search input at the top of the dropdown."],
                    ["clearable", "boolean", "true", "Show clear-all × button when values are selected."],
                    ["selectAll", "boolean", "true", "Show Select all / Clear all toggle button."],
                    ["maxHeight", "number", "240", "Max height (px) of the scrollable options list."],
                    ["className", "string", '""', "Extra classes applied to the root wrapper."],
                  ].map(([prop, type, def, desc]) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs text-gray-800">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-blue-600">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-500">{def}</td>
                      <td className="px-4 py-3 text-xs text-gray-600">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Usage Tips ── */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">Usage Tips</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Both components detect available viewport space and flip the dropdown{" "}
                <strong>up</strong> or <strong>down</strong> automatically.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Press <code className="rounded bg-gray-100 px-1 text-xs font-mono">Escape</code> or
                click outside to dismiss the dropdown.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Mark individual options with{" "}
                <code className="rounded bg-gray-100 px-1 text-xs font-mono">disabled: true</code> in
                MultiSelect to prevent selection while keeping them visible.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-yellow-500">⚠</span>
                Set <code className="rounded bg-gray-100 px-1 text-xs font-mono">searchable={"{false}"}</code> and{" "}
                <code className="rounded bg-gray-100 px-1 text-xs font-mono">selectAll={"{false}"}</code> for
                compact dropdowns with few options.
              </li>
            </ul>
          </section>

          {/* MultiSelect Code */}
          <MultiSelectUse />

        </div>
      </Container>
    </div>
  );
}
