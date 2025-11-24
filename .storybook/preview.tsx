import type { Preview } from "@storybook/react-vite";
import React from "react";
import "../packages/design-kit/styles/index.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      defaultValue: "default",
      toolbar: {
        icon: "mirror",
        items: ["default"],
      },
    },
  },

  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default preview;
