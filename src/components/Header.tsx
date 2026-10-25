"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { MobileNav } from "./MobileNav";
import { SECTION_LINKS } from "@/lib/nav";
import { SITE } from "@/lib/site";

const navLinkClass =
  "py-2 text-primary underline-offset-4 transition-colors hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {SITE.brand}
          </Link>
          <nav className="hidden items-center gap-6 text-sm lg:flex">
            {SECTION_LINKS.map((link) => (
              <Link key={link.key} href={link.href} className={navLinkClass}>
                {t(link.key)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
