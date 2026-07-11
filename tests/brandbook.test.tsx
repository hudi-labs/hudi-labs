import { render, screen } from "@testing-library/react";
import BrandbookPage from "@/app/brandbook/page";

describe("Brand Book", () => {
  it("é uma página própria e mantém o retorno para o site principal", () => {
    render(<BrandbookPage />);

    expect(
      screen.getByRole("heading", { name: /uma identidade para ideias que viram produtos/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ir para a página inicial/i })).toHaveAttribute("href", "/");
    expect(
      screen
        .getAllByRole("link", { name: "Ecossistema" })
        .every((link) => link.getAttribute("href") === "/#ecossistema"),
    ).toBe(true);
    expect(
      screen
        .getAllByRole("link", { name: /^brand book$/i })
        .some((link) => link.getAttribute("href") === "/brandbook"),
    ).toBe(true);
  });
});
