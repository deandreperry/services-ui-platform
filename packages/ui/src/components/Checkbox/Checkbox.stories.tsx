import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Notify me when processing is complete",
    description: "Email and in-app notifications will use your workspace preferences."
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true
  }
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Select all media"
  }
};
