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
        <Link href="/brandbook/">Brand Book</Link>
      </div>
    </footer>
  );
}
