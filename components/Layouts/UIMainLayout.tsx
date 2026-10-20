"use client";

import React, { useState, useEffect } from "react";
import { BiChevronDown, BiFoodMenu } from "react-icons/bi";
import Link from "next/link";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { usePathname } from "next/navigation";
import ThemeToggle from "../Shared/ThemeToggle";
import ScreenRestriction from "../Shared/ScreenRestriction";

const UIMainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navigation = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", path: "/ui" },
        { name: "Installation", path: "/ui/installation" },
        { name: "Usage", path: "/usage" },
      ],
    },
    {
      title: "Components",
      items: [
        { name: "Tooltips", path: "/ui/tooltips" },
        { name: "Modals", path: "/ui/modals" },
        { name: "Selects", path: "/ui/selects" },
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

  const filteredNavigation = navigation
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((section) => section.items.length > 0);
  if (isMobile) {
    return <ScreenRestriction />;
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center border-b border-(--border) bg-background px-4 backdrop-blur-md bg-[repeating-linear-gradient(35deg,var(--pattern)_0,var(--pattern)_1px,transparent_0,transparent_4px)]">
        <div className="flex w-full items-center">
          <button
            type="button"
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={sidebarOpen}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100/50 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
          >
            {sidebarOpen ? (
              <TbLayoutSidebarLeftCollapse size={18} />
            ) : (
              <BiFoodMenu size={18} />
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
        <div className="px-4 py-2">
          <input
            type="text"
            placeholder="Search ui"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-(--border) outline-none px-3 py-2 text-sm text-gray-600 placeholder-gray-400 focus:border-lime-500 focus:border"
          />
        </div>
        <nav className="h-full overflow-y-auto px-4 py-6">
          {filteredNavigation.map((section) => (
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
                            ? "border-lime-500 bg-lime-50/20  font-semibold text-lime-600"
                            : "border-transparent text-gray-600 hover:border-lime-400 hover:bg-gray-50/50 hover:text-gray-950"
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
        {filteredNavigation.length === 0 && (
          <p className="p-4 text-center text-gray-500">No pages found</p>
        )}
      </aside>

      {/* Main Content */}
      <main
        className={`min-h-screen pt-16 transition-[margin] duration-300 ease-in-out ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* <div className="p-4 sm:p-6">{children}</div> */}
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default UIMainLayout;
