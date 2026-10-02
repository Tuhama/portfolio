import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { SecuritySpotlight } from "@/components/SecuritySpotlight";
import { Contact } from "@/components/Contact";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return pageMetadata({
    locale,
    path: "/",
    title: t("title"),
    description: t("description"),
    absoluteTitle: true,
    profile: true,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main
      id="main"
      className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 pb-20 sm:px-6 lg:px-8"
    >
      <PersonJsonLd locale={locale} />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <SecuritySpotlight />
      <Contact />
    </main>
  );
}
