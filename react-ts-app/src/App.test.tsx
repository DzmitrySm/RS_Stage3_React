import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it } from "vitest";
import WrappedApp from "./App";

describe("App", () => {
  it("Renders main page", () => {
    render(<WrappedApp />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Mainpage"
    );
  });
});
