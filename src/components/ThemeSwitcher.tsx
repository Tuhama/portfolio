"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("ThemeSwitcher");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Return a structural "shell" during SSR
  if (!mounted) {
    return (
      <div className="flex h-10 w-[104px] items-center rounded-md border border-border bg-muted p-1">
        <div className="w-8 h-8 flex-1" />
        <div className="w-8 h-8 flex-1" />
        <div className="w-8 h-8 flex-1" />
      </div>
    );
  }

  const options = [
    { name: "light", icon: <Sun size={16} />, tooltip: t("light") },
    { name: "system", icon: <Monitor size={16} />, tooltip: t("system") },
    { name: "dark", icon: <Moon size={16} />, tooltip: t("dark") },
  ];

  return (
    <div className="relative flex h-10 w-[104px] items-center overflow-hidden rounded-md border border-border bg-muted p-1">
      {options.map((opt) => (
        <button
          key={opt.name}
          onClick={() => setTheme(opt.name)}
          title={opt.tooltip}
          aria-label={opt.tooltip}
          className={`
            relative z-10 flex flex-1 items-center justify-center rounded-sm p-2 transition-colors duration-200
            ${theme === opt.name
              ? "bg-background text-foreground"
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
