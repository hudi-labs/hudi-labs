import type { Product } from "@/types/site";
import { DeliveryInterface } from "./DeliveryInterface";

type ProductShowcaseProps = {
  product: Product;
  reversed?: boolean;
};

function ProductInterface({ product }: { product: Product }) {
  if (product.id === "deliveries") {
    return <DeliveryInterface />;
  }

  if (product.id === "esporte") {
    return (
      <div className="product-interface product-interface--esporte" aria-hidden="true">
        <div className="sport-ui-header"><span>meu esporte</span><b>⌁</b></div>
        <div className="sport-hero-card"><small>HOJE • 20H</small><strong>Fut7 da quinta</strong><span>4 vagas disponíveis</span></div>
        <div className="sport-ui-list"><span>Próximas partidas</span><div><i /> Arena Norte <b>+3</b></div><div><i /> Clube da Vila <b>+1</b></div></div>
      </div>
    );
  }

  if (product.id === "pages") {
    return (
      <div className="product-interface product-interface--pages" aria-hidden="true">
        <div className="pages-toolbar"><span>hudi pages</span><b>Publicar</b></div>
        <div className="pages-canvas"><small>NOVA CAMPANHA</small><strong>Sua ideia merece<br />uma página clara.</strong><span className="mock-button">Começar agora</span></div>
        <div className="pages-layers"><span>Hero</span><span>Benefícios</span><span>CTA</span></div>
      </div>
    );
  }

  const unsupportedProduct: never = product.id;
  throw new Error(`Unsupported product interface: ${unsupportedProduct}`);
}

export function ProductShowcase({ product, reversed = false }: ProductShowcaseProps) {
  return (
    <article className={`product-showcase product-showcase--${product.id}${reversed ? " product-showcase--reversed" : ""}`}>
      <div className="container product-showcase__grid">
        <div className="product-copy">
          <div className="product-index">
            <span>{product.number}</span>
            <p>{product.eyebrow}</p>
          </div>
          <h3>{product.headline}</h3>
          <p>{product.description}</p>
          <ul className="product-highlights">
            {product.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <a className={product.id === "deliveries" ? "delivery-cta" : "text-link"} href={product.ctaHref}>
            {product.ctaLabel} <span aria-hidden="true">→</span>
          </a>
          {product.status === "coming-soon" && <span className="status-label">Em construção</span>}
        </div>
        <div className="product-art">
          <div className="product-art__backdrop" />
          <ProductInterface product={product} />
        </div>
      </div>
    </article>
  );
}
