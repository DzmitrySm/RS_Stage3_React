import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it } from "vitest";
import WrappedApp from "../App";

describe("Mainpage", () => {
  it("Renders img at main page", () => {
    render(<WrappedApp />);
    const img = screen.getAllByRole("img");
    expect(img[0]).toHaveClass("card_image");
  });
});

describe("Mainpage", () => {
  it("Renders all images at main page", () => {
    render(<WrappedApp />);
    const img = screen.getAllByRole("img");
    expect(img).toHaveLength(8);
  });
});

describe("Mainpage", () => {
  it("Renders input search at main page", () => {
    render(<WrappedApp />);
    const input = screen.getByTestId("input_test_search");
    expect(input).toHaveClass("input_search");
  });
});
