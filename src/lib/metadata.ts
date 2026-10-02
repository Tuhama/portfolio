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
  profile = false,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
  profile?: boolean;
}): Metadata {
  const canonical = localizedPath(locale, path);
  const image = localizedPath(locale, "/og");
  const imageAlt = SITE.name;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: profile ? "profile" : "website",
      siteName: SITE.brand,
      title,
      description,
      url: canonical,
      locale: openGraphLocale(locale),
      alternateLocale: openGraphAlternateLocales(locale),
      ...(profile
        ? {
            firstName: SITE.givenName,
            lastName: SITE.familyName,
            username: SITE.givenName,
          }
        : {}),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}
