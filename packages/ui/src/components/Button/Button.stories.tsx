import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Create campaign"
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Saving"
  }
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete media"
  }
};
