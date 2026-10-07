import { screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { CommandMenu } from "../CommandMenu";
import { ReactNode } from "react";
import { renderWithIntl } from "@/test/render";

interface CommandProps {
  children?: ReactNode;
}

interface CommandDialogProps extends CommandProps {
  open?: boolean;
}

interface CommandGroupProps extends CommandProps {
  heading: string;
}

interface CommandItemProps extends CommandProps {
  onSelect?: () => void;
}

interface DialogTitleProps {
  children: ReactNode;
  className?: string;
}

// Mock the Command components
vi.mock("@/components/ui/command", () => ({
  CommandDialog: ({ children, open }: CommandDialogProps) =>
    open ? <div data-testid="command-dialog">{children}</div> : null,
  CommandInput: () => <input />,
  CommandList: ({ children }: CommandProps) => <div>{children}</div>,
  CommandEmpty: ({ children }: CommandProps) => <div>{children}</div>,
  CommandGroup: ({ children, heading }: CommandGroupProps) => (
    <div>
      <h3>{heading}</h3>
      {children}
    </div>
  ),
  CommandItem: ({ children, onSelect }: CommandItemProps) => (
    <div onClick={onSelect}>{children}</div>
  ),
  CommandSeparator: () => <hr />,
}));

// Mock DialogTitle
vi.mock("@radix-ui/react-dialog", () => ({
  DialogTitle: ({ children, className }: DialogTitleProps) => (
    <h2 className={className}>{children}</h2>
  ),
}));

describe("CommandMenu", () => {
  it("renders the keyboard shortcut hint", () => {
    renderWithIntl(<CommandMenu />);
    expect(screen.getByText(/press/i)).toBeDefined();
    expect(screen.getByText(/to search/i)).toBeDefined();
  });

  it("opens dialog when Cmd+K is pressed and shows the accessible title", async () => {
    renderWithIntl(<CommandMenu />);
    fireEvent.keyDown(document, { key: "k", metaKey: true });
    expect(
      screen.getByRole("heading", { name: "Command Menu" }),
    ).toBeTruthy();
  });
});
