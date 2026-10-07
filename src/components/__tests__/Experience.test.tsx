import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Experience } from "../Experience";
import { renderWithIntl } from "@/test/render";

describe("Experience", () => {
  it("renders the experience section heading", () => {
    renderWithIntl(<Experience />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Experience" }),
    ).toBeDefined();
  });

  it("renders milestone roles, highlights, and tags", () => {
    renderWithIntl(<Experience />);
    expect(screen.getByText("Freelance Frontend Engineer")).toBeDefined();
    expect(screen.getByText("Senior Frontend Developer")).toBeDefined();
    expect(
      screen.getByText("Head of Analysis and Software Division, IT Department"),
    ).toBeDefined();
    expect(screen.getByText("Java Applets Programmer")).toBeDefined();
    expect(
      screen.getByText(/Built and published @tuhama\/translation-manager/),
    ).toBeDefined();
    expect(screen.getByText("Microsoft Graph")).toBeDefined();
    expect(screen.getByText("Jenkins")).toBeDefined();
  });
});
