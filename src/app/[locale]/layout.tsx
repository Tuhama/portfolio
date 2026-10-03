import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, Locale } from "@/i18n/routing";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CommandMenu } from "@/components/CommandMenu";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Metadata, Viewport } from "next";
import { SITE, getSiteUrl } from "@/lib/site";
import { robotsMetadata } from "@/lib/indexing";
import { openGraphAlternateLocales, openGraphLocale } from "@/lib/urls";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-arabic",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: t("title"),
      template: `%s — ${SITE.name}`,
    },
    description: t("description"),
    applicationName: SITE.brand,
    authors: [{ name: SITE.name, url: getSiteUrl() }],
    creator: SITE.name,
    verification: {
      google: "ldL_qoZ9IHBsQofgasSEG2DSnZ8WNE_DKtgtJKZuwhg",
    },
    robots: robotsMetadata(),
    openGraph: {
      type: "website",
      siteName: SITE.brand,
      locale: openGraphLocale(locale),
      alternateLocale: openGraphAlternateLocales(locale),
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const tA11y = await getTranslations({ locale, namespace: "A11y" });

  return (
    <html
      lang={locale}
      dir={locale === Locale.Arabic ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${notoSansArabic.variable} ${inter.className} min-h-screen bg-background text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <a href="#main" className="skip-link">
              {tA11y("skip")}
            </a>
            <Header />
            {children}
            <Footer />
            <CommandMenu />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
