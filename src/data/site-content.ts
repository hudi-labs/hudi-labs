import type { Capability, Product } from "@/types/site";

export const navigationItems = [
  { label: "Produtos", href: "/produtos/", page: "products" },
  { label: "Integrações", href: "/integracoes/", page: "integrations" },
  { label: "Quem somos", href: "#quem-somos", page: "home" },
] as const;

export const products: Product[] = [
  {
    id: "deliveries",
    name: "Hudi Delivery",
    number: "01",
    eyebrow: "Hudi Delivery",
    summary: "Gestão e automação para operações de delivery venderem e operarem com mais clareza.",
    headline: "Mais controle para quem vende. Mais fluidez para quem pede.",
    description:
      "Uma plataforma de gestão e automação para operações de delivery que precisam vender com clareza e operar com ritmo.",
    highlights: ["Gestão de pedidos", "Operação organizada", "Experiência de compra"],
    ctaLabel: "Conheça a Hudi Delivery",
    ctaHref: "https://delivery.hudi.inspira.dev.br",
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
  whatsapp:
    "https://wa.me/553131890669?text=Ol%C3%A1%2C%20Lino!%20Vim%20pelo%20site%20da%20Hudi%20e%20gostaria%20de%20conversar.",
};
