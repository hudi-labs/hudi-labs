import type { Product } from "@/types/site";

type ProductShowcaseProps = {
  product: Product;
  reversed?: boolean;
};

function ProductInterface({ product }: { product: Product }) {
  if (product.id === "deliveries") {
    return (
      <div className="product-interface product-interface--deliveries" aria-hidden="true">
        <div className="ui-window-bar"><i /><i /><i /></div>
        <div className="delivery-ui-body">
          <div className="delivery-ui-sidebar"><span>HD</span><b /><b /><b /></div>
          <div className="delivery-ui-content">
            <div className="ui-title-row"><span>Pedidos</span><em>+12%</em></div>
            <div className="ui-stat-row"><strong>32</strong><small>pedidos hoje</small></div>
            <div className="ui-order"><span>Joana M.</span><strong>R$ 58,90</strong></div>
            <div className="ui-order"><span>Marcos A.</span><strong>R$ 72,40</strong></div>
            <div className="ui-order ui-order--highlight"><span>Novo pedido</span><strong>•</strong></div>
          </div>
        </div>
      </div>
    );
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
          <a className="text-link" href={product.ctaHref}>
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
