![Hudi Labs Logo](./logo/hudi-labs-logo.svg)

# Hudi Delivery - Plataforma de Pedidos

Bem-vindo ao repositório do **Hudi Delivery**! Este projeto tem como objetivo fornecer uma plataforma completa de cardápio digital e delivery para estabelecimentos, como boutiques de carnes, hamburguerias e restaurantes.

## 💡 Sobre o Projeto
O Hudi Delivery é um sistema projetado para ter uma interface limpa, responsiva e focada em conversão. O cliente final possui uma experiência fluida para navegar por categorias, buscar produtos, adicionar itens ao carrinho e realizar o login por SMS. Para os lojistas, há um painel administrativo intuitivo para gestão do cardápio e acompanhamento de pedidos.

## 📱 Estrutura da Aplicação

### Interface do Cliente (Storefront)
- **Home**: Cabeçalho com ações rápidas (Login, Carrinho, Menu), barra de busca, carrossel de combos em destaque e grade de produtos em duas colunas.
- **Login de Cliente**: Fluxo simplificado via celular (SMS).
- **Componentes Chave**:
  - `Combo Card`: Exibição de combos com badges de desconto, capacidade de pessoas e preços originais/promocionais.
  - `Product Card`: Exibição de produto com seleção de variações (ex: 1Kg, 2Kg) e botão de adicionar.

### Interface do Lojista (Admin)
- **Onboarding**: Cadastro do estabelecimento com informações básicas (nome, responsável, e-mail master, WhatsApp).
- **Login Admin**: Acesso seguro ao painel de gestão (com verificação de email/senha).

## 🎨 Visual e UI
O projeto utiliza padrões de design modernos (inspirados em sistemas como o Ant Design):
- Tipografia legível e botões com alto contraste.
- Utilização de badges para dar foco em promoções e descontos.
- Layout contido em um container principal, perfeitamente adaptado para Desktop, Tablet e Mobile.

## 🚀 Próximos Passos
O próximo passo para a evolução desta plataforma é a construção de protótipos de interface e componentes utilizando IA Gerativa de UI (como o **Stitch** e outras ferramentas), a fim de agilizar o desenvolvimento do front-end, definir o design system e padronizar o layout.
