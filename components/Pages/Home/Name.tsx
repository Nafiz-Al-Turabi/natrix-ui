
"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Name() {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const text = textRef.current;
      if (!text) return;

      gsap.set(text, {
        strokeDasharray: 1800,
        strokeDashoffset: 1800,
        fill: "none",
      });

      gsap.to(text, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut",
        repeat: 0,
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 900 210"
      className="mx-auto w-full max-w-4xl"
    >
      <defs>
        <linearGradient
          id="textGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="50%" stopColor="#a3e635" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      <text
        ref={textRef}
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="220"
        fontWeight="900"
        fill="none"
        stroke="url(#textGradient)"
        strokeWidth="1.5"
      >
        NATRIX
      </text>
    </svg>
  );
}
