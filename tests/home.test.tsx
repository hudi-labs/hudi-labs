import { fireEvent, render, screen } from "@testing-library/react";
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
        .some((link) => link.getAttribute("href")?.startsWith("https://wa.me/553131890669?text=")),
    ).toBe(true);
  });

  it("ativa e restaura a interação do ecossistema conforme o cursor passa pelo hero", () => {
    render(<HomePage />);

    const hero = screen.getByRole("region", { name: /tecnologia que transforma problemas reais/i });
    fireEvent.mouseMove(hero, { clientX: 240, clientY: 180 });

    expect(hero).toHaveAttribute("data-pointer-active", "true");
    expect(hero).toHaveStyle({ "--glow-x": "50%", "--glow-y": "50%" });

    fireEvent.mouseLeave(hero);

    expect(hero).not.toHaveAttribute("data-pointer-active");
  });
});
