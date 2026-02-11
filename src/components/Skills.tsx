"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Code2, Database, ShieldCheck } from "lucide-react"

export function Skills() {
    const t = useTranslations("Skills")

    const skillGroups = [
        {
            key: "frontend",
            icon: <Code2 className="h-6 w-6 text-primary" />,
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            key: "backend",
            icon: <Database className="h-6 w-6 text-primary" />,
            color: "from-purple-500/20 to-indigo-500/20"
        },
        {
            key: "security",
            icon: <ShieldCheck className="h-6 w-6 text-primary" />,
            color: "from-green-500/20 to-emerald-500/20"
        }
    ]

    return (
        <section id="skills" className="w-full py-24 space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-vibrant"
                >
                    {t("title")}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                    {t("description")}
                </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillGroups.map((group, index) => (
                    <motion.div
                        key={group.key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass-morphism relative overflow-hidden rounded-2xl border border-white/5 p-6 bg-gradient-to-br ${group.color} transition-all hover:border-white/10`}
                    >
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                            {group.icon}
                        </div>
                        <h3 className="mb-4 text-xl font-bold">{t(`groups.${group.key}.title`)}</h3>
                        <div className="flex flex-wrap gap-2">
                            {t.raw(`groups.${group.key}.items`).map((skill: string) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-foreground/80 border border-white/5"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
