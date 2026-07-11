# Deploy no GitHub Pages

O workflow [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml) é o único responsável pela publicação. Ele é disparado a cada push para `main` e pode ser acionado manualmente na aba **Actions**.

## Primeira ativação

1. No GitHub, abra **Settings → Pages** do repositório.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Faça push para `main` ou rode manualmente o workflow **Validate and deploy Hudi Labs**.
4. Confirme a URL exibida no job `Deploy to GitHub Pages`.

Para este repositório público, a URL padrão esperada é `https://coletivo-inspira.github.io/hudi-labs/`. A rota do manual será `https://coletivo-inspira.github.io/hudi-labs/brandbook/`.

## Por que há um base path

GitHub Pages publica repositórios de projeto em um subdiretório. A etapa `Configure GitHub Pages` expõe esse caminho e o workflow o envia como `NEXT_PUBLIC_BASE_PATH` ao build. Assim, links internos e assets funcionam tanto localmente quanto no endereço público.

## Requisitos de segurança do workflow

- `contents: read` para checkout;
- `pages: write` para publicar o artefato;
- `id-token: write` para o deploy autenticado;
- `concurrency` cancela deploys antigos quando uma alteração mais recente chega em `main`.

O fluxo segue as ações oficiais `configure-pages`, `upload-pages-artifact` e `deploy-pages` do GitHub Pages.
