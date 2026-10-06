import {
  Briefcase,
  Building2,
  Code2,
  Database,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Messages } from "next-intl";

type ProjectKey = keyof Messages["Projects"]["items"];
type RoleKey = keyof Messages["Experience"]["items"];
type SkillKey = keyof Messages["Skills"]["groups"];

type ProjectLinks = {
  github?: string;
  live?: string;
  liveLabel?: "view_package";
};

type ProjectEntry = {
  key: ProjectKey;
  image: string;
  links?: ProjectLinks;
};

type RoleEntry = {
  key: RoleKey;
  icon: LucideIcon;
};

type SkillEntry = {
  key: SkillKey;
  icon: LucideIcon;
};

function complete<Entry extends { readonly key: string }>() {
  return <const Entries extends readonly Entry[]>(
    entries: Exclude<Entry["key"], Entries[number]["key"]> extends never
      ? Entries
      : Exclude<Entry["key"], Entries[number]["key"]>,
  ): readonly Entry[] => entries as readonly Entry[];
}

const projects = complete<ProjectEntry>()([
  {
    key: "bpro",
    image: "/assets/projects/BProERP.png",
  },
  {
    key: "translationManager",
    image: "/assets/projects/TranslationManager.png",
    links: {
      live: "https://www.npmjs.com/package/@tuhama/translation-manager",
      liveLabel: "view_package",
    },
  },
  {
    key: "glc",
    image: "/assets/projects/GLC.png",
    links: { live: "https://system.glc-qa.com" },
  },
]);

const roles = complete<RoleEntry>()([
  { key: "freelance", icon: Sparkles },
  { key: "bpro", icon: Briefcase },
  { key: "directorate", icon: Building2 },
  { key: "miditec", icon: Code2 },
]);

const skills = complete<SkillEntry>()([
  { key: "backend", icon: Database },
  { key: "frontend", icon: Code2 },
  { key: "security", icon: ShieldCheck },
]);

export const catalog = { projects, roles, skills };
