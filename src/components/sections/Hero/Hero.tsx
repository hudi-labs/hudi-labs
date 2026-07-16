"use client";

import Link from "next/link";
import { useState, type CSSProperties, type MouseEvent } from "react";

type PointerPosition = {
  x: number;
  y: number;
};

const restingPointerPosition: PointerPosition = { x: 50, y: 50 };

const kineticFragments = [
  [7, 18, 8, -18, 0], [18, 72, 5, 28, -3], [29, 12, 6, 42, -6],
  [42, 82, 9, -32, -1], [54, 20, 5, 18, -5], [66, 67, 7, -12, -2],
  [76, 10, 9, 35, -4], [87, 46, 5, -28, -7], [94, 78, 7, 22, -1],
  [11, 46, 4, 12, -8], [36, 55, 6, -40, -3], [59, 91, 4, 30, -6],
  [72, 35, 5, -16, -8], [91, 21, 4, 40, -4],
] as const;

export function Hero() {
  const [pointerPosition, setPointerPosition] = useState(restingPointerPosition);
  const [isPointerActive, setIsPointerActive] = useState(false);

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = bounds.width ? ((event.clientX - bounds.left) / bounds.width) * 100 : 50;
    const y = bounds.height ? ((event.clientY - bounds.top) / bounds.height) * 100 : 50;

    setPointerPosition({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    });
    setIsPointerActive(true);
  };

  const resetPointer = () => {
    setPointerPosition(restingPointerPosition);
    setIsPointerActive(false);
  };

  const heroStyle = {
    "--glow-x": `${pointerPosition.x}%`,
    "--glow-y": `${pointerPosition.y}%`,
    "--orbit-x": `${(pointerPosition.x - 50) / 4}px`,
    "--orbit-y": `${(pointerPosition.y - 50) / 4}px`,
    "--tilt-x": `${(pointerPosition.y - 50) / -14}deg`,
    "--tilt-y": `${(pointerPosition.x - 50) / 14}deg`,
  } as CSSProperties;

  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
      data-pointer-active={isPointerActive || undefined}
      onMouseLeave={resetPointer}
      onMouseMove={handlePointerMove}
      style={heroStyle}
    >
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="hero-fragments" aria-hidden="true">
        {kineticFragments.map(([x, y, size, rotation, delay], index) => (
          <i
            key={`${x}-${y}`}
            style={{
              "--fragment-x": `${x}%`,
              "--fragment-y": `${y}%`,
              "--fragment-size": `${size}px`,
              "--fragment-rotation": `${rotation}deg`,
              "--fragment-delay": `${delay}s`,
              "--fragment-drift": `${index % 2 === 0 ? 18 : -15}px`,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light">Hub de tecnologia e produtos digitais</p>
          <h1 id="hero-title">Um laboratório. Vários produtos em movimento.</h1>
          <p className="hero-description">
            A Hudi Labs transforma problemas reais em produtos independentes, conectando estratégia, engenharia e experiências que as pessoas querem usar.
          </p>
          <div className="button-group">
            <Link className="button button--primary" href="/produtos/">Explorar produtos</Link>
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

        <div className="hero-stage" aria-label="Hudi Labs, Hudi Delivery, Hudi Esporte e Hudi Pages">
          <div className="kinetic-wordmark">
            <span className="kinetic-mark" aria-hidden="true"><i /></span>
            <strong>HUDI</strong>
            <div className="kinetic-wheel" aria-hidden="true">
              <div className="kinetic-wheel__track">
                <span>LABS</span>
                <span>DELIVERY</span>
                <span>ESPORTE</span>
                <span>PAGES</span>
                <span>LABS</span>
              </div>
            </div>
            <small>ideias úteis, produtos que escalam</small>
          </div>
        </div>
      </div>
    </section>
  );
}
