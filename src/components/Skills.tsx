"use client"

import { useTranslations } from "next-intl"
import { Code2, Database, ShieldCheck } from "lucide-react"

export function Skills() {
    const t = useTranslations("Skills")

    const skillGroups = [
        {
            key: "frontend",
            icon: <Code2 className="h-7 w-7 text-primary" />,
            color: "from-blue-500/10 to-cyan-500/5"
        },
        {
            key: "backend",
            icon: <Database className="h-7 w-7 text-primary" />,
            color: "from-purple-500/10 to-indigo-500/5"
        },
        {
            key: "security",
            icon: <ShieldCheck className="h-7 w-7 text-primary" />,
            color: "from-green-500/10 to-emerald-500/5"
        }
    ]

    return (
        <section id="skills" className="w-full py-32 space-y-16">
            <div className="space-y-4 text-center max-w-3xl mx-auto reveal-up">
                <h2 className="text-4xl font-extra-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50">
                    {t("title")}
                </h2>
                <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed font-medium">
                    {t("description")}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillGroups.map((group, index) => (
                    <div
                        key={group.key}
                        className={`reveal-up stagger-${index + 1} glass-morphism relative overflow-hidden rounded-3xl border border-white/5 p-8 bg-gradient-to-br ${group.color} transition-all duration-500 hover:border-primary/20 hover:scale-[1.02] group`}
                    >
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                            {group.icon}
                        </div>
                        <h3 className="mb-6 text-2xl font-bold tracking-tight">{t(`groups.${group.key}.title`)}</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {t.raw(`groups.${group.key}.items`).map((skill: string) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-lg bg-surface-1 px-3.5 py-1.5 text-sm font-semibold text-foreground/80 border border-white/10 group-hover:border-primary/20 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
