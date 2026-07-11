# Hudi Labs

Landing page institucional e Brand Book público da Hudi Labs: um laboratório de inovação que transforma problemas reais em produtos digitais claros, robustos e preparados para escalar.

O projeto é uma aplicação Next.js com export estático. Não depende de servidor em produção e é publicada automaticamente no GitHub Pages a cada push para `main`.

## Rotas públicas

| Rota | Finalidade |
| --- | --- |
| `/` | Landing page da Hudi Labs, seu manifesto, ecossistema de produtos e capacidades técnicas. |
| `/brandbook/` | Manual independente da marca, com propósito, voz, logo, paleta e diretrizes de UI. |

A navegação é bidirecional: o cabeçalho e rodapé da landing levam ao Brand Book; o Brand Book retorna às seções correspondentes da home.

## Estratégia de produto e design

O site assume a Hudi Labs como marca-mãe e usa a convenção **Hudi + categoria** para o ecossistema:

- **Hudi Deliveries** — gestão e automação de operações de delivery;
- **Hudi Esporte** — conexão entre jogadores, times e partidas;
- **Hudi Pages** — criação de landing pages rápidas e focadas em conversão.

O sistema visual preserva a identidade original: Inter, azul profundo, azul Hudi, off-white, estrutura geométrica de cantos retos e glassmorphism contido. O hero usa um mapa orbital do ecossistema como assinatura visual: uma base Hudi no centro e os produtos como extensões da mesma arquitetura.

## Tecnologia

- Next.js 16 com App Router;
- React 19 e TypeScript estrito;
- export estático com `output: "export"`;
- Vitest + Testing Library para testes unitários e de integração;
- GitHub Actions + GitHub Pages para CI/CD.

## Começar localmente

Pré-requisito: Node.js 24 e npm 11 (ou versões compatíveis).

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000` no navegador. Para uma simulação do artefato de produção:

```bash
npm run build
npm run verify:export
```

O export é gerado em `out/` e contém tanto a home quanto `/brandbook/`.

## Scripts

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run typecheck` | Executa a checagem estrita de TypeScript. |
| `npm test` | Executa os testes unitários e de integração. |
| `npm run build` | Gera o export estático de produção em `out/`. |
| `npm run verify:export` | Valida as páginas estáticas essenciais. |
| `npm run check` | Roda tipagem, testes, build e verificação do export. |

Veja os contratos e cenários em [docs/QUALITY.md](docs/QUALITY.md).

## Arquitetura

```text
src/
  app/
    page.tsx                 # composição da landing
    brandbook/page.tsx       # rota separada do manual de marca
    globals.css              # tokens e estilos responsivos
  components/
    brand/                   # assinatura SVG reutilizável
    layout/                  # navegação e rodapé compartilhados
    sections/                # hero, manifesto, produtos, tecnologia e CTA
    brandbook/               # conteúdo canônico do manual
  data/site-content.ts       # produtos, capacidades, navegação e contatos
  types/site.ts              # contratos de dados
tests/                       # testes unitários e de integração
docs/                        # qualidade e deploy
```

Dados operacionais editáveis — produtos, CTAs, status de lançamento, capacidades, navegação e contato — ficam em [`src/data/site-content.ts`](src/data/site-content.ts). A copy institucional e as diretrizes de marca ficam propositalmente co-localizadas em seus componentes de seção e no `BrandbookManual`.

## Documentação de componentes

Cada componente público possui seu próprio README, com finalidade, exemplos de uso e propriedades:

| Componente | Responsabilidade |
| --- | --- |
| [HudiLogo](src/components/brand/HudiLogo/README.md) | Assinatura vetorial da marca e variações compacta/invertida. |
| [SiteHeader](src/components/layout/SiteHeader/README.md) | Navegação global e CTA institucional. |
| [SiteFooter](src/components/layout/SiteFooter/README.md) | Navegação, contatos e vínculo persistente com o Brand Book. |
| [Hero](src/components/sections/Hero/README.md) | Proposta de valor e caminhos principais de conversão. |
| [Manifesto](src/components/sections/Manifesto/README.md) | Narrativa institucional da empresa-mãe. |
| [ProductShowcase](src/components/sections/ProductShowcase/README.md) | Bloco reutilizável em zigue-zague para cada produto. |
| [TechnologyGrid](src/components/sections/TechnologyGrid/README.md) | Grade de capacidades técnicas e integrações. |
| [FinalCta](src/components/sections/FinalCta/README.md) | Conversão de encerramento da página. |
| [BrandbookManual](src/components/brandbook/BrandbookManual/README.md) | Manual de marca estruturado como módulo próprio. |

## Publicação automática

O workflow [`deploy-pages.yml`](.github/workflows/deploy-pages.yml) executa estes estágios em todo push para `main`:

1. instala dependências travadas com `npm ci`;
2. executa typecheck e testes;
3. gera a versão estática usando o base path do GitHub Pages;
4. valida os arquivos públicos;
5. publica o diretório `out/` no ambiente `github-pages`.

Siga [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) para ativar o Pages pela primeira vez e verificar o endereço de produção.

## Conteúdo e manutenção

- Troque `contact.email` em `src/data/site-content.ts` pelo canal oficial antes de comunicar o site amplamente.
- Mantenha todo produto novo no tipo `Product`, na coleção `products` e nas variantes visuais de `ProductShowcase`.
- Todo componente novo deve receber um README co-localizado com exemplo e API pública.
- Toda alteração de rota, CTA ou conteúdo crítico exige atualização ou criação de teste em `tests/`.

## Acessibilidade e responsividade

- HTML semântico, rótulos de regiões e navegação com nomes acessíveis;
- CTAs são links reais para âncoras ou rotas estáticas;
- mockups são decorativos e não adicionam controles focáveis;
- layout validado em desktop e largura mobile de 390px.
