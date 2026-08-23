import { hermesBus, type HermesBusEvent } from "@/lib/event-bus";

describe("EventBus", () => {
  it("entrega eventos para todos os assinantes", () => {
    const received: HermesBusEvent[] = [];
    const unsubscribe = hermesBus.subscribe((e) => received.push(e));

    hermesBus.publish({
      type: "whatsapp.interaction",
      correlationId: "abc-123",
      payload: { action: "button_reply" },
      timestamp: new Date().toISOString(),
    });

    expect(received).toHaveLength(1);
    expect(received[0].correlationId).toBe("abc-123");
    unsubscribe();
  });

  it("para de entregar eventos após cancelar assinatura", () => {
    const received: HermesBusEvent[] = [];
    const unsubscribe = hermesBus.subscribe((e) => received.push(e));
    unsubscribe();

    hermesBus.publish({
      type: "message.status",
      correlationId: "xyz-999",
      payload: {},
      timestamp: new Date().toISOString(),
    });

    expect(received).toHaveLength(0);
  });

  it("entrega para múltiplos assinantes independentemente", () => {
    const a: string[] = [];
    const b: string[] = [];
    const u1 = hermesBus.subscribe((e) => a.push(e.correlationId));
    const u2 = hermesBus.subscribe((e) => b.push(e.correlationId));

    hermesBus.publish({
      type: "whatsapp.interaction",
      correlationId: "multi-1",
      payload: {},
      timestamp: new Date().toISOString(),
    });

    expect(a).toEqual(["multi-1"]);
    expect(b).toEqual(["multi-1"]);
    u1();
    u2();
  });
});
