// checkbox component stories
import Checkbox from "./Checkbox";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Checkbox checked state",
    },
    disabled: {
      control: "boolean",
      description: "Checkbox disabled state",
    },
    onChange: {
      action: "onChange",
      description: "Checkbox change event",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;

export const Interactive: StoryObj<typeof Checkbox> = {
  args: {
    checked: false,
    disabled: false,
    className: "",
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(newChecked) => {
          setChecked(newChecked);
          args.onChange?.(newChecked);
        }}
      />
    );
  },
};

export const AllVariants: StoryObj<typeof Checkbox> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args) => {
    const checked = args?.checked || false;
    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="flex items-center gap-2">
          <Checkbox {...args} checked={checked} /> (checked)
          <Checkbox {...args} checked={!checked} /> (unchecked)
        </div>
      </div>
    );
  },
};
