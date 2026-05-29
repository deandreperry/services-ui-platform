import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Tabs } from "./Tabs";

const items = [
  { value: "overview", label: "Overview", content: "Overview content" },
  { value: "analytics", label: "Analytics", content: "Analytics content" },
  { value: "settings", label: "Settings", content: "Settings content" }
];

describe("Tabs", () => {
  it("renders the selected tab panel", () => {
    render(<Tabs aria-label="Workspace sections" items={items} defaultValue="analytics" />);

    expect(screen.getByRole("tabpanel")).toHaveTextContent("Analytics content");
    expect(screen.getByRole("tab", { name: "Analytics" })).toHaveAttribute("aria-selected", "true");
  });

  it("supports arrow key navigation", async () => {
    const user = userEvent.setup();
    render(<Tabs aria-label="Workspace sections" items={items} />);

    screen.getByRole("tab", { name: "Overview" }).focus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: "Analytics" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Analytics content");
  });
});
