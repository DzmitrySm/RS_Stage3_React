import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it } from "vitest";
import AboutUsPage from "./AboutUsPage";

describe("AboutPage", () => {
  it("Renders about page", () => {
    render(<AboutUsPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "AboutPage"
    );
  });
});
