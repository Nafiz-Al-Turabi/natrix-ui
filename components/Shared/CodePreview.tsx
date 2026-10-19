
"use client";

import { useState } from "react";
import { BiCopy, BiCheck } from "react-icons/bi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodePreviewProps = {
  componentCode: string;
  usageCode: string;
};

export default function CodePreview({
  componentCode,
  usageCode,
}: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<"component" | "usage">(
    "component"
  );
  const [copied, setCopied] = useState(false);

  const code = activeTab === "component" ? componentCode : usageCode;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-(--border) bg-background">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-(--border) bg-background px-3">
        <div className="flex gap-1">
          {(["component", "usage"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCopied(false);
              }}
              className={`relative px-4 py-3 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-lime-600"
                  : ""
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-lime-600" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg border border-(--border) px-3 py-2 text-xs transition "
        >
          {copied ? (
            <BiCheck className="text-base text-lime-400" />
          ) : (
            <BiCopy className="text-base" />
          )}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <div className="max-h-100 overflow-auto custom-scroll">
        <SyntaxHighlighter
          language="tsx"
          style={vscDarkPlus}
          showLineNumbers
          customStyle={{
            margin: 0,
            padding: "20px 12px",
            background: "var(--background)",
            fontSize: "13px",
            lineHeight: "1.8",
            minWidth: "max-content",
          }}
          lineNumberStyle={{
            color: "#626b76",
            paddingRight: "16px",
            minWidth: "40px",
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
 