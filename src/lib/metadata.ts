import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import {
  languageAlternates,
  localizedPath,
  openGraphAlternateLocales,
  openGraphLocale,
} from "@/lib/urls";

export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const canonical = localizedPath(locale, path);
  const image = localizedPath(locale, "/og");

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      siteName: SITE.brand,
      title,
      description,
      url: canonical,
      locale: openGraphLocale(locale),
      alternateLocale: openGraphAlternateLocales(locale),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
