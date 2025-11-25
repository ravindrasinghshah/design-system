/**
 * Border Radius Story
 */

import type { StoryObj } from "@storybook/react-vite";
import { tokens, CopyButton } from "./shared";

export const BorderRadius: StoryObj = {
  render: () => {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Border Radius</h1>
        <div className="flex flex-wrap gap-4">
          {Object.entries(tokens.borderRadius).map(([name, radius]) => {
            return (
              <div
                key={name}
                className="w-[250px] space-y-2 border border-brand-tertiary rounded-lg p-4 bg-brand-primary text-brand-secondary"
              >
                <div>
                  <CopyButton text={name} />
                </div>
                <div
                  className={`w-full h-24 bg-brand-tertiary border border-brand-tertiary`}
                  style={{ borderRadius: radius }}
                />
                <div className="text-xs text-brand-secondary font-mono">
                  {radius}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
