import { useTranslations } from "next-intl";
import { ContactActions } from "@/components/ContactActions";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="w-full space-y-8 py-16 text-start md:py-24">
      <SectionHeading title={t("title")} description={t("description")} />
      <ContactActions emailLabel={t("email")} />
    </section>
  );
}
