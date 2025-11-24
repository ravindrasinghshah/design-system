/**
 * Colors Story
 */

import type { StoryObj } from "@storybook/react-vite";
import { tokens, CopyButton } from "./shared";

export const Colors: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: `These colors are available as Tailwind CSS utility classes. Use them with standard Tailwind prefixes:

**Semantic Colors:**
- Background: \`bg-success\`, \`bg-error\`, \`bg-warning\`, \`bg-info\`
- Text: \`text-success\`, \`text-error\`, \`text-warning\`, \`text-info\`
- Border: \`border-success\`, \`border-error\`, \`border-warning\`, \`border-info\`

**Neutral Palette:**
- Background: \`bg-neutral-100\`, \`bg-neutral-200\`, ... \`bg-neutral-950\`
- Text: \`text-neutral-100\`, \`text-neutral-200\`, ... \`text-neutral-950\`
- Border: \`border-neutral-100\`, \`border-neutral-200\`, ... \`border-neutral-950\`

**Examples:**

\`\`\`tsx
<div className="bg-success text-white">Success message</div>
<div className="bg-error text-white">Error message</div>
<div className="bg-neutral-100 text-neutral-900">Light background</div>
<div className="bg-neutral-900 text-neutral-100">Dark background</div>
\`\`\``,
      },
    },
  },
  render: () => {
    const semanticColors: Array<[string, string]> = [];
    const colorPalette: Array<[string, Record<string, string>]> = [];

    // Separate simple colors from color scales
    Object.entries(tokens.color).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === "string") {
        semanticColors.push([colorName, colorValue]);
      } else {
        colorPalette.push([colorName, colorValue as Record<string, string>]);
      }
    });

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">
          Color Palette
        </h1>

        {/* Semantic Colors */}
        {semanticColors.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Semantic Colors
            </h2>
            <div className="flex flex-wrap gap-6">
              {semanticColors.map(([colorName, colorValue]) => {
                return (
                  <div
                    key={colorName}
                    className="w-[200px] border border-border rounded-lg overflow-hidden text-foreground"
                  >
                    <div
                      className={`w-full bg-${colorName}`}
                      style={{
                        height: "120px",
                      }}
                    />
                    <div className="p-3 flex flex-row justify-center items-center gap-2">
                      <CopyButton text={colorName} />
                      <div
                        className={`text-xs font-mono text-center opacity-75`}
                      >
                        {colorValue}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Color Palette */}
        {colorPalette.map(([paletteName, paletteValues]) => (
          <div key={paletteName} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground capitalize">
              {paletteName}
            </h2>
            <div className="flex flex-wrap gap-6">
              {Object.entries(paletteValues)
                .sort(([a], [b]) => parseInt(a) - parseInt(b))
                .map(([shade, colorValue]) => {
                  const fullColorName = `${paletteName}-${shade}`;
                  return (
                    <div
                      key={shade}
                      className="w-[200px] border border-border rounded-lg overflow-hidden"
                    >
                      <div
                        className={`w-full bg-${paletteName}-${shade}`}
                        style={{
                          height: "120px",
                        }}
                      />
                      <div className="p-3 flex flex-row justify-center items-center gap-2">
                        <CopyButton text={fullColorName} />
                        <div
                          className={`text-xs font-mono text-center opacity-75`}
                        >
                          {colorValue}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

