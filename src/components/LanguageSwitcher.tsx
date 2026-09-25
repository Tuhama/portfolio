"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const tA11y = useTranslations("A11y");

  const handleSwitch = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
    { code: "de", label: "Deutsch" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={tA11y("switchLanguage")}
          className="group h-10 w-10 rounded-2xl border border-border/50 bg-surface-2/50 shadow-inner backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-surface-1 active:scale-95"
        >
          <Globe className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="glass-morphism mt-2 min-w-[140px] rounded-2xl border-border/50 p-2 shadow-premium"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleSwitch(lang.code)}
            className="mb-1 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 last:mb-0 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary active:scale-95"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
