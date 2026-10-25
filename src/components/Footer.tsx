import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { BuildStatus } from "./BuildStatus";
import { SECTION_LINKS } from "@/lib/nav";
import { SITE } from "@/lib/site";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const tContact = useTranslations("Contact");
  const tHero = useTranslations("Hero");

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-lg text-foreground">{SITE.brand}</p>
            <p className="text-sm text-muted-foreground">{tHero("subtitle")}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {tContact("linkedin")}
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {tContact("github")}
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {tNav(link.key)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4 border-t border-border/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">{t("copyright")}</p>
          <BuildStatus />
        </div>
      </div>
    </footer>
  );
}
