import { capabilities, products } from "@/data/site-content";

describe("contrato de conteúdo público", () => {
  it("mantém os três produtos com identificadores e CTAs utilizáveis", () => {
    expect(products.map((product) => product.id)).toEqual(["deliveries", "esporte", "pages"]);
    expect(new Set(products.map((product) => product.number)).size).toBe(products.length);
    expect(products.every((product) => product.ctaHref.startsWith("#") || product.ctaHref.startsWith("http"))).toBe(true);
  });

  it("expõe capacidades técnicas sem duplicidade", () => {
    expect(capabilities).toHaveLength(6);
    expect(new Set(capabilities.map((capability) => capability.name)).size).toBe(capabilities.length);
  });

  it("leva o CTA de delivery para o produto publicado", () => {
    expect(products[0].ctaHref).toBe("https://delivery.hudi.inspira.dev.br");
  });
});
