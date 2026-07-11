# Qualidade e testes

## Contratos públicos cobertos

| Teste | Tipo | Garante |
| --- | --- | --- |
| `tests/home.test.tsx` | Integração de UI | A landing renderiza a proposta institucional e os dois CTAs principais apontam para destinos válidos. |
| `tests/brandbook.test.tsx` | Integração de rota | O Brand Book tem página própria e suas navegações institucionais voltam corretamente à home. |
| `tests/site-content.test.ts` | Unitário | Produtos e capacidades possuem IDs únicos, CTAs utilizáveis e conteúdo sem duplicidade. |
| `tests/components.test.tsx` | Integração de componentes | Estados de lançamento, CTAs, capacidades técnicas e navegação de contexto mobile/Brand Book. |
| `scripts/verify-static-output.mjs` | Verificação de build | O export contém `index.html` e `brandbook/index.html`, com conteúdo crítico, link correto para a rota do Brand Book e sem referências a `localhost`. |

## Portões de qualidade

```bash
npm run typecheck
npm test
npm run build
npm run verify:export

# Executa todos os portões em sequência
npm run check
```

O workflow de GitHub Actions executa a tipagem e os testes antes do build. O deploy só recebe o artefato se todas as etapas anteriores forem concluídas com sucesso.

## Revisão visual

Antes de uma alteração relevante de interface, valide pelo menos:

1. Hero e CTAs em 1280px de largura.
2. Navegação, título e CTAs em 390px de largura.
3. Alternância dos blocos de produto sem sobreposição em ambos os tamanhos.
4. Rota `/brandbook/`, navegação para a home e âncoras internas do manual.
