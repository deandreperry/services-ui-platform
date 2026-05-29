import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TextField } from "./TextField";

describe("TextField", () => {
  it("connects labels and helper text", () => {
    render(<TextField label="Workspace name" helperText="Used in analytics dashboards." />);

    const input = screen.getByLabelText("Workspace name");
    expect(input).toHaveAccessibleDescription("Used in analytics dashboards.");
  });

  it("exposes validation errors to assistive technology", () => {
    render(<TextField label="Slug" error="Only lowercase letters are allowed." />);

    expect(screen.getByLabelText("Slug")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Slug")).toHaveAccessibleDescription(
      "Only lowercase letters are allowed."
    );
  });
});
