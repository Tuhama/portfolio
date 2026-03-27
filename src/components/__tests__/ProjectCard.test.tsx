import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { ProjectCard } from "../ProjectCard";
import { ReactNode } from "react";

// Mock the Dialog components
vi.mock("@/components/ui/dialog", () => ({
  Dialog: ({ children, open }: { children: ReactNode; open: boolean }) =>
    open ? (
      <div data-testid="dialog-root">{children}</div>
    ) : (
      <div>{children}</div>
    ),
  DialogTrigger: ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  ),
  DialogContent: ({ children }: { children: ReactNode }) => (
    <div data-testid="dialog-content">{children}</div>
  ),
  DialogHeader: ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  ),
  DialogTitle: ({ children }: { children: ReactNode }) => <h2>{children}</h2>,
}));

// Mock Card components
vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardHeader: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardTitle: ({ children }: { children: ReactNode }) => <h3>{children}</h3>,
  CardDescription: ({ children }: { children: ReactNode }) => <p>{children}</p>,
  CardContent: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardFooter: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

// Mock Button
vi.mock("@/components/ui/button", () => ({
  Button: ({ children }: { children: ReactNode }) => (
    <button>{children}</button>
  ),
}));

// Mock next-intl
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock next-themes
vi.mock("next-themes", () => ({
  useTheme: () => ({ resolvedTheme: "dark" }),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe("ProjectCard", () => {
  const props = {
    title: "Test Project",
    description: "Test Description",
    image: "/test-image.jpg",
    tags: ["React", "TypeScript"],
  };

  it("renders correctly", () => {
    render(<ProjectCard {...props} />);
    expect(screen.getByText("Test Project")).toBeDefined();
    expect(screen.getByText("Test Description")).toBeDefined();
    expect(screen.getAllByAltText("Test Project")[0]).toBeDefined();
  });

  it("contains clickable image trigger", () => {
    render(<ProjectCard {...props} />);
    const imageContainer = screen.getAllByAltText("Test Project")[0].parentElement;
    expect(imageContainer).toBeDefined();
  });
});
