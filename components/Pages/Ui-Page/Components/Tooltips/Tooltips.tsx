import Container from "@/components/Layouts/Container";
import CodePreview from "@/components/Shared/CodePreview";
import Header from "@/components/Shared/Header";
import Tooltip from "@/components/Ui-Comp/Tooltips/Tooltip";
import React from "react";
import TooltipUse from "./TooltipUses/TooltipUse";

export default function Tooltips() {
  return (
    <div className="">
      <Container>
        <div className="py-3">
          <Header
            title="Tooltips"
            description="Provide helpful contextual hints that appear when users hover over or focus on interface elements, making actions easier to understand without cluttering the UI."
          />
        </div>
        <div className="max-w-3xl mx-auto flex gap-4 justify-between">
          <div className="flex flex-col items-center gap-2">
            <Tooltip position="top" content="Top">
              {" "}
              <button className="text-white font-semibold px-6 py-2 bg-blue-500 text-sm rounded">
                Hover
              </button>
            </Tooltip>
            <p className="text-xs">Top</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tooltip position="bottom" content="Bottom">
              {" "}
              <button className="text-white font-semibold px-6 py-2 bg-cyan-500 text-sm rounded">
                Hover
              </button>
            </Tooltip>
            <p className="text-xs">Bottom</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tooltip position="left" content="Left">
              {" "}
              <button className="text-white font-semibold px-6 py-2 bg-green-500 text-sm rounded">
                Hover
              </button>
            </Tooltip>
            <p className="text-xs">Left</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tooltip position="right" content="Right">
              {" "}
              <button className="text-white font-semibold px-6 py-2 bg-purple-500 text-sm rounded">
                Hover
              </button>
            </Tooltip>
            <p className="text-xs">Right</p>
          </div>
        </div>
       <div className="mt-10">
        <TooltipUse/>
       </div>
      </Container>
    </div>
  );
}
