/**
 * Typography Story
 */

import type { StoryObj } from "@storybook/react-vite";
import { tokens, TypographyArgs, CopyButton } from "./shared";

export const Typography: StoryObj<TypographyArgs> = {
  args: {
    sampleText: "The quick brown fox jumps over the lazy dog",
    fontSize: "base",
    fontWeight: "normal",
    fontFamily: "sans",
  },
  argTypes: {
    sampleText: {
      control: "text",
      description: "Sample text to display",
    },
    fontSize: {
      control: "select",
      options: Object.keys(tokens.typography.fontSize) as Array<
        keyof typeof tokens.typography.fontSize
      >,
      description: "Font size from theme",
    },
    fontWeight: {
      control: "select",
      options: Object.keys(tokens.typography.fontWeight) as Array<
        keyof typeof tokens.typography.fontWeight
      >,
      description: "Font weight from theme",
    },
    fontFamily: {
      control: "select",
      options: Object.keys(tokens.typography.fontFamily) as Array<
        keyof typeof tokens.typography.fontFamily
      >,
      description: "Font family from theme",
    },
  },
  render: (args: TypographyArgs) => {
    const fontSizeConfig = tokens.typography.fontSize[args.fontSize];
    const fontSizeValue: string = Array.isArray(fontSizeConfig)
      ? String(fontSizeConfig[0])
      : String(fontSizeConfig);
    const lineHeight: string =
      Array.isArray(fontSizeConfig) && fontSizeConfig[1]?.lineHeight
        ? fontSizeConfig[1].lineHeight
        : "normal";
    const fontWeightValue = tokens.typography.fontWeight[args.fontWeight];
    const fontFamilyValue =
      tokens.typography.fontFamily[args.fontFamily].join(", ");

    return (
      <div className="p-8 bg-brand-primary">
        <h1 className="text-3xl font-bold mb-8 text-brand-secondary">
          Typography
        </h1>

        {/* Interactive Preview */}
        <div className="mb-12 border border-border-primary rounded-lg p-6 bg-brand-primary">
          <h2 className="text-xl font-semibold mb-4 text-brand-secondary">
            Interactive Preview
          </h2>
          <div
            className="text-brand-secondary"
            style={{
              fontSize: fontSizeValue,
              lineHeight: lineHeight,
              fontWeight: fontWeightValue,
              fontFamily: fontFamilyValue,
            }}
          >
            {args.sampleText}
          </div>
          <div className="mt-4 text-xs text-brand-secondary font-mono space-y-1">
            <div>
              Font Size: {fontSizeValue} / {lineHeight}
            </div>
            <div>Font Weight: {fontWeightValue}</div>
            <div>Font Family: {fontFamilyValue}</div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Font Families */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">
              Font Families
            </h2>
            <div className="space-y-4">
              {Object.entries(tokens.typography.fontFamily).map(
                ([name, fonts]) => {
                  return (
                    <div
                      key={name}
                      className="border border-border-primary rounded-lg p-4 bg-brand-primary"
                    >
                      <div className="mb-2">
                        <CopyButton text={name} />
                      </div>
                      <div
                        className="text-lg"
                        style={{ fontFamily: fonts.join(", ") }}
                      >
                        The quick brown fox jumps over the lazy dog
                      </div>
                      <div className="text-xs text-brand-secondary font-mono mt-2">
                        {fonts.join(", ")}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Font Sizes */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">
              Font Sizes
            </h2>
            <div className="space-y-4">
              {Object.entries(tokens.typography.fontSize)
                .sort(([a], [b]) => {
                  const aKey = a as keyof typeof tokens.typography.fontSize;
                  const bKey = b as keyof typeof tokens.typography.fontSize;
                  const aConfig = tokens.typography.fontSize[aKey];
                  const bConfig = tokens.typography.fontSize[bKey];
                  const aSize = parseFloat(
                    Array.isArray(aConfig)
                      ? String(aConfig[0])
                      : String(aConfig)
                  );
                  const bSize = parseFloat(
                    Array.isArray(bConfig)
                      ? String(bConfig[0])
                      : String(bConfig)
                  );
                  return aSize - bSize;
                })
                .map(([name, size]) => {
                  const fontSizeValue: string = Array.isArray(size)
                    ? String(size[0])
                    : String(size);
                  const lineHeight: string =
                    Array.isArray(size) && size[1]?.lineHeight
                      ? size[1].lineHeight
                      : "normal";
                  return (
                    <div
                      key={name}
                      className="border border-border-primary rounded-lg p-4 bg-brand-primary"
                    >
                      <div className="mb-2">
                        <CopyButton text={name} />
                      </div>
                      <div
                        className="text-brand-secondary"
                        style={{ fontSize: fontSizeValue, lineHeight }}
                      >
                        The quick brown fox jumps over the lazy dog
                      </div>
                      <div className="text-xs text-brand-secondary font-mono mt-2">
                        {fontSizeValue} / {lineHeight}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Font Weights */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">
              Font Weights
            </h2>
            <div className="space-y-4">
              {Object.entries(tokens.typography.fontWeight)
                .sort(([, a], [, b]) => parseInt(a) - parseInt(b))
                .map(([name, weight]) => {
                  return (
                    <div
                      key={name}
                      className="border border-border-primary rounded-lg p-4 bg-brand-primary"
                    >
                      <div className="mb-2">
                        <CopyButton text={name} />
                      </div>
                      <div
                        className="text-lg text-brand-secondary"
                        style={{ fontWeight: weight }}
                      >
                        The quick brown fox jumps over the lazy dog
                      </div>
                      <div className="text-xs text-brand-secondary font-mono mt-2">
                        {weight}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  },
};
