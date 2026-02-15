import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-[95vh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background Abstract Blur */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
        <div
          className="absolute -right-[10%] -bottom-[10%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-5xl space-y-10 relative z-10 reveal-up">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold tracking-wide backdrop-blur-md text-primary reveal-scale stagger-1">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          {t("badge")}
        </div>

        <h1 className="text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl reveal-up stagger-2">
          <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent">
            {t("title")}
          </span>
        </h1>

        <div className="mx-auto max-w-3xl space-y-6 reveal-up stagger-3">
          <p className="text-xl text-muted-foreground sm:text-2xl leading-relaxed font-medium">
            {t("subtitle")}
          </p>
          <div className="flex justify-center">
            <span className="font-mono text-sm tracking-tight text-primary/90 bg-primary/10 py-1.5 px-4 rounded-full border border-primary/10">
              {t("description")}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-8 reveal-up stagger-4">
          <Button
            variant="premium"
            size="lg"
            className="h-16 w-full gap-3 px-12 sm:w-auto text-lg font-bold group shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 active:scale-95"
          >
            {t("actions.consultation")}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-16 w-full gap-3 px-12 sm:w-auto text-lg font-semibold hover:bg-primary/5 border-primary/20 transition-all duration-300 active:scale-95"
          >
            <Download className="h-5 w-5" />
            {t("actions.cv")}
          </Button>
        </div>
      </div>
    </section>
  );
}
