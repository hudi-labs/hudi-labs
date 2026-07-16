import { fireEvent, render, screen, within } from "@testing-library/react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TechnologyGrid } from "@/components/sections/TechnologyGrid";
import { capabilities, products } from "@/data/site-content";
import { resolveNavigationHref } from "@/lib/navigation";

describe("componentes principais", () => {
  it("mostra o status e CTA corretos para um produto em lançamento", () => {
    render(<ProductShowcase product={products[1]} reversed />);

    expect(screen.getByRole("heading", { name: /aproximar jogadores/i })).toBeInTheDocument();
    expect(screen.getByText(/Em construção · Outubro de 2026/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /acompanhar o lançamento/i })).toHaveAttribute("href", "/lancamentos");
  });

  it("não rotula como em construção um produto disponível", () => {
    render(<ProductShowcase product={products[0]} />);

    expect(screen.queryByText("Em construção")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /conheça a hudi delivery/i })).toHaveAttribute(
      "href",
      "https://delivery.hudi.inspira.dev.br",
    );
  });

  it("renderiza todas as capacidades técnicas públicas", () => {
    render(<TechnologyGrid />);

    for (const capability of capabilities) {
      expect(screen.getByRole("heading", { name: capability.name })).toBeInTheDocument();
    }
  });

  it("preserva a navegação para a home a partir do Brand Book, inclusive no menu mobile", () => {
    render(<SiteHeader currentPage="brandbook" />);

    fireEvent.click(screen.getByLabelText("Abrir navegação"));
    const mobileNavigation = screen.getByRole("navigation", { name: "Navegação mobile" });
    expect(within(mobileNavigation).getByRole("link", { name: "Quem somos" })).toHaveAttribute(
      "href",
      "/#quem-somos",
    );
    expect(within(mobileNavigation).queryByRole("link", { name: /brand book/i })).not.toBeInTheDocument();
    expect(resolveNavigationHref("brandbook", "#quem-somos")).toBe("/#quem-somos");
    expect(resolveNavigationHref("home", "#tecnologia")).toBe("#tecnologia");
  });
});
