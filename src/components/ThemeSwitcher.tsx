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

  // Return a structural "shell" during SSR to prevent the warning/flicker
  if (!mounted) {
    return (
      <div className="flex p-1 rounded-lg border h-8 w-[92] items-center bg-gray-100 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
        <div className="w-4 h-4 flex-1" />
        <div className="w-4 h-4 flex-1" />
        <div className="w-4 h-4 flex-1" />
      </div>
    );
  }

  const options = [
    { name: "light", icon: <Sun size={16} />, tooltip: t("light") },
    {
      name: "system",
      icon: <Monitor size={16} />,
      tooltip: t("system"),
    },
    { name: "dark", icon: <Moon size={16} />, tooltip: t("dark") },
  ];

  return (
    <div className={`
      flex p-1 rounded-lg border h-8 w-[92] items-center
      ${theme === 'system'
        ? 'bg-gray-100 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
        : theme === 'dark'
          ? 'bg-gray-800/50 border-gray-700'
          : 'bg-gray-100 border-gray-200'}
    `}>
      {options.map((opt) => (
        <button
          key={opt.name}
          onClick={() => setTheme(opt.name)}
          title={opt.tooltip} // Simple native tooltip
          aria-label={opt.tooltip}
          className={`
            relative p-1.5 rounded-md transition-all group
            ${
              theme === opt.name
                ? theme === 'dark'
                  ? "bg-gray-600 shadow-sm text-blue-300"
                  : theme === 'system'
                    ? "bg-white dark:bg-gray-600 shadow-sm text-blue-600 dark:text-blue-300"
                    : "bg-white shadow-sm text-blue-600"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
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
