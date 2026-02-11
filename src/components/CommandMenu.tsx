"use client"

import * as React from "react"
import { DialogTitle } from "@radix-ui/react-dialog"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { Monitor, Moon, Sun } from "lucide-react"

export function CommandMenu() {
    const t = useTranslations("Command")
    const { setTheme } = useTheme()
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <div className="fixed bottom-4 right-4 z-50 hidden md:flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-xs text-muted-foreground shadow-sm">
                {t.rich("hint", {
                    shortcut: (chunks) => (
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                            <span className="text-xs">{chunks}</span>
                        </kbd>
                    )
                })}
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <DialogTitle className="sr-only">{t("title")}</DialogTitle>
                <CommandInput placeholder={t("placeholder")} />
                <CommandList>
                    <CommandEmpty>{t("empty")}</CommandEmpty>
                    <CommandGroup heading={t("groups.suggestions")}>
                        <CommandItem onSelect={() => { setOpen(false); router.push('/') }}>
                            <span>{t("items.home")}</span>
                        </CommandItem>
                        <CommandItem onSelect={() => { setOpen(false); router.push('/#skills') }}>
                            <span>{t("items.skills")}</span>
                        </CommandItem>
                        <CommandItem onSelect={() => { setOpen(false); router.push('/#projects') }}>
                            <span>{t("items.projects")}</span>
                        </CommandItem>
                        <CommandItem onSelect={() => { setOpen(false); router.push('/security') }}>
                            <span>{t("items.security")}</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading={t("groups.theme")}>
                        <CommandItem onSelect={() => { setTheme("light"); setOpen(false) }}>
                            <Sun className="mr-2 h-4 w-4" />
                            <span>{t("items.light")}</span>
                        </CommandItem>
                        <CommandItem onSelect={() => { setTheme("dark"); setOpen(false) }}>
                            <Moon className="mr-2 h-4 w-4" />
                            <span>{t("items.dark")}</span>
                        </CommandItem>
                        <CommandItem onSelect={() => { setTheme("system"); setOpen(false) }}>
                            <Monitor className="mr-2 h-4 w-4" />
                            <span>{t("items.system")}</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
