import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { products } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Produtos | Hudi Labs",
  description: "Conheça o catálogo de produtos digitais criados pela Hudi Labs.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader currentPage="products" />
      <main>
        <section className="inner-hero inner-hero--products" aria-labelledby="products-title">
          <div className="container inner-hero__content">
            <p className="eyebrow eyebrow--light">Catálogo Hudi</p>
            <h1 id="products-title">Produtos independentes. Uma mesma base de inovação.</h1>
            <p>Uma visão direta do ecossistema. Cada produto tem identidade e jornada próprias, com a Hudi Labs conectando estratégia, engenharia e experiência.</p>
          </div>
        </section>
        <section className="section product-catalog" aria-label="Catálogo de produtos Hudi">
          <div className="container product-catalog__grid">
            {products.map((product) => (
              <article className={`catalog-card catalog-card--${product.id}`} key={product.id}>
                <div className="catalog-card__top">
                  <span>{product.number}</span>
                  <b data-status={product.status}>{product.status === "available" ? "Disponível" : product.launchLabel}</b>
                </div>
                <div className="catalog-card__mark" aria-hidden="true"><i /></div>
                <p className="eyebrow">{product.name}</p>
                <h2>{product.headline}</h2>
                <p>{product.summary}</p>
                <Link className="catalog-card__link" href={product.ctaHref}>
                  {product.status === "available" ? "Visitar produto" : "Ver lançamento"}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter currentPage="products" />
    </>
  );
}
