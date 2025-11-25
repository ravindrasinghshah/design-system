import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Button type variant",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "full"],
      description: "Button size",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the button",
    },
    children: {
      control: { type: "text" },
      description: "Button text content",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
};

export default meta;

export const Interactive: StoryObj<typeof Button> = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: false,
    children: "Click me",
    onClick: () => {},
  },
};

export const AllVariants: StoryObj<typeof Button> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args) => {
    const handleClick = args?.onClick || (() => {});
    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Types</h3>
          <div className="flex gap-3">
            <Button variant="primary" size="medium" onClick={handleClick}>
              Primary
            </Button>
            <Button variant="secondary" size="medium" onClick={handleClick}>
              Secondary
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Sizes</h3>
          <div className="flex gap-3 items-center">
            <Button variant="primary" size="small" onClick={handleClick}>
              Small
            </Button>
            <Button variant="primary" size="medium" onClick={handleClick}>
              Medium
            </Button>
            <Button variant="primary" size="large" onClick={handleClick}>
              Large
            </Button>
          </div>
          <div className="w-full max-w-md">
            <Button variant="primary" size="full" onClick={handleClick}>
              Full Width
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">States</h3>
          <div className="flex gap-3">
            <Button
              variant="primary"
              size="medium"
              onClick={handleClick}
              disabled={false}
            >
              Enabled
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={handleClick}
              disabled={true}
            >
              Disabled
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">All Combinations</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-600">Primary Type</p>
              <div className="flex gap-2 items-center flex-wrap">
                <Button variant="primary" size="small" onClick={handleClick}>
                  Primary Small
                </Button>
                <Button variant="primary" size="medium" onClick={handleClick}>
                  Primary Medium
                </Button>
                <Button variant="primary" size="large" onClick={handleClick}>
                  Primary Large
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={handleClick}
                  disabled
                >
                  Primary Disabled
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-600">Secondary Type</p>
              <div className="flex gap-2 items-center flex-wrap">
                <Button variant="secondary" size="small" onClick={handleClick}>
                  Secondary Small
                </Button>
                <Button variant="secondary" size="medium" onClick={handleClick}>
                  Secondary Medium
                </Button>
                <Button variant="secondary" size="large" onClick={handleClick}>
                  Secondary Large
                </Button>
                <Button
                  variant="secondary"
                  size="medium"
                  onClick={handleClick}
                  disabled
                >
                  Secondary Disabled
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
