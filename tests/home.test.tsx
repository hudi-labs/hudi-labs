import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("landing page pública", () => {
  it("apresenta a proposta central e os dois caminhos de conversão", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /um laboratório.*vários produtos em movimento/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: /explorar produtos/i })
        .every((link) => link.getAttribute("href") === "/produtos"),
    ).toBe(true);
    expect(screen.getByRole("link", { name: /explorar integrações/i })).toHaveAttribute("href", "/integracoes");
    expect(
      screen
        .getAllByRole("link", { name: /falar com a hudi/i })
        .some((link) => link.getAttribute("href")?.startsWith("https://wa.me/553131890669?text=")),
    ).toBe(true);
    expect(screen.queryByRole("link", { name: /^brand book$/i })).not.toBeInTheDocument();
  });

  it("ativa e restaura a interação do ecossistema conforme o cursor passa pelo hero", () => {
    render(<HomePage />);

    const hero = screen.getByRole("region", { name: /um laboratório.*vários produtos em movimento/i });
    fireEvent.mouseMove(hero, { clientX: 240, clientY: 180 });

    expect(hero).toHaveAttribute("data-pointer-active", "true");
    expect(hero).toHaveStyle({ "--glow-x": "50%", "--glow-y": "50%" });

    fireEvent.mouseLeave(hero);

    expect(hero).not.toHaveAttribute("data-pointer-active");
  });
});
