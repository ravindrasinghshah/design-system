/**
 * Z-Index Story
 */

import type { StoryObj } from "@storybook/react-vite";
import { tokens, CopyButton } from "./shared";

export const ZIndex: StoryObj = {
  render: () => {
    const zIndexEntries = Object.entries(tokens.zIndex).sort(([, a], [, b]) => {
      if (a === "auto") return 1;
      if (b === "auto") return -1;
      return parseInt(a as string) - parseInt(b as string);
    });

    return (
      <div className="p-8 bg-bg-primary">
        <h1 className="text-3xl font-bold mb-8 text-text-primary">
          Z-Index Scale
        </h1>
        <div className="border border-border-primary rounded-lg p-4 bg-bg-secondary">
          <div className="flex flex-wrap gap-4">
            {zIndexEntries.map(([name]) => {
              return <CopyButton key={name} text={name} />;
            })}
          </div>
        </div>
      </div>
    );
  },
};

