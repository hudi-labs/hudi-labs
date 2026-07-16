"use client";

import { useEffect, useState, type CSSProperties } from "react";

const incomingOrders = [
  { customer: "Ana C.", value: "R$ 46,20" },
  { customer: "Pedro L.", value: "R$ 81,50" },
  { customer: "Bia R.", value: "R$ 63,90" },
] as const;

export function DeliveryInterface() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCycle((current) => current + 1);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  const order = incomingOrders[cycle % incomingOrders.length];
  const orderCount = 32 + (cycle % 8);

  return (
    <div className="product-interface product-interface--deliveries" aria-hidden="true">
      <div className="ui-window-bar"><i /><i /><i /></div>
      <div className="delivery-ui-body">
        <div className="delivery-ui-sidebar"><span>HD</span><b /><b /><b /></div>
        <div className="delivery-ui-content">
          <div className="ui-title-row">
            <span>Pedidos</span>
            <em><i /> ao vivo</em>
          </div>
          <div className="ui-stat-row">
            <div>
              <strong key={orderCount}>{orderCount}</strong>
              <small>pedidos hoje</small>
            </div>
            <div className="ui-mini-chart"><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="ui-flow">
            <span><b>Atendidos</b><i style={{ "--flow": "84%" } as CSSProperties} /></span>
            <span><b>Em preparo</b><i style={{ "--flow": "54%" } as CSSProperties} /></span>
            <span><b>Cancelados</b><i style={{ "--flow": "12%" } as CSSProperties} /></span>
          </div>
          <div className="ui-order"><span>Joana M.</span><strong>R$ 58,90</strong></div>
          <div className="ui-order ui-order--incoming" key={cycle}>
            <span><i />{order.customer}</span><strong>{order.value}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
