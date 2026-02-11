import { useTranslations } from "next-intl";

export default function ADRPage() {
    const t = useTranslations("ADR");

    return (
        <div className="container py-12">
            <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
            <p className="text-muted-foreground">{t("description")}</p>
            {/* List of ADRs would go here */}
            <div className="mt-8 grid gap-4">
                <div className="p-4 border rounded-lg hover:bg-muted/50 transition cursor-pointer">
                    <h3 className="font-semibold">{t("records.001.title")}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t("decision")}</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/50 transition cursor-pointer">
                    <h3 className="font-semibold">{t("records.002.title")}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t("decision")}</p>
                </div>
            </div>
        </div>
    )
}
