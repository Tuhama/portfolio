import { describe, expect, it } from "vitest";
import en from "../../../messages/en.json";
import ar from "../../../messages/ar.json";
import de from "../../../messages/de.json";

function messageKeys(value: unknown, prefix = ""): string[] {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return prefix ? [prefix] : [];
  }

  return Object.entries(value as Record<string, unknown>).flatMap(
    ([key, child]) => messageKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe("message catalogs", () => {
  const englishKeys = messageKeys(en).sort();

  it.each([
    ["ar", ar],
    ["de", de],
  ] as const)("%s.json has the same keys as en.json", (_locale, messages) => {
    expect(messageKeys(messages).sort()).toEqual(englishKeys);
  });
});
