export function FinalCta() {
  return (
    <section className="section final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta__content">
        <p className="eyebrow eyebrow--light">Vamos construir o próximo passo</p>
        <h2 id="final-cta-title">O próximo produto Hudi pode começar com uma conversa.</h2>
        <p>Explore as soluções que já nascem aqui ou compartilhe o desafio que sua operação ainda precisa resolver.</p>
        <div className="button-group button-group--center">
          <a className="button button--primary" href="#ecossistema">Explorar produtos</a>
          <a
            className="button button--ghost"
            href="https://wa.me/553131890669?text=Ol%C3%A1%2C%20Lino!%20Vim%20pelo%20site%20da%20Hudi%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noreferrer"
            aria-label="Falar com a Hudi pelo WhatsApp"
          >
            Falar com a Hudi <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
