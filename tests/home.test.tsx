import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("landing page pública", () => {
  it("apresenta a proposta central e os dois caminhos de conversão", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /tecnologia que transforma problemas reais/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /conhecer o ecossistema/i })).toHaveAttribute(
      "href",
      "#ecossistema",
    );
    expect(
      screen
        .getAllByRole("link", { name: /falar com a hudi/i })
        .some((link) => link.getAttribute("href") === "#contato"),
    ).toBe(true);
  });
});
