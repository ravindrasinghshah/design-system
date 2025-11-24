/**
 * Breakpoints Story
 */

import type { StoryObj } from "@storybook/react-vite";
import { tokens, CopyButton } from "./shared";

export const Breakpoints: StoryObj = {
  render: () => {
    return (
      <div className="p-8 bg-bg-primary">
        <h1 className="text-3xl font-bold mb-8 text-text-primary">
          Breakpoints
        </h1>
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-text-primary mb-2">
            <strong>Usage:</strong> Use breakpoint modifiers as prefixes to
            apply styles at specific screen sizes.
          </p>
          <p className="text-xs text-text-secondary font-mono">
            Example:{" "}
            <code className="bg-white px-2 py-1 rounded">
              sm:text-lg md:text-xl lg:text-2xl
            </code>
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {Object.entries(tokens.breakpoints)
            .sort(
              ([, a], [, b]) => parseInt(a as string) - parseInt(b as string)
            )
            .map(([name, value]) => {
              return (
                <div
                  key={name}
                  className="w-[240px] border border-primary rounded-lg p-4 bg-secondary flex flex-col"
                >
                  <div className="mb-4">
                    <div className="font-semibold text-text-primary capitalize mb-1">
                      {name}
                    </div>
                    <div className="text-xs text-text-secondary font-mono">
                      {value}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <CopyButton text={name} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  },
};

