"use client";

import { useCyclingDemo } from "@/components/motion/useCyclingDemo";

const matches = [
  { time: "HOJE • 20H", title: "Fut7 da quinta", vacancies: 4, places: ["Arena Norte", "Clube da Vila"] },
  { time: "SÁB • 10H", title: "Vôlei na praça", vacancies: 2, places: ["Parque Central", "Quadra 2"] },
  { time: "DOM • 16H", title: "Basquete aberto", vacancies: 3, places: ["Ginásio Sul", "Praça Nova"] },
] as const;

export function SportInterface() {
  const { index, pause, resume } = useCyclingDemo({ length: matches.length, intervalMs: 3200 });
  const match = matches[index];

  return (
    <div className="product-interface product-interface--esporte" aria-hidden="true" onMouseEnter={pause} onMouseLeave={resume}>
      <div className="sport-ui-header"><span>meu esporte</span><b><i /> ao vivo</b></div>
      <div className="sport-hero-card" key={match.title}>
        <small>{match.time}</small>
        <strong>{match.title}</strong>
        <span>{match.vacancies} vagas disponíveis</span>
        <div className="sport-people"><i /><i /><i /><i /><b>+{8 - match.vacancies}</b></div>
      </div>
      <div className="sport-ui-list">
        <span>Próximas partidas</span>
        {match.places.map((place, placeIndex) => (
          <div key={place}><i /><span>{place}</span><b>+{placeIndex + 1}</b></div>
        ))}
      </div>
      <div className="sport-update"><i /> agenda atualizada</div>
    </div>
  );
}
