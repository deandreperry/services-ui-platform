import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("toggles with its label", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Send weekly digest" />);

    const checkbox = screen.getByRole("checkbox", { name: "Send weekly digest" });
    await user.click(screen.getByText("Send weekly digest"));

    expect(checkbox).toBeChecked();
  });

  it("supports indeterminate state", () => {
    render(<Checkbox label="Select all assets" indeterminate />);

    expect(screen.getByRole("checkbox", { name: "Select all assets" })).toHaveAttribute(
      "aria-checked",
      "mixed"
    );
  });
});
