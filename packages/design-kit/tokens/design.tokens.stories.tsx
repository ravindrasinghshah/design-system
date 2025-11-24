/**
 * Design Tokens Stories
 * Display all design tokens from tokens in Storybook
 * 
 * This file imports and re-exports all individual story files
 * for better organization and maintainability.
 */

import type { Meta } from "@storybook/react-vite";

// Import all stories
import { Colors } from "./stories/Colors";
import { Spacing } from "./stories/Spacing";
import { Typography } from "./stories/Typography";
import { Shadows } from "./stories/Shadows";
import { BorderRadius } from "./stories/BorderRadius";
import { Breakpoints } from "./stories/Breakpoints";
import { ZIndex } from "./stories/ZIndex";

const meta: Meta = {
  title: "Design Tokens",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

// Re-export all stories
export { Colors, Spacing, Typography, Shadows, BorderRadius, Breakpoints, ZIndex };
