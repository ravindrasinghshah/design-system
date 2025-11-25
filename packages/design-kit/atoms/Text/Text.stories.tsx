// text component stories

import { Meta, StoryObj } from "@storybook/react-vite";
import Text from ".";
import { textSizes } from "./type";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Text content",
    },
    size: {
      control: "select",
      options: Object.keys(textSizes),
      description: "Text size",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
export const Interactive: StoryObj<typeof Text> = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    size: "base",
  },
};

export const AllVariants: StoryObj<typeof Text> = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="flex items-center gap-2">
          <Text size="xs">(xs)</Text>
          <Text size="xs">{args.children}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="sm">(sm)</Text>
          <Text size="sm">{args.children}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="base">(base)</Text>
          <Text size="base">{args.children}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="lg">(lg)</Text>
          <Text size="lg">{args.children}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="xl">(xl)</Text>
          <Text size="xl">{args.children}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="2xl">(2xl)</Text>
          <Text size="2xl">{args.children}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="3xl">(3xl)</Text>
          <Text size="3xl">{args.children}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="4xl">(4xl)</Text>
          <Text size="4xl">{args.children}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="5xl">(5xl)</Text>
          <Text size="5xl">{args.children}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="6xl">(6xl)</Text>
          <Text size="6xl">{args.children}</Text>
        </div>
      </div>
    );
  },
};
