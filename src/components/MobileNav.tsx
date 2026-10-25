"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SECTION_LINKS } from "@/lib/nav";
import { SITE } from "@/lib/site";

export function MobileNav() {
  const t = useTranslations("Navigation");
  const tA11y = useTranslations("A11y");
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border border-border lg:hidden"
          aria-label={tA11y("openMenu")}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent
        closeLabel={tA11y("close")}
        className="fixed inset-y-0 start-0 top-0 left-auto right-auto h-full w-[min(20rem,85vw)] max-w-none translate-x-0 translate-y-0 content-start rounded-none border-border bg-background p-6 sm:rounded-none"
      >
        <DialogHeader className="text-start">
          <DialogTitle className="text-lg text-foreground">
            {SITE.brand}
          </DialogTitle>
        </DialogHeader>
        <nav className="mt-8 flex flex-col gap-2">
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}
