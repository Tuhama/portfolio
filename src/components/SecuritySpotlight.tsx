"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
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
        <section className="w-full py-32 sm:py-40">
            <div className="mb-12 space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("title")}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">{t("description")}</p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {strategies.map((item, index) => (
                    <motion.div
                        key={item.key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group"
                    >
                        <Card className="h-full bg-surface-2 border-primary/20 shadow-lg shadow-black/5 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15">
                            <CardHeader>
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner shadow-primary/20">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-2xl font-bold tracking-tight">{t(`strategies.${item.key}.title`)}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-base leading-relaxed text-muted-foreground">{t(`strategies.${item.key}.description`)}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
