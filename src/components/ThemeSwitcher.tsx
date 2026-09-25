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
      <div className="flex h-10 w-[104px] items-center rounded-2xl border border-border/50 bg-surface-2/50 p-1.5 backdrop-blur-md">
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
    <div className="relative flex h-10 w-[104px] items-center overflow-hidden rounded-2xl border border-border/50 bg-surface-2/50 p-1.5 shadow-inner backdrop-blur-md">
      {options.map((opt) => (
        <button
          key={opt.name}
          onClick={() => setTheme(opt.name)}
          title={opt.tooltip}
          aria-label={opt.tooltip}
          className={`
            relative z-10 p-2 rounded-xl transition-all duration-500 flex-1 flex items-center justify-center
            ${theme === opt.name
              ? "text-primary shadow-premium bg-surface-1"
              : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
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
