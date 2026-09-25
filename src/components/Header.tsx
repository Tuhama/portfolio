"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BuildStatus } from "./BuildStatus";
import ThemeSwitcher from "./ThemeSwitcher";
import { MobileNav } from "./MobileNav";
import { SECTION_LINKS } from "@/lib/nav";
import { SITE } from "@/lib/site";

export function Header() {
  const t = useTranslations("Navigation");
  const tBuild = useTranslations("Build");

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="absolute inset-0 border-b border-border/50 bg-background/70 opacity-90 backdrop-blur-3xl" />
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary/60 p-[2px] shadow-premium">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background text-xs font-black text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-background">
                T
              </div>
            </div>
            <span className="hidden text-xl font-black tracking-tighter sm:inline-block">
              {SITE.brand.replace(".dev", "")}
              <span className="text-primary">.</span>dev
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="group relative py-2 text-foreground/60 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t(link.key)}
                <span className="absolute start-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full group-focus-visible:w-full" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center md:flex">
            <BuildStatus alt={tBuild("alt")} />
          </div>
          <div className="flex items-center gap-3 border-s border-border/50 ps-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
