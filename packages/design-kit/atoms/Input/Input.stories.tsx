/* input component stories */

import { useState } from "storybook/internal/preview-api";
import Input from "./Input";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "Input value",
    },
    onChange: {
      action: "onChange",
      description: "Input change event",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    value: "",
    onChange: () => {},
    placeholder: "placeholder text",
    disabled: false,
    required: false,
    autoComplete: "off",
    className: "",
  },
};

export const Interactive: StoryObj<typeof Input> = {
  args: {
    value: "",
    onChange: () => {},
    placeholder: "placeholder text",
    disabled: false,
    required: false,
    autoComplete: "off",
    className: "",
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value ?? "");
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          args.onChange?.(e);
        }}
      />
    );
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    value: "",
    onChange: () => {},
    placeholder: "placeholder text",
    disabled: true,
    required: false,
    autoComplete: "off",
    className: "",
  },
};

export const Required: StoryObj<typeof Input> = {
  args: {
    value: "",
    onChange: () => {},
    placeholder: "placeholder text",
    disabled: false,
    required: true,
    autoComplete: "off",
    className: "",
  },
};

export const AutoComplete: StoryObj<typeof Input> = {
  args: {
    value: "",
    onChange: () => {},
    placeholder: "placeholder text",
    disabled: false,
    required: false,
    autoComplete: "on",
    className: "",
  },
};

export const AllVariants: StoryObj<typeof Input> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: function Render(args) {
    return (
      <div className="flex flex-col gap-4">
        <Input {...args} />
        <Input {...args} disabled={true} />
        <Input {...args} required={true} />
        <Input {...args} autoComplete="on" />
      </div>
    );
  },
};
