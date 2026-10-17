import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-339 mx-auto px-4 border-x border-(--border)">{children}</div>;
}
