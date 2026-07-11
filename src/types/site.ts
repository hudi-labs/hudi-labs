export type ProductStatus = "available" | "coming-soon";
export type ProductId = "deliveries" | "esporte" | "pages";

export type Product = {
  id: ProductId;
  number: string;
  eyebrow: string;
  headline: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  status: ProductStatus;
};

export type Capability = {
  name: string;
  description: string;
  icon: "api" | "webhook" | "automation" | "analytics" | "auth" | "events";
};
