"use client";

import React, { useState } from "react";
import { BiChevronDown, BiFoodMenu } from "react-icons/bi";
import Link from "next/link";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { usePathname } from "next/navigation";
import ThemeToggle from "../Shared/ThemeToggle";

const UIMainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navigation = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", path: "/ui" },
        { name: "Installation", path: "/installation" },
        { name: "Usage", path: "/usage" },
      ],
    },
    {
      title: "Components",
      items: [
        { name: "Button", path: "/button" },
        { name: "Card", path: "/cards" },
        { name: "Input", path: "/input" },
        { name: "Modal", path: "/modal" },
        { name: "Table", path: "/table" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Examples", path: "/examples" },
        { name: "API Reference", path: "/api-reference" },
        { name: "Changelog", path: "/changelog" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center gap- border-b border-(--border) bg-background px-4 backdrop-blur-md">
        <div className="flex w-full items-center">
          <button
            type="button"
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={sidebarOpen}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
          >
            {sidebarOpen ? (
              <TbLayoutSidebarLeftCollapse size={22} />
            ) : (
              <BiFoodMenu size={24} />
            )}
          </button>

          <Link href="/" className="flex  items-end font-bold text-lg">
            <img src="/n-logo.png" alt="Natrix Logo" className="w-12" />
            <span className="mb-2">
              Natrix <sup className="text-xs text-[#27C059]">UI</sup>
            </span>
          </Link>
        </div>
        <ThemeToggle />
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed bottom-0 left-0 top-16 z-40 w-64 border-r border-(--border) bg-background transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="h-full overflow-y-auto px-4 py-6">
          {navigation.map((section) => (
            <div key={section.title} className="mb-7">
              <div className="mb-2 flex items-center justify-between px-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {section.title}
                </h2>

                <BiChevronDown size={18} className="text-gray-400" />
              </div>

              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.path;

                  return (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        aria-current={isActive ? "page" : undefined}
                        className={`block rounded-r-lg border-l-2 px-3 py-2 text-sm transition-colors duration-200 ${
                          isActive
                            ? "border-lime-500 bg-lime-50  font-semibold text-green-700"
                            : "border-transparent text-gray-600 hover:border-lime-400 hover:bg-gray-50 hover:text-gray-950"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`min-h-screen pt-16 transition-[margin] duration-300 ease-in-out ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
};

export default UIMainLayout;
