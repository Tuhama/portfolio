import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BuildStatus } from "./BuildStatus";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "./ThemeSwitcher";

export function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-500">
      <div className="absolute inset-0 glass-morphism border-b border-white/5 opacity-90 backdrop-blur-3xl" />
      <div className="container relative flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary/60 p-[2px] shadow-premium">
              <div className="h-full w-full rounded-[10px] bg-background flex items-center justify-center font-black text-xs text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                T
              </div>
            </div>
            <span className="hidden font-black tracking-tighter sm:inline-block text-xl">
              Tuhama<span className="text-primary">.</span>dev
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
            {[
              { name: t("about"), href: "/" },
              { name: t("skills"), href: "/#skills" },
              { name: t("projects"), href: "/#projects" },
              { name: t("security"), href: "/#security" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-2 text-foreground/60 transition-all duration-500 hover:text-primary group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center">
            <BuildStatus />
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-white/5">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
