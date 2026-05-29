import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Button } from "../Button/Button";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("appears on keyboard focus and dismisses with Escape", async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Copy invite link" delay={0}>
        <Button variant="secondary">Copy</Button>
      </Tooltip>
    );

    await user.tab();
    expect(screen.getByRole("tooltip")).toHaveTextContent("Copy invite link");

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
