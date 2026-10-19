import React from "react";

type PageHeaderProps = {
  title: string;
  description: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
};

export default function Header({
  title,
  description,
  badge,
  align = "left",
  className = "",
}: PageHeaderProps) {
  const isCenter = align === "center";

  return (
    <header
      className={`relative mb-10 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`mb-5 inline-flex items-center gap-2 rounded-full
            border border-lime-500/20 bg-lime-500/8
            px-3.5 py-1.5 text-xs font-semibold tracking-wide
            text-lime-600 dark:text-lime-400`}
        >
          {/* <BiSparkles  className="text-base" /> */}
          {badge}
        </div>
      )}

      <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h1>

      <p
        className={`mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </header>
  );
}

