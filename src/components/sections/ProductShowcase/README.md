# ProductShowcase

Apresenta cada produto da família Hudi em um bloco alternável de conteúdo e mockup, mantendo a leitura em zigue-zague da landing page.

```tsx
<ProductShowcase product={products[0]} />
<ProductShowcase product={products[1]} reversed />
```

## Propriedades

| Propriedade | Tipo | Padrão | Uso |
| --- | --- | --- | --- |
| `product` | `Product` | obrigatório | Conteúdo, status, CTA e variante visual do produto. |
| `reversed` | `boolean` | `false` | Inverte o lado do mockup em telas largas. |

As variantes reconhecidas são `deliveries`, `esporte` e `pages`. Cadastre novos produtos no tipo e em `src/data/site-content.ts` antes de reutilizar o componente.

Os mockups internos são markup decorativo privado deste componente; não constituem uma API pública nem adicionam controles focáveis.
