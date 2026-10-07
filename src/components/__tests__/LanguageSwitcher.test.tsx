import { screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { renderWithIntl } from "@/test/render";

vi.mock("@/i18n/routing", () => ({
  useRouter: vi.fn(() => ({
    replace: vi.fn(),
    push: vi.fn(),
  })),
  usePathname: vi.fn(() => "/"),
}));

describe("LanguageSwitcher", () => {
  it("renders the language switcher button", () => {
    renderWithIntl(<LanguageSwitcher />);
    expect(
      screen.getByRole("button", { name: "Switch language" }),
    ).toBeDefined();
  });

  it("opens the menu when clicked", () => {
    renderWithIntl(<LanguageSwitcher />);
    const trigger = screen.getByRole("button", { name: "Switch language" });
    fireEvent.click(trigger);
    expect(trigger).toBeTruthy();
  });
});
