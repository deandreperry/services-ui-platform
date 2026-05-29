import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Button } from "../Button/Button";
import { ToastProvider, ToastViewport, useToast } from "./Toast";

function ToastDemo() {
  const { addToast } = useToast();

  return (
    <Button
      onClick={() =>
        addToast({
          title: "Upload complete",
          description: "The media asset is ready for review.",
          tone: "success"
        })
      }
    >
      Show toast
    </Button>
  );
}

describe("Toast", () => {
  it("announces notifications from the provider", async () => {
    const user = userEvent.setup();

    render(
      <ToastProvider>
        <ToastDemo />
        <ToastViewport />
      </ToastProvider>
    );

    await user.click(screen.getByRole("button", { name: "Show toast" }));

    expect(screen.getByRole("status")).toHaveTextContent("Upload complete");
    expect(screen.getByRole("status")).toHaveTextContent("The media asset is ready for review.");
  });
});
