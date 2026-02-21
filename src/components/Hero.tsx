import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-[95vh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center noise-overlay">
      {/* Background Abstract Blur */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-primary/10 blur-[130px] animate-pulse mix-blend-soft-light"></div>
        <div
          className="absolute -right-[10%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[130px] animate-pulse mix-blend-soft-light"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="max-w-5xl space-y-10 relative z-10 reveal-up">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-bold tracking-wider backdrop-blur-md text-primary reveal-scale stagger-1 uppercase">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-ping"></span>
          {t("badge")}
        </div>

        <h1 className="text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl reveal-up stagger-2">
          <span className="text-gradient">
            {t("title")}
          </span>
        </h1>

        <div className="mx-auto max-w-3xl space-y-8 reveal-up stagger-3">
          <p className="text-xl text-muted-foreground/80 sm:text-2xl leading-relaxed font-medium">
            {t("subtitle")}
          </p>
          <div className="flex justify-center">
            <span className="font-mono text-sm tracking-widest text-primary/80 bg-primary/5 py-2 px-6 rounded-full border border-primary/10 backdrop-blur-sm">
              {t("description")}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row pt-12 reveal-up stagger-4">
          <Button
            variant="premium"
            size="lg"
            className="h-16 w-full gap-3 px-12 sm:w-auto text-lg font-bold group shadow-premium hover:scale-[1.02] active:scale-95"
          >
            {t("actions.consultation")}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Button>
          <a
            href="/assets/docs/TuhamaQlyshi-CV.pdf"
            download="TuhamaQlyshi-CV.pdf"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="h-16 w-full gap-3 px-12 sm:w-auto text-lg font-bold hover:bg-primary/5 border-primary/20 transition-all duration-300 active:scale-95 glass-morphism"
            >
              <Download className="h-5 w-5" />
              {t("actions.cv")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
