# SiteFooter

Rodapé institucional com navegação, canais de contato e acesso permanente ao Brand Book.

```tsx
<SiteFooter />
<SiteFooter currentPage="brandbook" />
```

## Propriedades

| Propriedade | Tipo | Padrão | Uso |
| --- | --- | --- | --- |
| `currentPage` | `"home" \| "brandbook"` | `"home"` | Faz as âncoras retornarem à home quando o rodapé estiver em outra rota. |

Dados de contato e links de navegação são concentrados em `src/data/site-content.ts`; atualize esse arquivo antes de alterar a estrutura do componente.
