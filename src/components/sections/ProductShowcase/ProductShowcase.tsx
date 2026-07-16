import Link from "next/link";
import type { Product } from "@/types/site";
import { DeliveryInterface } from "./DeliveryInterface";
import { PagesInterface } from "./PagesInterface";
import { SportInterface } from "./SportInterface";

type ProductShowcaseProps = {
  product: Product;
  reversed?: boolean;
};

function ProductInterface({ product }: { product: Product }) {
  if (product.id === "deliveries") {
    return <DeliveryInterface />;
  }

  if (product.id === "esporte") {
    return <SportInterface />;
  }

  if (product.id === "pages") {
    return <PagesInterface />;
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
          <Link className="product-cta" data-product={product.id} href={product.ctaHref}>
            <span>{product.ctaLabel}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
          {product.status === "coming-soon" && <span className="status-label">Em construção · {product.launchLabel}</span>}
        </div>
        <div className="product-art">
          <div className="product-art__backdrop" />
          <ProductInterface product={product} />
        </div>
      </div>
    </article>
  );
}
