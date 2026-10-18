"use client";

import Container from "@/components/Layouts/Container";
import React, { useState } from "react";
import {
  BiCheck,
  BiCopy,
  BiTerminal,
  BiPackage,
  BiCodeAlt,
  BiInfoCircle,
  BiCheckCircle,
  BiArrowToRight,
} from "react-icons/bi";

const packageManagers = [
  {
    name: "bun",
    label: "Bun",
    command: "bun add natrix-ui",
  },
  {
    name: "npm",
    label: "npm",
    command: "npm install natrix-ui",
  },
  {
    name: "pnpm",
    label: "pnpm",
    command: "pnpm add natrix-ui",
  },
  {
    name: "yarn",
    label: "Yarn",
    command: "yarn add natrix-ui",
  },
];

export default function Installation() {
  const [activeManager, setActiveManager] = useState("bun");
  const [copied, setCopied] = useState(false);

  const selectedManager = packageManagers.find(
    (manager) => manager.name === activeManager,
  )!;

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(selectedManager.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Container>
      <section className="py-10 sm:py-14">
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-600 dark:text-lime-400">
            <BiTerminal className="text-base" />
            Getting Started
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Installation
          </h1>

          <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            Get started with Natrix UI in just a few steps. Install the package,
            configure your project, and start building beautiful interfaces with
            reusable components.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="mt-10 rounded-2xl border border-(--border) sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-500/10 text-2xl text-lime-600 dark:text-lime-400">
              <BiCheckCircle />
            </div>

            <div>
              <h2 className="text-lg font-semibold">Before you begin</h2>

              <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                Make sure you have a JavaScript development environment ready
                before installing Natrix UI.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {[
                  "Node.js and a package manager",
                  "A React-based project",
                  "Basic knowledge of React components",
                  "Tailwind CSS configured if your components require it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BiCheck className="mt-0.5 shrink-0 text-lg text-lime-600 dark:text-lime-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-500/10 text-sm font-bold text-lime-600 dark:text-lime-400">
              01
            </span>

            <h2 className="text-xl font-bold sm:text-2xl">
              Install the package
            </h2>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
            Choose your preferred package manager and run the corresponding
            command in your project terminal.
          </p>

          {/* Package Manager Tabs */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-(--border)">
            <div className="flex flex-wrap gap-1 border-b border-(--border) bg-background p-2">
              {packageManagers.map((manager) => (
                <button
                  key={manager.name}
                  onClick={() => {
                    setActiveManager(manager.name);
                    setCopied(false);
                  }}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeManager === manager.name
                      ? "bg-lime-500/15 text-lime-700 dark:text-lime-400"
                      : "text-gray-500 hover:bg-gray-200/70 dark:hover:bg-white/10"
                  }`}
                >
                  {manager.label}
                </button>
              ))}
            </div>

            {/* Terminal */}
            <div className="bg-background p-5  sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-gray-500">Terminal</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <code className="overflow-x-auto text-sm leading-7">
                  <span className="mr-3 text-lime-400">$</span>
                  {selectedManager.command}
                </code>

                <button
                  onClick={copyCommand}
                  aria-label="Copy installation command"
                  className="flex shrink-0 items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-300 transition-colors hover:bg-white/10"
                >
                  {copied ? (
                    <>
                      <BiCheck className="text-base text-lime-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <BiCopy className="text-base" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-xl bg-lime-500/5 p-4">
            <BiInfoCircle className="mt-0.5 shrink-0 text-xl text-lime-600 dark:text-lime-400" />
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Replace the example package name or command with the actual
              published package name and installation instructions for your
              library before publishing this page.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-500/10 text-sm font-bold text-lime-600 dark:text-lime-400">
              02
            </span>

            <h2 className="text-xl font-bold sm:text-2xl">
              Import your components
            </h2>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
            Once the package is installed, import a component into your React or
            Next.js application using the package's documented export path.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-(--border)">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3 dark:border-white/10">
              <div className="flex items-center gap-2 text-sm font-medium">
                <BiCodeAlt className="text-lg text-lime-600 dark:text-lime-400" />
                Example.tsx
              </div>

              <span className="text-xs text-gray-500">TSX</span>
            </div>

            <pre className="overflow-x-auto bg-background p-5 text-sm leading-7  sm:p-6">
              <code>{`import React from "react";
// Replace this example with the actual
// exports provided by your package.

// import { Button } from "natrix-ui";

export default function Example() {
  return (
    <main>
      {/* Your Natrix UI components go here */}
      <h1>Welcome to Natrix UI</h1>
    </main>
  );
}`}</code>
            </pre>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
            Note: The import path and component names above are illustrative.
            Use the actual exports available in your published package.
          </p>
        </div>

        {/* Step 3 */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-500/10 text-sm font-bold text-lime-600 dark:text-lime-400">
              03
            </span>

            <h2 className="text-xl font-bold sm:text-2xl">
              Configure your styles
            </h2>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
            Ensure your application includes the styling required by your
            components. Depending on the package setup, you may need to
            configure Tailwind CSS, global styles, fonts, themes, or
            component-specific stylesheets.
          </p>

          <div className="mt-5 rounded-2xl border border-gray-200 p-5 dark:border-white/10 sm:p-6">
            <div className="flex items-center gap-3">
              <BiPackage className="text-2xl text-lime-600 dark:text-lime-400" />
              <h3 className="font-semibold">Styling checklist</h3>
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              <li className="flex gap-3">
                <BiCheck className="mt-0.5 shrink-0 text-lg text-lime-600 dark:text-lime-400" />
                Verify the required CSS framework and version.
              </li>
              <li className="flex gap-3">
                <BiCheck className="mt-0.5 shrink-0 text-lg text-lime-600 dark:text-lime-400" />
                Import any required package stylesheet.
              </li>
              <li className="flex gap-3">
                <BiCheck className="mt-0.5 shrink-0 text-lg text-lime-600 dark:text-lime-400" />
                Check the library's theme and customization instructions.
              </li>
            </ul>
          </div>
        </div>

        {/* Success / Next Steps */}
        <div className="mt-16 rounded-3xl border border-lime-500/20 bg-linear-to-br from-lime-500/8 to-emerald-500/4 p-6 sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500/15 text-2xl text-lime-600 dark:text-lime-400">
            <BiCheckCircle />
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight">
            You're ready to get started!
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Your next step is to explore the available components, learn their
            APIs, and integrate them into your application. Follow the
            component-specific documentation for exact usage and configuration
            details.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-lime-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-lime-400">
              Explore Components
              <BiArrowToRight className="text-lg" />
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
