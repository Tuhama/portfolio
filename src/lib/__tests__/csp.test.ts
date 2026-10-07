import { describe, expect, it } from "vitest";
import { contentSecurityPolicy } from "@/lib/csp";

const nonce = "test-nonce";

describe("contentSecurityPolicy", () => {
  it("allows Next.js scripts by nonce and keeps inline styles for the UI", () => {
    const policy = contentSecurityPolicy({ nonce, isDev: false });

    expect(policy).toContain("default-src 'self'");
    expect(policy).toContain(
      "script-src 'self' 'nonce-test-nonce' 'strict-dynamic'",
    );
    expect(policy).toContain("style-src 'self' 'unsafe-inline'");
    expect(policy).toContain(
      "img-src 'self' blob: data:",
    );
    expect(policy).toContain("font-src 'self'");
    expect(policy).toContain("connect-src 'self'");
    expect(policy).toContain("object-src 'none'");
    expect(policy).toContain("base-uri 'self'");
    expect(policy).toContain("form-action 'self'");
    expect(policy).toContain("frame-ancestors 'none'");
    expect(policy).toContain("upgrade-insecure-requests");
    expect(policy).not.toContain("unsafe-eval");
    expect(policy).not.toContain("ws:");
  });

  it("relaxes script and connect rules for the dev server", () => {
    const policy = contentSecurityPolicy({ nonce, isDev: true });

    expect(policy).toContain("'unsafe-eval'");
    expect(policy).toContain("connect-src 'self' ws: wss:");
    expect(policy).not.toContain("upgrade-insecure-requests");
  });
});
