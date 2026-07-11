# HudiLogo

Renderiza a assinatura vetorial da Hudi Labs, preservando o retângulo estrutural e o bloco translúcido que definem a marca.

```tsx
<HudiLogo className="site-logo" />
<HudiLogo compact inverted aria-label="Hudi Labs" />
```

## Propriedades

| Propriedade | Tipo | Padrão | Uso |
| --- | --- | --- | --- |
| `compact` | `boolean` | `false` | Exibe somente o símbolo geométrico. |
| `inverted` | `boolean` | `false` | Usa a versão apropriada para fundo escuro. |
| Demais props de `svg` | `ComponentPropsWithoutRef<"svg">` | — | Controlam tamanho, classe e atributos de acessibilidade. |

Não altere os cantos, as proporções ou a transparência do bloco frontal.
