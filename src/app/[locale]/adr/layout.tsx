import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/urls";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ADR" });

  return pageMetadata({
    locale,
    path: "/adr",
    title: t("title"),
    description: t("description"),
  });
}

export default async function AdrLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ADR" });
  const tHome = await getTranslations({ locale, namespace: "Command" });

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: tHome("items.home"), url: absoluteUrl(locale) },
          { name: t("title"), url: absoluteUrl(locale, "/adr") },
        ])}
      />
      {children}
    </>
  );
}
