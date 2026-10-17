import UIMainLayout from "@/components/Layouts/UIMainLayout";
import React from "react";

export default function UILayout({ children }: { children: React.ReactNode }) {
  return <UIMainLayout>{children}</UIMainLayout>;
}
