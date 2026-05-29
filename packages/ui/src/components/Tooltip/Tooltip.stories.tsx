import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "Shareable links expire after 14 days.",
    children: <Button variant="secondary">Copy link</Button>
  }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      {args.children}
    </Tooltip>
  )
};
