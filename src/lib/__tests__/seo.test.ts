import { afterEach, describe, expect, it } from "vitest";
import { allowIndexing } from "@/lib/indexing";
import { breadcrumbJsonLd, personProfileJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

describe("indexing", () => {
  const original = process.env.VERCEL_ENV;

  afterEach(() => {
    process.env.VERCEL_ENV = original;
  });

  it("indexes production and local builds", () => {
    process.env.VERCEL_ENV = "production";
    expect(allowIndexing()).toBe(true);
    delete process.env.VERCEL_ENV;
    expect(allowIndexing()).toBe(true);
  });

  it("keeps preview and development deployments out of search results", () => {
    process.env.VERCEL_ENV = "preview";
    expect(allowIndexing()).toBe(false);
    process.env.VERCEL_ENV = "development";
    expect(allowIndexing()).toBe(false);
  });
});

describe("structured data", () => {
  const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const originalVercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  afterEach(() => {
    process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
    process.env.VERCEL_PROJECT_PRODUCTION_URL = originalVercelUrl;
  });

  it("publishes one person entity across a localized profile page", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    const data = personProfileJsonLd({
      locale: "de",
      jobTitle: "Senior Frontend Engineer",
      description: "Profil",
    });

    expect(data["@graph"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ "@type": "WebSite", inLanguage: ["en", "ar", "de"] }),
        expect.objectContaining({
          "@type": "ProfilePage",
          inLanguage: "de",
          url: "https://tuhama.vercel.app/de",
        }),
        expect.objectContaining({
          "@type": "Person",
          name: "Tuhama Qlyshi",
          url: "https://tuhama.vercel.app",
          knowsAbout: expect.arrayContaining(["React", "Next.js"]),
          sameAs: [
            "https://github.com/Tuhama",
            "https://www.linkedin.com/in/tuhama-ql",
          ],
        }),
      ]),
    );
  });

  it("builds a breadcrumb trail in order", () => {
    expect(
      breadcrumbJsonLd([
        { name: "Home", url: "https://tuhama.vercel.app" },
        { name: "ADR", url: "https://tuhama.vercel.app/adr" },
      ]).itemListElement,
    ).toEqual([
      expect.objectContaining({ position: 1, name: "Home" }),
      expect.objectContaining({ position: 2, name: "ADR" }),
    ]);
  });
});

describe("page metadata", () => {
  it("marks the homepage as a profile and points alternates at every locale", () => {
    const metadata = pageMetadata({
      locale: "en",
      path: "/",
      title: "Tuhama Qlyshi — Senior Frontend Engineer",
      description: "Frontend engineer",
      absoluteTitle: true,
      profile: true,
    });

    expect(metadata.openGraph).toEqual(
      expect.objectContaining({
        type: "profile",
        firstName: "Tuhama",
        lastName: "Qlyshi",
        url: "/",
      }),
    );
    expect(metadata.alternates?.languages).toEqual({
      en: "/",
      ar: "/ar",
      de: "/de",
      "x-default": "/",
    });
    expect(metadata.twitter).toEqual(
      expect.objectContaining({
        images: [{ url: "/og", alt: "Tuhama Qlyshi" }],
      }),
    );
  });
});
