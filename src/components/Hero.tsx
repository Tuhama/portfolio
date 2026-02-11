"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden text-center">
      {/* Background Abstract Blur */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-[100px] animate-pulse"></div>
        <div
          className="absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl space-y-12 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md text-primary"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
          {t("badge")}
        </motion.div>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            {t("title")}
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          {t("subtitle")}
          <span className="block mt-4 font-mono text-sm text-primary/80 bg-primary/5 py-1 px-3 rounded-md inline-block">
            {t("description")}
          </span>
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row pt-4">
          <Button
            variant="premium"
            size="lg"
            className="h-14 w-full gap-3 px-10 sm:w-auto text-lg group"
          >
            {t("actions.consultation")}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 w-full gap-3 px-10 sm:w-auto text-lg hover:bg-primary/5 border-primary/20"
          >
            <Download className="h-5 w-5" />
            {t("actions.cv")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
