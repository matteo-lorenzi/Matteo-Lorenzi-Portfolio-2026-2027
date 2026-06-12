/**
 * Lit un token de durée CSS (`--duration-*`, valeur en ms) et le convertit
 * en secondes pour GSAP. Fallback si le token est absent ou illisible.
 */
export function cssDurationSeconds(
  token: string,
  fallbackSeconds: number,
): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(
    token,
  );
  const ms = Number.parseFloat(raw);
  return Number.isFinite(ms) ? ms / 1000 : fallbackSeconds;
}
