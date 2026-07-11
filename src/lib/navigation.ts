export type SitePage = "home" | "brandbook";

export function resolveNavigationHref(currentPage: SitePage, href: string) {
  return currentPage === "brandbook" && href.startsWith("#") ? `/${href}` : href;
}
