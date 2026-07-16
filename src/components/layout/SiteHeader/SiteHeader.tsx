import Link from "next/link";
import { HudiLogo } from "@/components/brand/HudiLogo";
import { contact, navigationItems } from "@/data/site-content";
import { resolveNavigationHref, type SitePage } from "@/lib/navigation";

type SiteHeaderProps = {
  currentPage?: SitePage;
};

export function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link className="brand-link" href="/" aria-label="Ir para a página inicial da Hudi Labs">
          <HudiLogo className="site-logo" />
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="header-nav">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={resolveNavigationHref(currentPage, item.href)}
                  aria-current={item.href.startsWith("/") && currentPage === item.page ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Abrir navegação">Menu <span aria-hidden="true">+</span></summary>
          <nav className="mobile-nav__panel" aria-label="Navegação mobile">
            <ul>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={resolveNavigationHref(currentPage, item.href)}>{item.label}</Link>
                </li>
              ))}
              <li><a href={contact.whatsapp} rel="noreferrer" target="_blank">Falar com a Hudi</a></li>
            </ul>
          </nav>
        </details>
        <a className="button button--header" href={contact.whatsapp} rel="noreferrer" target="_blank">
          Falar com a Hudi
        </a>
      </div>
    </header>
  );
}
