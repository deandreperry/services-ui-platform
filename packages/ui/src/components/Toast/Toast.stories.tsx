import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button";
import { ToastProvider, ToastViewport, useToast } from "./Toast";

const meta = {
  title: "Components/Toast",
  component: ToastViewport,
  tags: ["autodocs"]
} satisfies Meta<typeof ToastViewport>;

export default meta;
type Story = StoryObj<typeof meta>;

function ToastStory() {
  const { addToast } = useToast();

  return (
    <>
      <Button
        onClick={() =>
          addToast({
            title: "Render complete",
            description: "The preview file is available in the asset library.",
            tone: "success"
          })
        }
      >
        Show toast
      </Button>
      <ToastViewport />
    </>
  );
}

export const ProviderExample: Story = {
  render: () => (
    <ToastProvider>
      <ToastStory />
    </ToastProvider>
  )
};
