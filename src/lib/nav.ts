export const SECTION_LINKS = [
  { key: "about", href: "/" },
  { key: "skills", href: "/#skills" },
  { key: "projects", href: "/#projects" },
  { key: "security", href: "/#security" },
  { key: "contact", href: "/#contact" },
] as const;

export type SectionLinkKey = (typeof SECTION_LINKS)[number]["key"];
