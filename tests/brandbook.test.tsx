import { render, screen } from "@testing-library/react";
import BrandbookPage from "@/app/brandbook/page";

describe("Brand Book", () => {
  it("é uma página própria e mantém o retorno para o site principal", () => {
    render(<BrandbookPage />);

    expect(
      screen.getByRole("heading", { name: /uma identidade para ideias que viram produtos/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ir para a página inicial/i })).toHaveAttribute("href", "/");
    expect(screen.getAllByRole("link", { name: "Quem somos" }).every((link) => link.getAttribute("href") === "/#quem-somos")).toBe(true);
    expect(screen.getByRole("link", { name: /abrir brand book da hudi labs/i })).toHaveAttribute("href", "/brandbook");
    expect(screen.queryByRole("link", { name: /^brand book$/i })).not.toBeInTheDocument();
  });
});
