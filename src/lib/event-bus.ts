export type HermesBusEvent = {
  type: "whatsapp.interaction" | "message.status";
  correlationId: string;
  payload: Record<string, unknown>;
  timestamp: string;
};

type Subscriber = (event: HermesBusEvent) => void;

class EventBus {
  private subscribers = new Set<Subscriber>();

  subscribe(fn: Subscriber): () => void {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  publish(event: HermesBusEvent): void {
    for (const fn of this.subscribers) {
      fn(event);
    }
  }
}

/** Singleton bus shared across API route handlers in the same process. */
export const hermesBus = new EventBus();
