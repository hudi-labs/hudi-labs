import type { Capability, Product } from "@/types/site";

export const navigationItems = [
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Brand book", href: "/brandbook/" },
] as const;

export const products: Product[] = [
  {
    id: "deliveries",
    number: "01",
    eyebrow: "Hudi Deliveries",
    headline: "Mais controle para quem vende. Mais fluidez para quem pede.",
    description:
      "Uma plataforma de gestão e automação para operações de delivery que precisam vender com clareza e operar com ritmo.",
    highlights: ["Gestão de pedidos", "Operação organizada", "Experiência de compra"],
    ctaLabel: "Conhecer Hudi Deliveries",
    ctaHref: "#contato",
    status: "available",
  },
  {
    id: "esporte",
    number: "02",
    eyebrow: "Hudi Esporte",
    headline: "Um hub para aproximar jogadores, times e oportunidades de jogar.",
    description:
      "Uma experiência pensada para transformar a vontade de jogar em encontros reais, com menos desencontro e mais comunidade.",
    highlights: ["Conectar jogadores", "Organizar partidas", "Fortalecer comunidades"],
    ctaLabel: "Acompanhar o lançamento",
    ctaHref: "#contato",
    status: "coming-soon",
  },
  {
    id: "pages",
    number: "03",
    eyebrow: "Hudi Pages",
    headline: "Presença digital direta, bonita e pronta para converter.",
    description:
      "Uma plataforma rápida para criar landing pages com mensagem clara, identidade consistente e foco no próximo passo.",
    highlights: ["Criação rápida", "Páginas de campanha", "Foco em conversão"],
    ctaLabel: "Acompanhar o lançamento",
    ctaHref: "#contato",
    status: "coming-soon",
  },
];

export const capabilities: Capability[] = [
  {
    name: "APIs REST",
    description: "Interfaces claras para conectar sistemas e experiências.",
    icon: "api",
  },
  {
    name: "Webhooks",
    description: "Eventos que mantêm operações sincronizadas no momento certo.",
    icon: "webhook",
  },
  {
    name: "Automações",
    description: "Fluxos repetitivos transformados em trabalho inteligente.",
    icon: "automation",
  },
  {
    name: "Eventos",
    description: "Produtos que reagem ao que acontece, sem perder contexto.",
    icon: "events",
  },
  {
    name: "Analytics",
    description: "Leitura de dados para decisões mais conscientes.",
    icon: "analytics",
  },
  {
    name: "Autenticação",
    description: "Acesso organizado para pessoas, equipes e produtos.",
    icon: "auth",
  },
];

export const contact = {
  email: "contato@hudilabs.com",
  github: "https://github.com/coletivo-inspira/hudi-labs",
};
