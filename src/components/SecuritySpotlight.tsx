"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Lock, FileCode, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

const strategies = [
  {
    icon: ShieldCheck,
    key: "csp",
  },
  {
    icon: Lock,
    key: "auth",
  },
  {
    icon: FileCode,
    key: "rendering",
  },
  {
    icon: Server,
    key: "rsc",
  },
];

export function SecuritySpotlight() {
  const t = useTranslations("Security");

  return (
    <section id="security" className="w-full py-24 md:py-32">
      <div className="reveal-up mb-16">
        <SectionHeading title={t("title")} description={t("description")} />
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {strategies.map((item, index) => (
          <div key={item.key} className={`reveal-up stagger-${index + 1} group`}>
            <Card className="h-full overflow-hidden rounded-3xl border-border/50 bg-surface-1 p-2 shadow-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary shadow-inner transition-all duration-700 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight">
                  {t(`strategies.${item.key}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                  {t(`strategies.${item.key}.description`)}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
