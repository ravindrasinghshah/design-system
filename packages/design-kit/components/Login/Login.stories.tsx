// login component stories

import Login from "./Login";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Login> = {
  title: "Components/Login",
  component: Login,
  tags: ["autodocs"],
  argTypes: {
    username: {
      control: "text",
      description: "Username",
    },
    password: {
      control: "text",
      description: "Password",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Login> = {
  args: {
    username: "test",
    password: "test",
  },
};

export const Interactive: StoryObj<typeof Login> = {
  args: {
    username: "",
    password: "",
  },
  render: function Render(args) {
    return <Login {...args} />;
  },
};
