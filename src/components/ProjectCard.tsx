"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  links,
}: ProjectCardProps) {
  const t = useTranslations("Projects");
  const { resolvedTheme } = useTheme();
  const [githubIcon, setGithubIcon] = useState("/GitHub_Invertocat_Black.svg");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGithubIcon(
      resolvedTheme === "light"
        ? "/GitHub_Invertocat_Black.svg"
        : "/GitHub_Invertocat_White.svg",
    );
  }, [resolvedTheme]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-morphism overflow-hidden border-white/5 transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full bg-white/5">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="line-clamp-2 text-muted-foreground/80">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          {links?.live && (
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2 border-primary/20 hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                {t("live_demo")}
              </a>
            </Button>
          )}
          {links?.github && (
            <Button variant="ghost" size="sm" className="px-3" asChild>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Image
                  alt=""
                  src={githubIcon}
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
