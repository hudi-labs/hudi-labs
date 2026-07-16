import { readFileSync } from "node:fs";

const responsiveCss = readFileSync("src/app/responsive.css", "utf8");

describe("hero responsivo", () => {
  it("separa símbolo, HUDI e produto no breakpoint móvel", () => {
    expect(responsiveCss).toContain("grid-template-columns: 72px auto");
    expect(responsiveCss).toContain("column-gap: 16px; row-gap: 18px");
    expect(responsiveCss).toContain("font-size: 1.9rem");
  });

  it("usa uma escala própria em telas amplas", () => {
    expect(responsiveCss).toContain("@media (min-width: 1800px)");
    expect(responsiveCss).toContain("1680px");
    expect(responsiveCss).toContain("font-size: 6.7rem");
  });
});
