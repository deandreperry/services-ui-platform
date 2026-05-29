import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 420 }}>
      <CardHeader>
        <div className="sui-story-row">
          <CardTitle>Encoding queue</CardTitle>
          <Badge variant="success">Healthy</Badge>
        </div>
        <CardDescription>Transcodes completed in the last hour.</CardDescription>
      </CardHeader>
      <CardContent>
        <strong>1,284</strong> jobs processed with a 99.98% success rate.
      </CardContent>
      <CardFooter>
        <Button variant="secondary" size="sm">
          View details
        </Button>
      </CardFooter>
    </Card>
  )
};
