import { afterEach, describe, expect, it } from "vitest";
import { getSiteUrl } from "@/lib/site";
import { absoluteUrl, languageAlternates, localizedPath } from "@/lib/urls";

describe("site urls", () => {
  const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const originalVercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  afterEach(() => {
    process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
    process.env.VERCEL_PROJECT_PRODUCTION_URL = originalVercelUrl;
  });

  it("builds unprefixed English paths and prefixed translations", () => {
    expect(localizedPath("en", "/")).toBe("/");
    expect(localizedPath("en", "/adr")).toBe("/adr");
    expect(localizedPath("de", "/")).toBe("/de");
    expect(localizedPath("ar", "/adr")).toBe("/ar/adr");
  });

  it("advertises every locale plus x-default", () => {
    expect(languageAlternates("/adr")).toEqual({
      en: "/adr",
      ar: "/ar/adr",
      de: "/de/adr",
      "x-default": "/adr",
    });
  });

  it("uses the published Vercel origin when no site url is configured", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    expect(getSiteUrl()).toBe("https://tuhama.vercel.app");
    expect(absoluteUrl("en")).toBe("https://tuhama.vercel.app");
  });

  it("uses the configured site origin for absolute urls", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com/";
    expect(getSiteUrl()).toBe("https://example.com");
    expect(absoluteUrl("en")).toBe("https://example.com");
    expect(absoluteUrl("de", "/adr")).toBe("https://example.com/de/adr");
  });
});
