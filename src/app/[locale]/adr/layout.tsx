import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

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

export default function AdrLayout({ children }: { children: React.ReactNode }) {
  return children;
}
