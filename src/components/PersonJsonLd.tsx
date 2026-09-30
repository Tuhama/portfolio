import { getTranslations } from "next-intl/server";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/urls";

export async function PersonJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Hero" });
  const meta = await getTranslations({ locale, namespace: "Metadata" });

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: absoluteUrl(locale),
    image: absoluteUrl(locale, "/og"),
    email: SITE.email,
    jobTitle: t("subtitle"),
    description: meta("description"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
    sameAs: [SITE.github, SITE.linkedin],
    knowsLanguage: ["en", "de", "ar"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
