import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BackendStatusBadge } from "./BackendStatusBadge";

describe("BackendStatusBadge", () => {
  it("shows Connected when backend is reachable", () => {
    render(<BackendStatusBadge connection="connected" serviceName="careflow-ai-api" />);
    expect(screen.getByRole("status")).toHaveTextContent("Connected");
  });

  it("shows Disconnected when backend is unavailable", () => {
    render(<BackendStatusBadge connection="disconnected" />);
    expect(screen.getByRole("status")).toHaveTextContent("Disconnected");
  });
});
