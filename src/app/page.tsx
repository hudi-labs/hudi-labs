import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TechnologyGrid } from "@/components/sections/TechnologyGrid";
import { products } from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <section className="principles" aria-label="Forma de criar da Hudi Labs">
          <div className="container principles__grid">
            <p>Problemas reais antes de funcionalidades.</p>
            <p>Experiências simples sobre tecnologia robusta.</p>
            <p>Produtos conectados, propósitos independentes.</p>
          </div>
        </section>
        <Manifesto />
        <section className="ecosystem-intro" id="ecossistema" aria-labelledby="ecosystem-title">
          <div className="container ecosystem-intro__content">
            <p className="eyebrow">Produtos Hudi</p>
            <h2 id="ecosystem-title">Soluções que nascem da mesma base de inovação.</h2>
            <p>Cada produto resolve uma necessidade específica. Juntos, formam um ecossistema preparado para acompanhar novas ideias e novos mercados.</p>
          </div>
        </section>
        <section aria-label="Produtos do ecossistema Hudi">
          {products.map((product, index) => (
            <ProductShowcase key={product.id} product={product} reversed={index % 2 === 1} />
          ))}
        </section>
        <TechnologyGrid />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
