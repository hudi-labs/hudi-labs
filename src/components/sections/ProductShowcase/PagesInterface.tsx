"use client";

import { useCyclingDemo } from "@/components/motion/useCyclingDemo";

const pageStages = [
  { template: "Evento", eyebrow: "NOVA CAMPANHA", title: "Sua ideia merece uma página clara.", action: "Começar agora" },
  { template: "Produto", eyebrow: "NOVO PRODUTO", title: "Apresente valor antes da complexidade.", action: "Quero conhecer" },
  { template: "Convite", eyebrow: "PRÓXIMO ENCONTRO", title: "Uma página pronta para reunir pessoas.", action: "Confirmar presença" },
] as const;

export function PagesInterface() {
  const { index, pause, resume } = useCyclingDemo({ length: pageStages.length, intervalMs: 3000 });
  const stage = pageStages[index];

  return (
    <div
      className="product-interface product-interface--pages"
      data-stage={index}
      aria-hidden="true"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="pages-toolbar"><span>hudi pages</span><b>Publicar</b></div>
      <div className="pages-workspace">
        <div className="pages-templates">
          <span>Template</span>
          {pageStages.map((item, itemIndex) => <i key={item.template} data-selected={itemIndex === index || undefined}>{item.template}</i>)}
        </div>
        <div className="pages-canvas" key={stage.title}>
          <small>{stage.eyebrow}</small>
          <strong>{stage.title}</strong>
          <span className="pages-copy-line" />
          <span className="mock-button">{stage.action}</span>
        </div>
        <div className="builder-cursor"><i /></div>
      </div>
      <div className="pages-layers"><span>Hero</span><span>Benefícios</span><span>CTA</span><b>Salvo</b></div>
    </div>
  );
}
