/**
 * Shadows Story
 */

import type { StoryObj } from "@storybook/react-vite";
import { tokens, CopyButton } from "./shared";

export const Shadows: StoryObj = {
  render: () => {
    return (
      <div className="p-8 bg-bg-primary">
        <h1 className="text-3xl font-bold mb-8 text-text-primary">
          Box Shadows
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(tokens.boxShadow).map(([name, shadow]) => {
            return (
              <div
                key={name}
                className="space-y-4 border border-border-primary rounded-lg p-4 bg-bg-secondary"
              >
                <div>
                  <CopyButton text={name} />
                </div>
                <div
                  className="w-full h-32 rounded-lg bg-bg-secondary border border-border-primary flex items-center justify-center"
                  style={{ boxShadow: shadow }}
                >
                  <div className="text-text-secondary text-sm">Preview</div>
                </div>
                <div className="text-xs text-text-secondary font-mono break-all">
                  {shadow}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

