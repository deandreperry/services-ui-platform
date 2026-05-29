import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: {
    label: "Campaign name",
    placeholder: "Spring launch",
    helperText: "Use a name product teams can recognize."
  }
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    label: "Workspace slug",
    defaultValue: "Brand Launch",
    error: "Use lowercase letters, numbers, and hyphens."
  }
};

export const Large: Story = {
  args: {
    size: "lg"
  }
};
