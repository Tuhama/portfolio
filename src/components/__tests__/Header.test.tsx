import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "../Header";
import { renderWithIntl } from "@/test/render";

describe("Header", () => {
  it("renders the site name link", () => {
    renderWithIntl(<Header />);
    expect(screen.getByRole("link", { name: /tuhama\.dev/i })).toBeDefined();
  });

  it("renders navigation links via translations using accessible roles", () => {
    renderWithIntl(<Header />);

    expect(screen.getAllByRole("link", { name: "About" }).length).toBeGreaterThan(
      0,
    );
    expect(
      screen.getAllByRole("link", { name: "Experience" }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: "Projects" }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: "Contact" }).length,
    ).toBeGreaterThan(0);
  });
});
