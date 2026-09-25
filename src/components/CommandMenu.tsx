"use client";

import * as React from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useTheme } from "next-themes";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Monitor, Moon, Sun } from "lucide-react";

function getShortcutLabel() {
  if (typeof navigator === "undefined") {
    return "Ctrl+K";
  }
  const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
  return isMac ? "⌘K" : "Ctrl+K";
}

export function CommandMenu() {
  const t = useTranslations("Command");
  const { setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [shortcut, setShortcut] = React.useState("Ctrl+K");
  const router = useRouter();

  React.useEffect(() => {
    setShortcut(getShortcutLabel());
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((isOpen) => !isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const goTo = (hashPath: string) => {
    setOpen(false);
    router.push(hashPath);
  };

  return (
    <>
      <div className="fixed end-4 bottom-4 z-50 hidden items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-xs text-muted-foreground shadow-sm md:flex">
        {t.rich("hint", {
          shortcut: () => (
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              <span className="text-xs">{shortcut}</span>
            </kbd>
          ),
        })}
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">{t("title")}</DialogTitle>
        <CommandInput placeholder={t("placeholder")} />
        <CommandList>
          <CommandEmpty>{t("empty")}</CommandEmpty>
          <CommandGroup heading={t("groups.suggestions")}>
            <CommandItem onSelect={() => goTo("/")}>
              <span>{t("items.home")}</span>
            </CommandItem>
            <CommandItem onSelect={() => goTo("/#skills")}>
              <span>{t("items.skills")}</span>
            </CommandItem>
            <CommandItem onSelect={() => goTo("/#projects")}>
              <span>{t("items.projects")}</span>
            </CommandItem>
            <CommandItem onSelect={() => goTo("/#security")}>
              <span>{t("items.security")}</span>
            </CommandItem>
            <CommandItem onSelect={() => goTo("/#contact")}>
              <span>{t("items.contact")}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={t("groups.theme")}>
            <CommandItem
              onSelect={() => {
                setTheme("light");
                setOpen(false);
              }}
            >
              <Sun className="me-2 h-4 w-4" />
              <span>{t("items.light")}</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("dark");
                setOpen(false);
              }}
            >
              <Moon className="me-2 h-4 w-4" />
              <span>{t("items.dark")}</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("system");
                setOpen(false);
              }}
            >
              <Monitor className="me-2 h-4 w-4" />
              <span>{t("items.system")}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
