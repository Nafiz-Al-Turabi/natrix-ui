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
  const [disabledVal] = useState("design");

  const [multiBasic, setMultiBasic] = useState<string[]>([]);
  const [multiPreselected, setMultiPreselected] = useState<string[]>(["react", "nextjs"]);
  const [multiNoSearch, setMultiNoSearch] = useState<string[]>([]);

  return (
    <div>
      <Container>
        <div className="space-y-4">

          {/* Page Header */}
          <div className="py-3">
            <Header
              title="Select"
              description="Accessible, animated dropdown selects — single-value and multi-value with search, clear-all, and select-all built in."
            />
          </div>

          {/* ── Section: Single Select  ── */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold">Single Select</h2>
              <p className="mt-1 text-sm">
                A fully custom dropdown. Supports smart flip direction,{" "}
                <code className="rounded bg-lime-400 text-black px-1 py-0.5 text-xs font-mono">
                  Escape
                </code>{" "}
                to close, click-outside dismiss, and a{" "}
                <code className="rounded bg-lime-400 text-black px-1 py-0.5 text-xs font-mono">
                  disabled
                </code>{" "}
                state.
              </p>
            </div>

            {/* Demo box */}
            <div className="flex flex-wrap items-start justify-center gap-10 rounded-xl border border-(--border) bg-background py-12 px-8">
              {/* Basic */}
              <div className="flex flex-col gap-2 w-64">
                <p className="text-xs font-medium">Basic</p>
                <CustomSelect
                  options={departmentOptions}
                  value={basicVal}
                  onChange={setBasicVal}
                  placeholder="Select a department" 
                />
                {basicVal && (
                  <p className="text-xs text-muted-foreground">
                    Selected:{" "}
                    <span className="font-medium">{basicVal}</span>
                  </p>
                )}
              </div>

              {/* Disabled */}
              <div className="flex flex-col gap-2 w-64">
                <p className="text-xs font-medium">Disabled</p>
                <CustomSelect
                  options={departmentOptions}
                  value={disabledVal}
                  disabled
                  placeholder="Select a department"
                />
              </div>
            </div>
          </section>

          {/* ── Select Props ── */}
          <section className="space-y-3">
            <div>
              <h2 className="text-base font-semibold">Props</h2>
              <p className="mt-1 text-sm">
                All available props for the{" "}
                <code className="rounded bg-lime-400 text-black px-1 py-0.5 text-xs font-mono">
                  CustomSelect
                </code>{" "}
                component.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-(--border)">
              <table className="min-w-full divide-y divide-(--border) text-sm">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Prop</th>
                    <th className="px-4 py-3 text-left font-semibold">Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Default</th>
                    <th className="px-4 py-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-(--border) bg-background">
                  {[
                    ["options", "SelectOption[]", "—", "Array of { label, value } objects to display."],
                    ["value", "string", "undefined", "Currently selected value."],
                    ["onChange", "(value: string) => void", "undefined", "Called with the new value on selection."],
                    ["placeholder", "string", '"Select an option"', "Text shown when no value is selected."],
                    ["disabled", "boolean", "false", "Disables the trigger and prevents interaction."],
                    ["className", "string", '""', "Extra classes applied to the root wrapper."],
                  ].map(([prop, type, def, desc]) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs text-lime-500">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-blue-600">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Single Select Code Preview */}
          <SelectUse />

          {/* ── Section: Multi Select ── */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold">Multi Select</h2>
              <p className="mt-1 text-sm">
                Select multiple values displayed as inline tag badges. Supports{" "}
                <code className="rounded bg-lime-400 text-black px-1 py-0.5 text-xs font-mono">
                  searchable
                </code>
                ,{" "}
                <code className="rounded bg-lime-400 text-black px-1 py-0.5 text-xs font-mono">
                  clearable
                </code>
                ,{" "}
                <code className="rounded bg-lime-400 text-black px-1 py-0.5 text-xs font-mono">
                  selectAll
                </code>
                , and per-option{" "}
                <code className="rounded bg-lime-400 text-black px-1 py-0.5 text-xs font-mono">
                  disabled
                </code>
                .
              </p>
            </div>

            {/* Demo box */}
            <div className="flex flex-wrap items-start justify-center gap-10 rounded-xl border border-(--border) bg-background py-12 px-8">
              {/* Basic */}
              <div className="flex flex-col gap-2 w-72">
                <p className="text-xs font-medium">With search &amp; select-all</p>
                <MultiSelect
                  options={skillOptions}
                  value={multiBasic}
                  onChange={setMultiBasic}
                  placeholder="Pick your skills"
                />
                {multiBasic.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    {multiBasic.length} selected
                  </p>
                )}
              </div>

              {/* Pre-selected */}
              <div className="flex flex-col gap-2 w-72">
                <p className="text-xs font-medium">Pre-selected values</p>
                <MultiSelect
                  options={skillOptions}
                  value={multiPreselected}
                  onChange={setMultiPreselected}
                  placeholder="Pick your skills"
                />
              </div>

              {/* No search */}
              <div className="flex flex-col gap-2 w-72">
                <p className="text-xs font-medium">Without search &amp; select-all</p>
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
              <div className="flex flex-col gap-2 w-72">
                <p className="text-xs font-medium">Disabled</p>
                <MultiSelect
                  options={skillOptions}
                  value={["react", "nextjs"]}
                  disabled
                  placeholder="Pick your skills"
                />
              </div>
            </div>
          </section>

          {/* ── MultiSelect Props ── */}
          <section className="space-y-3">
            <div>
              <h2 className="text-base font-semibold">MultiSelect Props</h2>
              <p className="mt-1 text-sm">
                All available props for the{" "}
                <code className="rounded bg-lime-400 text-black px-1 py-0.5 text-xs font-mono">
                  MultiSelect
                </code>{" "}
                component.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-(--border)">
              <table className="min-w-full divide-y divide-(--border) text-sm">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Prop</th>
                    <th className="px-4 py-3 text-left font-semibold">Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Default</th>
                    <th className="px-4 py-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-(--border) bg-background">
                  {[
                    ["options", "MultiSelectOption[]", "—", "Array of { label, value, disabled? } objects."],
                    ["value", "string[]", "[]", "Array of currently selected values."],
                    ["onChange", "(value: string[]) => void", "undefined", "Called with the updated selected array."],
                    ["placeholder", "string", '"Select options"', "Text shown when nothing is selected."],
                    ["searchPlaceholder", "string", '"Search options..."', "Placeholder for the search input."],
                    ["disabled", "boolean", "false", "Disables the entire component."],
                    ["searchable", "boolean", "true", "Show a search input at the top of the dropdown."],
                    ["clearable", "boolean", "true", "Show clear-all × button when values are selected."],
                    ["selectAll", "boolean", "true", "Show Select all / Clear all toggle button."],
                    ["maxHeight", "number", "240", "Max height (px) of the scrollable options list."],
                    ["className", "string", '""', "Extra classes applied to the root wrapper."],
                  ].map(([prop, type, def, desc]) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-lime-600">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Usage Tips ── */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold">Usage Tips</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Both components auto-detect viewport space and flip the dropdown{" "}
                <strong>up</strong> or <strong>down</strong>.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Press{" "}
                <code className="rounded bg-lime-400 text-black px-1 text-xs font-mono">
                  Escape
                </code>{" "}
                or click outside to close the dropdown.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                Mark individual options with{" "}
                <code className="rounded bg-lime-400 text-black px-1 text-xs font-mono">
                  disabled: true
                </code>{" "}
                in MultiSelect to keep them visible but unselectable.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-yellow-500">⚠</span>
                Use{" "}
                <code className="rounded bg-lime-400 text-black px-1 text-xs font-mono">
                  searchable={"{false}"}
                </code>{" "}
                and{" "}
                <code className="rounded bg-lime-400 text-black px-1 text-xs font-mono">
                  selectAll={"{false}"}
                </code>{" "}
                for compact dropdowns with a small option list.
              </li>
            </ul>
          </section>

          {/* MultiSelect Code Preview */}
          <MultiSelectUse />

        </div>
      </Container>
    </div>
  );
}
