import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { SECTION_LINKS } from "@/lib/nav";
import { SITE } from "@/lib/site";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const tContact = useTranslations("Contact");

  return (
    <footer className="w-full border-t border-border/50 bg-surface-1/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-xl font-black tracking-tighter">
              {SITE.brand.replace(".dev", "")}
              <span className="text-primary">.</span>dev
            </p>
            <p className="text-sm text-muted-foreground">{SITE.name}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm font-bold">
              <a
                href={`mailto:${SITE.email}`}
                className="text-foreground/60 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {tContact("linkedin")}
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {tContact("github")}
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {tNav(link.key)}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-sm text-muted-foreground">{t("copyright")}</p>
      </div>
    </footer>
  );
}
