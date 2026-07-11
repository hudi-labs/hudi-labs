export function Manifesto() {
  return (
    <section className="section manifesto" id="quem-somos" aria-labelledby="manifesto-title">
      <div className="container manifesto-grid">
        <div>
          <p className="eyebrow">Quem somos</p>
          <h2 id="manifesto-title">Não criamos tecnologia para parecer complexa.</h2>
        </div>
        <div className="manifesto-content">
          <p className="manifesto-lead">
            Criamos para simplificar o cotidiano, dar autonomia a quem empreende e aproximar pessoas de experiências melhores.
          </p>
          <div className="manifesto-statement">
            <span>Do problema real</span>
            <i aria-hidden="true" />
            <strong>à solução que escala.</strong>
          </div>
          <p>
            A Hudi combina olhar de produto, engenharia e design para transformar complexidade em jornadas que as pessoas entendem, usam e querem repetir.
          </p>
        </div>
      </div>
    </section>
  );
}
