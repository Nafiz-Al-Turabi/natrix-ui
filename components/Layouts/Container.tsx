import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1356] mx-auto px-4 border-x border-white/20">{children}</div>;
}
