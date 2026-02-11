import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { CommandMenu } from "../CommandMenu";
import { ReactNode } from "react";

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

// Mock next-intl with proper types
interface TranslationValues {
  shortcut?: (key: string) => ReactNode;
  [key: string]: unknown;
}

type TranslationFunction = {
  (key: string): string;
  rich: (key: string, values: TranslationValues) => ReactNode;
};

vi.mock("next-intl", () => ({
  useTranslations: (): TranslationFunction => {
    const t = ((key: string) => key) as TranslationFunction;
    t.rich = (key: string, values: TranslationValues) => {
      if (key === "hint" && values.shortcut) {
        return <div>hint {values.shortcut("shortcut")}</div>;
      }
      return key;
    };
    return t;
  },
}));

describe("CommandMenu", () => {
  it("renders the keyboard shortcut hint key", () => {
    render(<CommandMenu />);
    expect(screen.getByText(/hint/i)).toBeDefined();
  });

  it("opens dialog when Cmd+K is pressed and shows accessible title key", async () => {
    render(<CommandMenu />);
    fireEvent.keyDown(document, { key: "k", metaKey: true });
    expect(screen.getByRole("heading", { name: /title/i })).toBeTruthy();
  });
});
