const colors = [
  { name: "Azul profundo", value: "#1E3A8A", note: "Estrutura, títulos e confiança.", className: "swatch--deep" },
  { name: "Azul Hudi", value: "#3B82F6", note: "Ações, foco e tecnologia.", className: "swatch--bright" },
  { name: "Azul claro", value: "#60A5FA", note: "Luz, transparência e camadas.", className: "swatch--light" },
  { name: "Cinza ardósia", value: "#64748B", note: "Informação secundária.", className: "swatch--slate" },
  { name: "Off-white", value: "#F8FAFC", note: "Respiro e contraste sereno.", className: "swatch--offwhite" },
];

export function BrandbookManual() {
  return (
    <main className="brandbook">
      <section className="brandbook-hero" aria-labelledby="brandbook-title">
        <div className="container brandbook-hero__content">
          <p className="eyebrow eyebrow--light">Hudi Labs · Manual de marca</p>
          <h1 id="brandbook-title">Uma identidade para ideias que viram produtos.</h1>
          <p>Este manual traduz a Hudi Labs em escolhas verbais, visuais e de interface para que cada ponto de contato pareça parte do mesmo ecossistema.</p>
          <nav className="brandbook-anchor-nav" aria-label="Seções do Brand Book">
            <a href="#proposito">Propósito</a>
            <a href="#voz">Voz</a>
            <a href="#identidade">Identidade</a>
            <a href="#cores">Cores</a>
            <a href="#ui">UI</a>
          </nav>
        </div>
      </section>

      <section className="brandbook-section" id="proposito">
        <div className="container brandbook-split">
          <p className="eyebrow">01 · Propósito</p>
          <div>
            <h2>Transformar complexidade em soluções que as pessoas querem usar.</h2>
            <p className="brandbook-lead">A Hudi Labs existe para olhar para problemas reais com curiosidade, construir respostas úteis e fazer a tecnologia trabalhar a favor das pessoas.</p>
            <div className="manifesto-card">
              <p>Problemas reais não precisam de ferramentas genéricas. Precisam de escuta, clareza e coragem para testar caminhos melhores.</p>
              <p>Por isso criamos produtos que aproximam operações, comunidades e oportunidades — com base técnica sólida e experiências fáceis de entender.</p>
              <strong>Hudi Labs. Ideias úteis, produtos que escalam.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="brandbook-section brandbook-section--ink" id="voz">
        <div className="container brandbook-split">
          <p className="eyebrow eyebrow--light">02 · Voz e personalidade</p>
          <div>
            <h2>Direta no que importa. Humana no jeito de explicar.</h2>
            <div className="voice-grid">
              <article><strong>Prática</strong><span>Fala de benefício antes de jargão.</span></article>
              <article><strong>Confiável</strong><span>É precisa, transparente e não exagera promessas.</span></article>
              <article><strong>Moderna</strong><span>Tem ritmo, clareza e atenção ao detalhe.</span></article>
              <article><strong>Humana</strong><span>Traduz tecnologia sem afastar quem a usa.</span></article>
            </div>
          </div>
        </div>
      </section>

      <section className="brandbook-section" id="identidade">
        <div className="container brandbook-split">
          <p className="eyebrow">03 · Identidade</p>
          <div>
            <h2>Uma base firme. Uma camada que abre possibilidades.</h2>
            <p className="brandbook-lead">O símbolo une um retângulo escuro — estrutura e confiança — a um quadrado azul translúcido — tecnologia, movimento e abertura.</p>
            <div className="brand-construction">
              <div className="brand-construction__mark"><HudiLogo compact className="brand-construction__logo" aria-hidden="true" /></div>
              <div><strong>Uso correto</strong><p>Preserve cantos retos, sobreposição, respiro e contraste. Em fundos escuros, use a assinatura invertida.</p></div>
              <div><strong>Evite</strong><p>Arredondar formas, remover a transparência, distorcer proporções ou aplicar sombras pesadas ao símbolo.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="brandbook-section brandbook-section--tinted" id="cores">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">04 · Cores</p>
            <h2>Azuis que orientam. Neutros que deixam a ideia respirar.</h2>
            <p>A proporção de referência é 60% neutros, 30% azul profundo e cinzas estruturais, 10% azul Hudi para ações e destaque.</p>
          </div>
          <div className="color-grid">
            {colors.map((color) => (
              <article className="color-card" key={color.value}>
                <div className={`color-swatch ${color.className}`} />
                <strong>{color.name}</strong><code>{color.value}</code><span>{color.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brandbook-section" id="ui">
        <div className="container brandbook-split">
          <p className="eyebrow">05 · Tipografia e UI</p>
          <div>
            <h2>Inter para a leitura. Glassmorphism para mostrar profundidade sem ruído.</h2>
            <div className="ui-guidance">
              <div className="type-sample"><span>INTER</span><strong>Aa</strong><p>Regular 400 · Medium 500 · SemiBold 600 · Bold 700</p></div>
              <div className="glass-sample"><span>Camadas leves</span><strong>Foco na ação</strong><span className="glass-sample__button">Ação primária</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import { HudiLogo } from "@/components/brand/HudiLogo";
