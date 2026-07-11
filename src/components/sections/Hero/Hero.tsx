export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light">Hub de tecnologia e produtos digitais</p>
          <h1 id="hero-title">Tecnologia que transforma problemas reais em produtos que escalam.</h1>
          <p className="hero-description">
            A Hudi Labs é um laboratório de inovação. Criamos soluções digitais claras, robustas e conectadas para negócios, comunidades e pessoas.
          </p>
          <div className="button-group">
            <a className="button button--primary" href="#ecossistema">
              Conhecer o ecossistema
            </a>
            <a className="button button--ghost" href="#contato">
              Falar com a Hudi <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ul className="hero-signals" aria-label="Princípios da Hudi Labs">
            <li>Produtos próprios</li>
            <li>Tecnologia conectada</li>
            <li>Experiências intuitivas</li>
          </ul>
        </div>

        <div className="hero-stage" aria-label="Representação do ecossistema Hudi Labs">
          <div className="orbit orbit--outer" />
          <div className="orbit orbit--inner" />
          <div className="hero-core">
            <span className="core-symbol" aria-hidden="true" />
            <strong>HUDI</strong>
            <span>LABS</span>
          </div>
          <div className="orbit-card orbit-card--deliveries">
            <span className="orbit-card__number">01</span>
            <strong>Deliveries</strong>
            <small>Operação que flui</small>
          </div>
          <div className="orbit-card orbit-card--esporte">
            <span className="orbit-card__number">02</span>
            <strong>Esporte</strong>
            <small>Comunidade em movimento</small>
          </div>
          <div className="orbit-card orbit-card--pages">
            <span className="orbit-card__number">03</span>
            <strong>Pages</strong>
            <small>Ideias que convertem</small>
          </div>
        </div>
      </div>
    </section>
  );
}
