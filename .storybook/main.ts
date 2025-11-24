import type { StorybookConfig } from "@storybook/react-vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/postcss";
import { mergeConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/design-kit/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "storybook/actions",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../"),
        },
      },
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
    });
  },
};
export default config;
