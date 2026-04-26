import config from "../site.config";

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) return config.name;
  return `${pageTitle} — ${config.name}`;
}

export function buildDescription(desc?: string): string {
  return desc ?? config.description;
}

export function buildCanonical(pathname: string): string {
  const clean =
    pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const base = `https://${config.domain}`;
  return `${base}${clean}`;
}

export function buildOgImage(slug?: string): string {
  const path = slug ? `/og/${slug}.png` : (config.seo.defaultOgImage ?? "/og/default.png");
  return path;
}

export const DEFAULT_OG_IMAGE = buildOgImage();
