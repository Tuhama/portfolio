import type { MetadataRoute } from "next";
import { locales } from "@/i18n/locales";
import { absoluteLanguageAlternates, absoluteUrl } from "@/lib/urls";

const routes = [
  { path: "/", changeFrequency: "monthly" as const, priority: 1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: absoluteUrl(locale, route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: absoluteLanguageAlternates(route.path),
      },
    })),
  );
}
