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
    as: {
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
    as: "h1",
    children: "The quick brown fox jumps over the lazy dog",
  },
};
export const AllVariants: StoryObj<typeof Heading> = {
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
          <Heading as="h1">(h1)</Heading>
          <Heading as="h1">{args.children}</Heading>
        </div>
        <div className="flex items-center gap-2">
          <Heading as="h2">(h2)</Heading>
          <Heading as="h2">{args.children}</Heading>
        </div>
        <div className="flex items-center gap-2">
          <Heading as="h3">(h3)</Heading>
          <Heading as="h3">{args.children}</Heading>
        </div>
        <div className="flex items-center gap-2">
          <Heading as="h4">(h4)</Heading>
          <Heading as="h4">{args.children}</Heading>
        </div>
        <div className="flex items-center gap-2">
          <Heading as="h5">(h5)</Heading>
          <Heading as="h5">{args.children}</Heading>
        </div>
        <div className="flex items-center gap-2">
          <Heading as="h6">(h6)</Heading>
          <Heading as="h6">{args.children}</Heading>
        </div>
      </div>
    );
  },
};
