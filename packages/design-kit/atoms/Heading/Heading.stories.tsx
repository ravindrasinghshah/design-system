// heading component stories
import Heading from ".";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Heading> = {
  title: "Atoms/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Heading text content",
    },
    level: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Heading level",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
export const Interactive: StoryObj<typeof Heading> = {
  args: {
    level: "h1",
    children: "The quick brown fox jumps over the lazy dog",
  },
};
