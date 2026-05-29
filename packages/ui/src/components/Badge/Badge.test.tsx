import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders status text", () => {
    render(<Badge variant="success">Live</Badge>);

    expect(screen.getByText("Live")).toHaveAttribute("data-variant", "success");
  });
});
