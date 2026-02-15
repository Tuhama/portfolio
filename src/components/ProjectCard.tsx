"use client";

import Image from "next/image";
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
    <div className="reveal-up">
      <Card className="group glass-morphism overflow-hidden border-white/5 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full bg-white/5 relative">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        </div>
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-muted-foreground/90 text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-primary/5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary/80 border border-primary/10 group-hover:border-primary/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-3 pt-4 pb-6">
          {links?.live && (
            <Button
              variant="premium"
              size="sm"
              className="w-full gap-2 shadow-lg shadow-primary/10"
              asChild
            >
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                {t("live_demo")}
              </a>
            </Button>
          )}
          {links?.github && (
            <Button
              variant="outline"
              size="sm"
              className="px-4 border-primary/20 hover:bg-primary/10 transition-colors"
              asChild
            >
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Image
                  alt=""
                  src={githubIcon}
                  className="h-5 w-5"
                  width={20}
                  height={20}
                />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
