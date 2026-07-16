import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getLaunchWhatsapp, products } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Lançamentos | Hudi Labs",
  description: "Acompanhe os próximos lançamentos da Hudi Labs previstos para outubro de 2026.",
};

const launchProducts = products.filter((product) => product.status === "coming-soon");

export default function LaunchesPage() {
  return (
    <>
      <SiteHeader currentPage="launches" />
      <main>
        <section className="inner-hero inner-hero--launches" aria-labelledby="launches-title">
          <div className="container inner-hero__content">
            <p className="eyebrow eyebrow--light">Próximos produtos</p>
            <h1 id="launches-title">Novas experiências entrando em campo.</h1>
            <p>Hudi Esporte e Hudi Pages estão em construção. A previsão atual para os dois lançamentos é outubro de 2026.</p>
          </div>
        </section>
        <section className="section launch-board" aria-label="Produtos com lançamento previsto">
          <div className="container launch-board__grid">
            {launchProducts.map((product) => (
              <article className={`launch-card launch-card--${product.id}`} key={product.id}>
                <div className="launch-card__date"><span>Previsão</span><strong>{product.launchLabel}</strong></div>
                <p className="eyebrow">{product.name}</p>
                <h2>{product.headline}</h2>
                <p>{product.summary}</p>
                <ul>{product.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                <a className="button button--blue" href={getLaunchWhatsapp(product.name)} rel="noreferrer" target="_blank">
                  Quero acompanhar <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter currentPage="launches" />
    </>
  );
}
