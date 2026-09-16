export type SitePage = "home" | "products" | "integrations" | "brandbook";

export function resolveNavigationHref(currentPage: SitePage, href: string) {
  return currentPage !== "home" && href.startsWith("#") ? `/${href}` : href;
}
