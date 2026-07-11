# SiteHeader

Cabeçalho compartilhado entre a landing page e o Brand Book. Centraliza a navegação da marca e o CTA institucional.

```tsx
<SiteHeader currentPage="home" />
<SiteHeader currentPage="brandbook" />
```

## Propriedades

| Propriedade | Tipo | Padrão | Uso |
| --- | --- | --- | --- |
| `currentPage` | `"home" \| "brandbook"` | `"home"` | Define o item atual para leitores de tela e faz links de âncora retornarem à home quando necessário. |

Os itens de navegação são mantidos em `src/data/site-content.ts`; mantenha os destinos internos como âncoras ou rotas estáticas para compatibilidade com GitHub Pages.
