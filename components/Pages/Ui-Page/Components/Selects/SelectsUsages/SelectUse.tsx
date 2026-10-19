import CodePreview from "@/components/Shared/CodePreview";
import React from "react";

export default function SelectUse() {
  const component = `"use client";

import React, { useEffect, useRef, useState } from "react";
import { BiCheck, BiChevronDown } from "react-icons/bi";

export interface SelectOption {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const selectRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  const calculateDirection = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const dropdownHeight = Math.min(options.length * 44 + 16, 260);
    setDirection(spaceBelow < dropdownHeight && spaceAbove > spaceBelow ? "up" : "down");
  };

  const handleToggle = () => {
    if (disabled) return;
    if (!open) calculateDirection();
    setOpen((prev) => !prev);
  };

  const handleSelect = (option: SelectOption) => {
    onChange?.(option.value);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={selectRef} className={\`relative w-full \${className}\`}>
      <button
        ref={triggerRef}
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={\`flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-200 hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white
          \${open ? "border-zinc-400 ring-2 ring-zinc-900/10 dark:border-zinc-600" : ""}
          \${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        \`}
      >
        <span className={selectedOption ? "text-zinc-900 dark:text-white" : "text-zinc-400"}>
          {selectedOption?.label || placeholder}
        </span>
        <BiChevronDown size={18} className={\`text-zinc-500 transition-transform duration-300 \${open ? "rotate-180" : ""}\`} />
      </button>

      <div
        className={\`absolute left-0 z-50 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white p-1.5 shadow-xl transition-all duration-200 ease-out dark:border-zinc-800 dark:bg-zinc-950
          \${direction === "down" ? "top-[calc(100%+8px)] origin-top" : "bottom-[calc(100%+8px)] origin-bottom"}
          \${open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : direction === "down" ? "pointer-events-none -translate-y-2 scale-95 opacity-0" : "pointer-events-none translate-y-2 scale-95 opacity-0"}
        \`}
      >
        <div className="max-h-60 overflow-y-auto">
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className={\`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-150
                  \${isSelected ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white" : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900"}
                \`}
              >
                <span>{option.label}</span>
                {isSelected && <BiCheck size={16} className="text-zinc-900 dark:text-white" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}`;

  const usage = `const [value, setValue] = useState("");

const options = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Product", value: "product" },
  { label: "Marketing", value: "marketing" },
];

<CustomSelect
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Select a department"
/>`;

  return (
    <div>
      <CodePreview componentCode={component} usageCode={usage} />
    </div>
  );
}

