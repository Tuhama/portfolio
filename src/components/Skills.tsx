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
        <section id="skills" className="w-full py-40 space-y-24">
            <div className="space-y-6 text-center max-w-4xl mx-auto scroll-reveal">
                <h2 className="text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl text-gradient">
                    {t("title")}
                </h2>
                <p className="text-muted-foreground/80 text-lg sm:text-xl leading-relaxed font-semibold max-w-2xl mx-auto">
                    {t("description")}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {skillGroups.map((group, index) => (
                    <div
                        key={group.key}
                        className={`scroll-reveal stagger-${index + 1} glass-morphism relative overflow-hidden rounded-[2.5rem] border border-white/5 p-10 bg-gradient-to-br ${group.color} transition-all duration-700 hover:border-primary/40 hover:scale-[1.03] hover:shadow-premium group active:scale-[0.98]`}
                    >
                        {/* Decorative background element */}
                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-700" />

                        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-inner group-hover:shadow-lg group-hover:shadow-primary/30">
                            {group.icon}
                        </div>
                        <h3 className="mb-8 text-3xl font-black tracking-tight">{t(`groups.${group.key}.title`)}</h3>
                        <div className="flex flex-wrap gap-3">
                            {t.raw(`groups.${group.key}.items`).map((skill: string) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-xl bg-surface-1 px-4 py-2 text-sm font-bold text-foreground/70 border border-white/10 hover:border-primary/40 hover:text-primary transition-all duration-500 hover:scale-105 cursor-default hover:bg-primary/5 shadow-sm"
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
