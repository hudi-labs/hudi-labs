"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { HermesBusEvent } from "@/lib/event-bus";

export type UseRealTimeEventsOptions = {
  /** URL of the SSE endpoint. Defaults to `/api/events`. */
  url?: string;
  /** Maximum number of events to keep in state. Defaults to 50. */
  maxEvents?: number;
};

export type UseRealTimeEventsResult = {
  events: HermesBusEvent[];
  connected: boolean;
  clearEvents: () => void;
};

/**
 * Connects to the `/api/events` SSE stream and collects incoming events.
 * Automatically reconnects when the connection is lost.
 */
export function useRealTimeEvents({
  url = "/api/events",
  maxEvents = 50,
}: UseRealTimeEventsOptions = {}): UseRealTimeEventsResult {
  const [events, setEvents] = useState<HermesBusEvent[]>([]);
  const [connected, setConnected] = useState(false);
  const esRef = useRef<EventSource | null>(null);

  useEffect(() => {
    let active = true;

    function connect() {
      if (!active) return;
      const es = new EventSource(url);
      esRef.current = es;

      es.onopen = () => {
        if (active) setConnected(true);
      };

      es.onmessage = (ev: MessageEvent<string>) => {
        if (!active) return;
        try {
          const event = JSON.parse(ev.data) as HermesBusEvent;
          setEvents((prev) => [event, ...prev].slice(0, maxEvents));
        } catch {
          // malformed message — ignore
        }
      };

      es.onerror = () => {
        setConnected(false);
        es.close();
        if (active) setTimeout(connect, 3_000);
      };
    }

    connect();
    return () => {
      active = false;
      esRef.current?.close();
      setConnected(false);
    };
  }, [url, maxEvents]);

  const clearEvents = useCallback(() => setEvents([]), []);

  return { events, connected, clearEvents };
}
