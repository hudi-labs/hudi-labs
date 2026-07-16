import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import IntegrationsPage from "@/app/integracoes/page";
import LaunchesPage from "@/app/lancamentos/page";
import ProductsPage from "@/app/produtos/page";
import { PagesInterface } from "@/components/sections/ProductShowcase/PagesInterface";
import { SportInterface } from "@/components/sections/ProductShowcase/SportInterface";

describe("páginas do ecossistema", () => {
  it("renderiza o catálogo com os três produtos e seus destinos", () => {
    render(<ProductsPage />);
    expect(screen.getByRole("heading", { name: /produtos independentes/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /visitar produto/i })).toHaveAttribute("href", "https://delivery.hudi.inspira.dev.br");
    expect(screen.getAllByRole("link", { name: /ver lançamento/i })).toHaveLength(2);
  });

  it("explica integrações sem publicar endpoints fictícios", () => {
    render(<IntegrationsPage />);
    expect(screen.getByRole("heading", { name: /tecnologia que conecta/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /sem endpoints fictícios/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "APIs REST" })).toBeInTheDocument();
  });

  it("publica a previsão e o acompanhamento por WhatsApp", () => {
    render(<LaunchesPage />);
    expect(screen.getAllByText("Outubro de 2026")).toHaveLength(2);
    const followLinks = screen.getAllByRole("link", { name: /quero acompanhar/i });
    expect(followLinks).toHaveLength(2);
    expect(followLinks.every((link) => link.getAttribute("href")?.startsWith("https://wa.me/"))).toBe(true);
  });
});

describe("demonstrações animadas", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("avança o contexto esportivo e pausa durante hover", () => {
    const { container } = render(<SportInterface />);
    expect(screen.getByText("Fut7 da quinta")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(3200));
    expect(screen.getByText("Vôlei na praça")).toBeInTheDocument();
    const demo = container.querySelector(".product-interface--esporte")!;
    fireEvent.mouseEnter(demo);
    act(() => vi.advanceTimersByTime(6400));
    expect(screen.getByText("Vôlei na praça")).toBeInTheDocument();
  });

  it("troca o template e o conteúdo da página demonstrativa", () => {
    render(<PagesInterface />);
    expect(screen.getByText("Sua ideia merece uma página clara.")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByText("Apresente valor antes da complexidade.")).toBeInTheDocument();
  });
});
