import type { Messages } from "next-intl";

type ProjectKey = keyof Messages["Projects"]["items"];
type RoleKey = keyof Messages["Experience"]["items"];
type SkillKey = keyof Messages["Skills"]["groups"];
type DegreeKey = keyof Messages["Education"]["degrees"];
type LanguageKey = keyof Messages["Education"]["languages"];

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
};

type SkillEntry = {
  key: SkillKey;
};

type DegreeEntry = {
  key: DegreeKey;
  thesis?: boolean;
};

type LanguageEntry = {
  key: LanguageKey;
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
      github: "https://github.com/Tuhama/translationManager",
      live: "https://www.npmjs.com/package/@tuhama/translation-manager",
      liveLabel: "view_package",
    },
  },
  {
    key: "glc",
    image: "/assets/projects/GLC.png",
  },
]);

const roles = complete<RoleEntry>()([
  { key: "freelance" },
  { key: "bpro" },
  { key: "directorate" },
  { key: "freelanceWeb" },
  { key: "miditec" },
]);

const skills = complete<SkillEntry>()([
  { key: "backend" },
  { key: "frontend" },
  { key: "security" },
]);

const degrees = complete<DegreeEntry>()([
  { key: "master", thesis: true },
  { key: "bachelor" },
]);

const languages = complete<LanguageEntry>()([
  { key: "arabic" },
  { key: "english" },
  { key: "german" },
]);

export const catalog = { projects, roles, skills, degrees, languages };
