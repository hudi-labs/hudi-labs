import { capabilities } from "@/data/site-content";

const iconByCapability = {
  api: "⌘",
  webhook: "⌁",
  automation: "↺",
  analytics: "◔",
  auth: "◇",
  events: "✦",
} as const;

export function TechnologyGrid() {
  return (
    <section className="section technology" id="tecnologia" aria-labelledby="technology-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Integrações e tecnologia</p>
          <h2 id="technology-title">Produtos que conversam com o que move sua operação.</h2>
          <p>A base Hudi foi desenhada para conectar experiências, dados e fluxos de trabalho sem adicionar complexidade desnecessária.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.name}>
              <span className="capability-icon" aria-hidden="true">{iconByCapability[capability.icon]}</span>
              <h3>{capability.name}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
