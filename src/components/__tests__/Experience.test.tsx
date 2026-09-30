import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Experience } from "../Experience";

describe("Experience", () => {
  it("renders the experience section heading", () => {
    render(<Experience />);
    expect(screen.getByRole("heading", { level: 2 })).toBeDefined();
  });

  it("renders milestone roles and companies", () => {
    render(<Experience />);
    // With next-intl mock, translation keys are returned
    expect(screen.getByText("items.freelance.role")).toBeDefined();
    expect(screen.getByText("items.bpro.role")).toBeDefined();
    expect(screen.getByText("items.directorate.role")).toBeDefined();
    expect(screen.getByText("items.miditec.role")).toBeDefined();
  });
});
