import Link from "next/link";
import type { CSSProperties } from "react";

const nodes = ["Produto", "API", "Evento", "Automação", "Resultado"];

export function IntegrationTeaser() {
  return (
    <section className="section integration-teaser" id="tecnologia" aria-labelledby="integration-teaser-title">
      <div className="container integration-teaser__grid">
        <div className="integration-teaser__copy">
          <p className="eyebrow">Integrações e tecnologia</p>
          <h2 id="integration-teaser-title">Uma base que faz produtos diferentes conversarem.</h2>
          <p>APIs, eventos e automações organizam o caminho entre uma ação e o resultado, sem esconder complexidade atrás de promessas vagas.</p>
          <Link className="button button--ink" href="/integracoes/">Explorar integrações <span aria-hidden="true">→</span></Link>
        </div>
        <div className="integration-flow" aria-label="Fluxo entre produto, API, eventos, automações e resultados">
          {nodes.map((node, index) => (
            <div className="integration-node" key={node} style={{ "--node-index": index } as CSSProperties}>
              <i aria-hidden="true" />
              <span>{node}</span>
              {index < nodes.length - 1 && <b aria-hidden="true"><i /></b>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
