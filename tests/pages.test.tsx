import { render, screen } from "@testing-library/react";
import IntegrationsPage from "@/app/integracoes/page";
import ProductsPage from "@/app/produtos/page";

describe("páginas do ecossistema", () => {
  it("renderiza o catálogo com o produto público ativo", () => {
    render(<ProductsPage />);
    expect(screen.getByRole("heading", { name: /produtos claros, úteis e prontos para escalar/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /visitar produto/i })).toHaveAttribute("href", "https://delivery.hudi.inspira.dev.br");
    expect(screen.getAllByText(/disponível/i)).toHaveLength(1);
  });

  it("explica integrações sem publicar endpoints fictícios", () => {
    render(<IntegrationsPage />);
    expect(screen.getByRole("heading", { name: /tecnologia que conecta/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /sem endpoints fictícios/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "APIs REST" })).toBeInTheDocument();
  });
});
