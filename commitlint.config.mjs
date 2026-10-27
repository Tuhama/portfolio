/**
 * Conventional Commits: type(scope): summary
 * Examples: "feat(hero): add portrait", "fix(i18n): correct German date format"
 * @type {import("@commitlint/types").UserConfig}
 */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [1, "always", 100],
  },
};

export default config;
