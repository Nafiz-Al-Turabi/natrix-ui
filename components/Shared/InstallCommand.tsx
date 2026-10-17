"use client";

import { useState } from "react";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

interface InstallCommandProps {
  packages: string[];
  className?: string;
}

const packageManagers: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

const getCommand = (manager: PackageManager, packages: string[]) => {
  const packageList = packages.join(" ");

  switch (manager) {
    case "npm":
      return `npm install ${packageList}`;
    case "pnpm":
      return `pnpm add ${packageList}`;
    case "yarn":
      return `yarn add ${packageList}`;
    case "bun":
      return `bun add ${packageList}`;
  }
};

export default function InstallCommand({
  packages,
  className = "",
}: InstallCommandProps) {
  const [manager, setManager] = useState<PackageManager>("bun");
  const [copied, setCopied] = useState(false);

  const command = getCommand(manager, packages);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-(--border) bg-background ${className} mb-4`}
    >
      {/* Package manager tabs */}
      <div className="flex items-center justify-between gap-3 border-b border-(--border) px-4 py-2.5 sm:px-5">
        <div
          className="flex items-center gap-1"
          role="tablist"
          aria-label="Package manager"
        >
          {packageManagers.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={manager === item}
              onClick={() => {
                setManager(item);
                setCopied(false);
              }}
              className={`rounded px-3 py-1 text-xs font-medium transition-colors duration-200 ${
                manager === item ? "bg-gray-100 shadow-sm text-black" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded bg-gray-100 px-3 py-1.5 text-xs text-black font-medium transition-colors hover:bg-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          aria-label="Copy install command"
        >
          {copied ? (
            <>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="m5 12 4 4L19 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect x="8" y="8" width="13" height="13" rx="2" />
                <path
                  d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"
                  strokeLinecap="round"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Command */}
      <div className="flex min-h-12 items-center gap-2 px-4 py-3 font-mono text-[13px] sm:px-5 sm:text-sm">
        <span className="select-none text-green-400">$</span>
        <code className="min-w-0 break-all">{command}</code>
      </div>
    </div>
  );
}
