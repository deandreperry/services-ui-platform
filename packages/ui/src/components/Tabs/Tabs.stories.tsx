import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../Badge/Badge";
import { Tabs } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"]
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Campaign detail sections",
    items: [
      {
        value: "summary",
        label: "Summary",
        content: "Delivery, spend, and conversion health for this campaign."
      },
      {
        value: "creative",
        label: "Creative",
        content: "Creative performance grouped by channel and format."
      },
      {
        value: "alerts",
        label: (
          <span className="sui-story-row">
            Alerts <Badge size="sm">3</Badge>
          </span>
        ),
        content: "Three assets need review before the next scheduled flight."
      }
    ]
  }
};
