# ProductShowcase

Apresenta cada produto da família Hudi em um bloco alternável de conteúdo e mockup, mantendo a leitura em zigue-zague da landing page.

```tsx
<ProductShowcase product={products[0]} />
```

## Propriedades

| Propriedade | Tipo | Padrão | Uso |
| --- | --- | --- | --- |
| `product` | `Product` | obrigatório | Conteúdo, CTA e variante visual do produto. |
| `reversed` | `boolean` | `false` | Inverte o lado do mockup em telas largas. |

A variante reconhecida atualmente é `deliveries`. Cadastre novos produtos no tipo e em `src/data/site-content.ts` antes de reutilizar o componente.

O mockup interno é markup decorativo privado deste componente; não constitui uma API pública nem adiciona controles focáveis.
