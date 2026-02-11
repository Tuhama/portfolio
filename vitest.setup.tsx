import "@testing-library/jest-dom";
import { vi } from "vitest";
import { ReactNode } from "react";

interface DialogComponentProps {
  children?: ReactNode;
  className?: string;
}

interface LinkProps {
  children: ReactNode;
  href: string;
}

// Mock PointerEvent for Radix UI
if (typeof window !== "undefined") {
  class CustomPointerEvent extends Event {
    constructor(type: string, props?: PointerEventInit) {
      super(type, props);
    }
  }

  // Still needs @ts-ignore as we're overriding a readonly property
  // @ts-expect-error we need to do this for "radix" components
  window.PointerEvent = CustomPointerEvent;

  window.HTMLElement.prototype.scrollIntoView = vi.fn();
  window.HTMLElement.prototype.releasePointerCapture = vi.fn();
  window.HTMLElement.prototype.hasPointerCapture = vi.fn();
  window.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
}

// Mock Radix UI Dialog
vi.mock("@radix-ui/react-dialog", () => ({
  DialogTitle: ({ children, className }: DialogComponentProps) => (
    <div className={className}>{children}</div>
  ),
  Portal: ({ children }: DialogComponentProps) => <div>{children}</div>,
  Overlay: () => null,
  Content: ({ children, className }: DialogComponentProps) => (
    <div className={className}>{children}</div>
  ),
  Root: ({ children }: DialogComponentProps) => <div>{children}</div>,
  Trigger: ({ children }: DialogComponentProps) => <div>{children}</div>,
}));

// Mock next-themes
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme: vi.fn(),
  }),
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next-intl
vi.mock("next-intl", () => ({
  useTranslations:
    () =>
    (key: string): string =>
      key,
  useLocale: () => "en",
}));

// Mock our custom i18n routing
vi.mock("@/i18n/routing", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
  }),
  usePathname: () => "/",
  Link: ({ children, href }: LinkProps) => <a href={href}>{children}</a>,
}));
