import { defaultLocale, locales } from "@/i18n/locales";
import { SITE, getSiteUrl } from "@/lib/site";
import { absoluteUrl } from "@/lib/urls";

export function personProfileJsonLd({
  locale,
  jobTitle,
  description,
}: {
  locale: string;
  jobTitle: string;
  description: string;
}) {
  const origin = getSiteUrl();
  const pageUrl = absoluteUrl(locale);
  const personId = `${origin}/#person`;
  const websiteId = `${origin}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: origin,
        name: SITE.brand,
        inLanguage: [...locales],
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl.replace(/\/$/, "")}/#profile`,
        url: pageUrl,
        name: SITE.name,
        description,
        inLanguage: locale,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: SITE.name,
        givenName: SITE.givenName,
        familyName: SITE.familyName,
        url: absoluteUrl(defaultLocale),
        image: absoluteUrl(locale, "/og"),
        email: SITE.email,
        jobTitle,
        description,
        address: {
          "@type": "PostalAddress",
          addressCountry: "DE",
        },
        knowsLanguage: ["English", "German", "Arabic"],
        knowsAbout: [...SITE.expertise],
        sameAs: [SITE.github, SITE.linkedin],
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
