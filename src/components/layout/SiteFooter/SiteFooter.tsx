import Link from "next/link";
import { HudiLogo } from "@/components/brand/HudiLogo";
import { contact, navigationItems } from "@/data/site-content";
import { resolveNavigationHref, type SitePage } from "@/lib/navigation";

type SiteFooterProps = {
  currentPage?: SitePage;
};

export function SiteFooter({ currentPage = "home" }: SiteFooterProps) {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-grid">
        <div className="footer-brand">
          <HudiLogo className="footer-logo" inverted />
          <p>Um laboratório de inovação para problemas reais, produtos claros e próximos passos maiores.</p>
        </div>
        <div>
          <h2>Explorar</h2>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={resolveNavigationHref(currentPage, item.href)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contato</h2>
          <ul>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={contact.github} rel="noreferrer" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Hudi Labs. Todos os direitos reservados.</span>
        <Link className="brandbook-link" href="/brandbook/" aria-label="Abrir Brand Book da Hudi Labs">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h11.5v15H7a2.5 2.5 0 0 0-2.5 2.5z" />
            <path d="M4.5 5.5v15A2.5 2.5 0 0 1 7 18" />
            <path d="M12 8h4m0 0v4m0-4-5 5" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
