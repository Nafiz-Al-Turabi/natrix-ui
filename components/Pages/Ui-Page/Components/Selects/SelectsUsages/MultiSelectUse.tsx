import CodePreview from "@/components/Shared/CodePreview";
import React from "react";

export default function MultiSelectUse() {
  const component = `"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { BiCheck, BiChevronDown, BiSearch } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export interface MultiSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  selectAll?: boolean;
  maxHeight?: number;
  className?: string;
}

export default function MultiSelect({
  options,
  value = [],
  onChange,
  placeholder = "Select options",
  searchPlaceholder = "Search options...",
  disabled = false,
  searchable = true,
  clearable = true,
  selectAll = true,
  maxHeight = 240,
  className = "",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [search, setSearch] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOptions = useMemo(
    () => options.filter((o) => value.includes(o.value)),
    [options, value]
  );

  const filteredOptions = useMemo(() => {
    const q = search.toLowerCase().trim();
    return q ? options.filter((o) => o.label.toLowerCase().includes(q)) : options;
  }, [options, search]);

  const enabledOptions = options.filter((o) => !o.disabled);
  const allSelected =
    enabledOptions.length > 0 &&
    enabledOptions.every((o) => value.includes(o.value));

  const calculateDirection = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const dropdownHeight = Math.min(maxHeight + (searchable ? 70 : 0), 320);
    setDirection(spaceBelow < dropdownHeight && spaceAbove > spaceBelow ? "up" : "down");
  };

  const handleToggle = () => {
    if (disabled) return;
    if (!open) calculateDirection();
    setOpen((prev) => !prev);
  };

  const handleSelect = (option: MultiSelectOption) => {
    if (option.disabled) return;
    const exists = value.includes(option.value);
    onChange?.(exists ? value.filter((v) => v !== option.value) : [...value, option.value]);
  };

  const handleRemove = (e: React.MouseEvent, optionValue: string) => {
    e.stopPropagation();
    onChange?.(value.filter((v) => v !== optionValue));
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.([]);
  };

  const handleSelectAll = () => {
    const enabledValues = enabledOptions.map((o) => o.value);
    onChange?.(allSelected ? value.filter((v) => !enabledValues.includes(v)) : [...new Set([...value, ...enabledValues])]);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setSearch(""); }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={containerRef} className={\`relative w-full \${className}\`}>
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        onClick={handleToggle}
        className={\`flex min-h-11.5 w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-left shadow-sm transition-all duration-200 hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-950
          \${open ? "border-zinc-400 ring-2 ring-zinc-900/10 dark:border-zinc-600" : ""}
          \${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        \`}
      >
        <div className="flex min-w-0 flex-1 flex-wrap gap-1.5">
          {selectedOptions.length === 0 ? (
            <span className="px-1 text-sm text-zinc-400">{placeholder}</span>
          ) : (
            selectedOptions.map((option) => (
              <span key={option.value} className="inline-flex items-center gap-1 rounded-lg bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                {option.label}
                <span role="button" tabIndex={0} onClick={(e) => handleRemove(e, option.value)} className="cursor-pointer rounded-full p-0.5 hover:bg-zinc-200 dark:hover:bg-zinc-700">
                  <CgClose size={12} />
                </span>
              </span>
            ))
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {clearable && value.length > 0 && (
            <span role="button" onClick={handleClear} className="rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800">
              <CgClose size={15} />
            </span>
          )}
          <BiChevronDown size={18} className={\`text-zinc-400 transition-transform duration-300 \${open ? "rotate-180" : ""}\`} />
        </div>
      </button>

      <div className={\`absolute left-0 z-50 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white p-1.5 shadow-xl transition-all duration-200 ease-out dark:border-zinc-800 dark:bg-zinc-950
        \${direction === "down" ? "top-[calc(100%+8px)] origin-top" : "bottom-[calc(100%+8px)] origin-bottom"}
        \${open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : direction === "down" ? "pointer-events-none -translate-y-2 scale-95 opacity-0" : "pointer-events-none translate-y-2 scale-95 opacity-0"}
      \`}>
        {searchable && (
          <div className="border-b border-zinc-100 p-1 pb-2 dark:border-zinc-800">
            <div className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 dark:bg-zinc-900">
              <BiSearch size={16} className="shrink-0 text-zinc-400" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} onClick={(e) => e.stopPropagation()} placeholder={searchPlaceholder} className="h-9 w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white" />
            </div>
          </div>
        )}
        {selectAll && enabledOptions.length > 0 && (
          <button type="button" onClick={handleSelectAll} className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900">
            <span>{allSelected ? "Clear all" : "Select all"}</span>
            <span className="text-xs text-zinc-400">{value.length}/{enabledOptions.length}</span>
          </button>
        )}
        <div className="overflow-y-auto" style={{ maxHeight: \`\${maxHeight}px\` }}>
          {filteredOptions.length > 0 ? filteredOptions.map((option) => {
            const isSelected = value.includes(option.value);
            return (
              <button key={option.value} type="button" disabled={option.disabled} onClick={() => handleSelect(option)}
                className={\`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors
                  \${option.disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"}
                  \${isSelected ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white" : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900"}
                \`}
              >
                <span className={\`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all
                  \${isSelected ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900" : "border-zinc-300 dark:border-zinc-700"}
                \`}>
                  {isSelected && <BiCheck size={12} />}
                </span>
                <span className="flex-1">{option.label}</span>
                {option.disabled && <span className="text-xs text-zinc-400">Disabled</span>}
              </button>
            );
          }) : (
            <div className="px-3 py-8 text-center text-sm text-zinc-400">No options found</div>
          )}
        </div>
      </div>
    </div>
  );
}`;

  const usage = `const [selected, setSelected] = useState<string[]>([]);

const options = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Product", value: "product" },
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales", disabled: true },
];

<MultiSelect
  options={options}
  value={selected}
  onChange={setSelected}
  placeholder="Pick departments"
  searchable
  clearable
  selectAll
/>`;

  return (
    <div>
      <CodePreview componentCode={component} usageCode={usage} />
    </div>
  );
}

