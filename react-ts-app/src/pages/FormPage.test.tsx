import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it } from "vitest";
import FormPage from "./FormPage";

describe("FormPage", () => {
  it("Renders form page", () => {
    render(<FormPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Form Page"
    );
  });
});

describe("FormPage", () => {
  it("Renders button at form page", () => {
    render(<FormPage />);
    const input = screen.getAllByRole("button");
    expect(input).toHaveLength(1);
  });
});

describe("FormPage", () => {
  it("Renders checkbox at form page", () => {
    render(<FormPage />);
    const checkbox = screen.getByRole("checkbox", { name: "" });
    expect(checkbox).toHaveClass("switcher_input");
  });
});
