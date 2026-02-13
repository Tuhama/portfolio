"use client";

import { useTranslations } from "next-intl";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export function Projects() {
  const t = useTranslations("Projects");

  const items = [
    {
      key: "bpro",
      image: "/assets/projects/BProERP.png",
      links: {},
    },
    {
      key: "mercato",
      image: "/assets/projects/mercato-b2b.png",
      links: {
        live: "https://dev.mercato-b2b.com/login",
      },
    },
    {
      key: "glc",
      image: "/assets/projects/ecommerce-platform.png",
      links: {
        live: "#",
      },
    },
  ];

  return (
    <section id="projects" className="w-full py-24 space-y-12">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <ProjectCard
            key={item.key}
            title={t(`items.${item.key}.title`)}
            description={t(`items.${item.key}.description`)}
            image={item.image}
            tags={t.raw(`items.${item.key}.tags`)}
            links={item.links}
          />
        ))}
      </div>
    </section>
  );
}
