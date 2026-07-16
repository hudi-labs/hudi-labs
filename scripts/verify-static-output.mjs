import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";

const requiredPages = [
  {
    file: "out/index.html",
    content: ["Um laboratório. Vários produtos em movimento.", "Explorar integrações"],
  },
  {
    file: "out/produtos/index.html",
    content: ["Produtos independentes", "Hudi Delivery", "Hudi Esporte", "Hudi Pages"],
  },
  {
    file: "out/integracoes/index.html",
    content: ["Tecnologia que conecta", "APIs REST", "Sem endpoints fictícios"],
  },
  {
    file: "out/lancamentos/index.html",
    content: ["Novas experiências entrando em campo", "Outubro de 2026", "Quero acompanhar"],
  },
  {
    file: "out/brandbook/index.html",
    content: ["Uma identidade para ideias que viram produtos", "Hudi Labs"],
  },
];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

for (const page of requiredPages) {
  const path = resolve(page.file);
  await access(path, constants.R_OK);
  const document = await readFile(path, "utf8");

  for (const expectedContent of page.content) {
    if (!document.includes(expectedContent)) {
      throw new Error(`${page.file} does not contain expected content: ${expectedContent}`);
    }
  }

  if (document.includes("localhost")) {
    throw new Error(`${page.file} contains a localhost reference and is not portable to GitHub Pages.`);
  }
}

const home = await readFile(resolve("out/index.html"), "utf8");
const expectedBrandbookPath = `${basePath}/brandbook/`;
if (!home.includes(`href="${expectedBrandbookPath}"`)) {
  throw new Error(`The landing page does not link to the expected Brand Book path: ${expectedBrandbookPath}`);
}

if (home.includes(">Brand Book<")) {
  throw new Error("The landing page exposes Brand Book as a visible navigation label.");
}

console.log("Static export verified: Home, Produtos, Integrações, Lançamentos and Brand Book are present and portable.");
