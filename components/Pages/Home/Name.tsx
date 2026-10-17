import React from "react";

export default function Name() {
  return (
    <svg viewBox="0 0 900 210" className="w-full max-w-4xl mx-auto">
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="50%" stopColor="#a3e635" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="220"
        fontWeight="900"
        fill="none"
        stroke="url(#textGradient)"
        strokeWidth="1"
      >
        NATRIX
      </text>
    </svg>
  );
}
