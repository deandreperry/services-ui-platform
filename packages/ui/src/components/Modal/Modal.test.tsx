import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Modal } from "./Modal";

describe("Modal", () => {
  it("renders an accessible dialog", () => {
    render(
      <Modal open onOpenChange={() => undefined} title="Publish campaign">
        Review the launch checklist.
      </Modal>
    );

    expect(screen.getByRole("dialog", { name: "Publish campaign" })).toBeInTheDocument();
  });

  it("closes with Escape", async () => {
    const onOpenChange = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal open onOpenChange={onOpenChange} title="Edit audience">
        Audience details
      </Modal>
    );

    await user.keyboard("{Escape}");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
