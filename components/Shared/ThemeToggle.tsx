"use client";

import { useLayoutEffect, useState } from "react";
import { MdWbSunny } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Re-apply the stored theme after React's dev-mode remount clears <html> attributes.
  // In production this is a no-op (the inline script in <head> already applied it).
  useLayoutEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      document.documentElement.setAttribute("data-theme", stored);
      setTheme(stored);
    } else {
      // No saved preference — mirror the OS setting
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  function toggle() {
    const next: "light" | "dark" = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="p-1.5 border border-(--border) rounded-md transition-colors hover:bg-(--surface)"
    >
      {theme === "dark" ? (
        <MdWbSunny size={18} />
      ) : (
        <MdNightlight size={18} />
      )}
    </button>
  );
}

