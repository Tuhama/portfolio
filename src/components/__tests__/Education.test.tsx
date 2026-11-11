import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Education } from "../Education";
import { renderWithIntl } from "@/test/render";

describe("Education", () => {
  it("renders the section heading", () => {
    renderWithIntl(<Education />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Education & languages" }),
    ).toBeDefined();
  });

  it("renders both degrees and the thesis once", () => {
    renderWithIntl(<Education />);
    expect(screen.getByText("Master of Software Engineering")).toBeDefined();
    expect(screen.getByText("Bachelor of Software Engineering")).toBeDefined();
    expect(screen.getAllByText(/^Thesis:/)).toHaveLength(1);
  });

  it("renders each language with its level", () => {
    renderWithIntl(<Education />);
    expect(screen.getByText("German")).toBeDefined();
    expect(screen.getByText(/A2 \(B1 course in progress\)/)).toBeDefined();
    expect(screen.getByText(/Native/)).toBeDefined();
  });
});
