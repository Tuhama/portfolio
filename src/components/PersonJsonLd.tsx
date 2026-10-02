import { getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/JsonLd";
import { personProfileJsonLd } from "@/lib/json-ld";

export async function PersonJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Hero" });
  const meta = await getTranslations({ locale, namespace: "Metadata" });

  return (
    <JsonLd
      data={personProfileJsonLd({
        locale,
        jobTitle: t("subtitle"),
        description: meta("description"),
      })}
    />
  );
}
