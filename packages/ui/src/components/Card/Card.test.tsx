import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Card, CardContent, CardTitle } from "./Card";

describe("Card", () => {
  it("supports structured card content", () => {
    render(
      <Card>
        <CardTitle>Campaign health</CardTitle>
        <CardContent>All systems normal</CardContent>
      </Card>
    );

    expect(screen.getByRole("heading", { name: "Campaign health" })).toBeInTheDocument();
    expect(screen.getByText("All systems normal")).toBeInTheDocument();
  });
});
