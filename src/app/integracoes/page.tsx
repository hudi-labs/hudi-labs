import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TechnologyGrid } from "@/components/sections/TechnologyGrid";

export const metadata: Metadata = {
  title: "Integrações | Hudi Labs",
  description: "Entenda como APIs, eventos e automações conectam os produtos da Hudi Labs.",
};

const flowSteps = [
  { number: "01", title: "Uma ação acontece", text: "Um pedido, cadastro, partida ou publicação gera um evento com contexto." },
  { number: "02", title: "A base organiza", text: "APIs e webhooks transportam a informação de forma previsível entre os produtos." },
  { number: "03", title: "O fluxo responde", text: "Automações executam tarefas repetitivas e analytics tornam os resultados legíveis." },
];

export default function IntegrationsPage() {
  return (
    <>
      <SiteHeader currentPage="integrations" />
      <main>
        <section className="inner-hero inner-hero--integrations" aria-labelledby="integrations-title">
          <div className="container inner-hero__content">
            <p className="eyebrow eyebrow--light">Integrações Hudi</p>
            <h1 id="integrations-title">Tecnologia que conecta sem transformar tudo em jargão.</h1>
            <p>Esta é uma visão das capacidades que orientam a base Hudi. Contratos técnicos e documentação de endpoints serão publicados conforme cada integração entrar em operação.</p>
          </div>
          <div className="container integration-orbit" aria-hidden="true">
            <span>API</span><span>EVENTO</span><span>AUTOMAÇÃO</span><i />
          </div>
        </section>
        <section className="section integration-story" aria-labelledby="integration-story-title">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Como a conexão acontece</p>
              <h2 id="integration-story-title">Do acontecimento ao resultado, com contexto preservado.</h2>
            </div>
            <div className="integration-story__grid">
              {flowSteps.map((step) => (
                <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>
              ))}
            </div>
          </div>
        </section>
        <TechnologyGrid />
        <section className="section documentation-note">
          <div className="container documentation-note__content">
            <p className="eyebrow">Documentação em evolução</p>
            <h2>Sem endpoints fictícios. Sem promessas técnicas vazias.</h2>
            <p>Quando APIs e contratos públicos estiverem disponíveis, esta página passará a apontar para schemas, autenticação, eventos suportados e exemplos verificáveis.</p>
          </div>
        </section>
      </main>
      <SiteFooter currentPage="integrations" />
    </>
  );
}
