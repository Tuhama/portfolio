"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Lock, FileCode, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <section className="w-full py-32 sm:py-48">
            <div className="mb-20 space-y-6 text-center reveal-up">
                <h2 className="text-4xl font-extra-bold tracking-tighter sm:text-5xl md:text-6xl">{t("title")}</h2>
                <p className="mx-auto max-w-[800px] text-xl text-muted-foreground leading-relaxed font-medium">{t("description")}</p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {strategies.map((item, index) => (
                    <div
                        key={item.key}
                        className={`reveal-up stagger-${index + 1} group`}
                    >
                        <Card className="h-full bg-surface-1 border-white/5 shadow-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 rounded-3xl overflow-hidden p-2">
                            <CardHeader className="space-y-6">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-inner">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-2xl font-bold tracking-tight">{t(`strategies.${item.key}.title`)}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-relaxed text-muted-foreground/90 font-medium">{t(`strategies.${item.key}.description`)}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}
