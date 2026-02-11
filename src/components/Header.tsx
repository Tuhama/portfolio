import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BuildStatus } from "./BuildStatus";
import { useTranslations } from "next-intl";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
    const t = useTranslations("Navigation");

    return (
        <header className="sticky top-0 z-40 w-full glass-morphism border-b">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
                        <span className="hidden sm:inline-block">Tuhama.dev</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">{t("about")}</Link>
                        <Link href="/#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">{t("skills")}</Link>
                        <Link href="/#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">{t("projects")}</Link>
                        <Link href="/security" className="transition-colors hover:text-foreground/80 text-foreground/60">{t("security")}</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    <div className="hidden md:flex">
                        <BuildStatus />
                    </div>
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
