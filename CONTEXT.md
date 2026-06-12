# Portfolio

Bilingual (FR/EN) static portfolio built with Astro. The site is served as two
localized URL trees; this context names the concepts that keep those trees from
drifting apart.

## Language

**Screen**:
A logical page (its body and data-fetching), independent of locale and URL.
Lives in `src/screens/` as `*Screen.astro` and takes a `locale`. One Screen
backs both the FR and EN routes for the same page.
_Avoid_: View, page component, template

**Route adapter**:
A thin file under `src/pages/<locale>/` whose only job is to map a localized
URL to a Screen at a fixed locale, e.g. `<ProjectsScreen locale="fr" />`.
_Avoid_: Page (when you mean the route file), wrapper

**Dictionary**:
The locale-keyed translation object (`src/i18n/fr.ts`, `en.ts`) returned by
`getTranslations(locale)`. `fr.ts` is the source of truth for its shape
(`type Translations`).
_Avoid_: Locale file, strings, i18n bundle

**Locale**:
`"fr" | "en"`. The single axis of variation between the two URL trees.
