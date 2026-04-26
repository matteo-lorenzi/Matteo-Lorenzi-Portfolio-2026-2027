import { t as en } from "./en";
import { t as fr } from "./fr";

export type Locale = "fr" | "en";

export function getTranslations(locale: Locale) {
  return locale === "fr" ? fr : en;
}
