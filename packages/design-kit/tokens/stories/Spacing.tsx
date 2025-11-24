/**
 * Spacing Story
 */

import type { StoryObj } from "@storybook/react-vite";
import { tokens } from "./shared";

export const Spacing: StoryObj = {
  render: () => {
    const spacingEntries = Object.entries(tokens.spacing)
      .filter(([key]) => !isNaN(Number(key)) || key === "px" || key === "0")
      .sort(([a], [b]) => {
        if (a === "px") return -1;
        if (b === "px") return 1;
        if (a === "0") return -1;
        if (b === "0") return 1;
        return parseFloat(a) - parseFloat(b);
      });

    return (
      <div className="p-8 bg-bg-primary">
        <h1 className="text-3xl font-bold mb-8 text-text-primary">
          Spacing Scale
        </h1>
        <div className="flex flex-col gap-4">
          {spacingEntries.map(([key, value]) => {
            return (
              <div key={key} className="flex items-center gap-4">
                <div className="w-24 text-right">
                  <div className="text-xs text-text-secondary font-mono mt-1">
                    {value}
                  </div>
                </div>
                <div
                  className="bg-neutral-700 rounded flex-1"
                  style={{
                    maxWidth: value,
                    height: "2rem",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

