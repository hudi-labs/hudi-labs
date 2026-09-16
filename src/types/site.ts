export type ProductId = "deliveries";

export type Product = {
  id: ProductId;
  name: string;
  number: string;
  eyebrow: string;
  summary: string;
  headline: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type Capability = {
  name: string;
  description: string;
  icon: "api" | "webhook" | "automation" | "analytics" | "auth" | "events";
};
