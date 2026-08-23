import { hermesBus, type HermesBusEvent } from "@/lib/event-bus";

export const dynamic = "force-dynamic";

/** GET — establishes a Server-Sent Events stream for real-time frontend updates. */
export async function GET(): Promise<Response> {
  const encoder = new TextEncoder();

  let cleanup: (() => void) | undefined;

  const stream = new ReadableStream({
    start(controller) {
      const send = (event: HermesBusEvent) => {
        const data = `data: ${JSON.stringify(event)}\n\n`;
        controller.enqueue(encoder.encode(data));
      };

      const unsubscribe = hermesBus.subscribe(send);

      const keepalive = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(": keepalive\n\n"));
        } catch {
          clearInterval(keepalive);
          unsubscribe();
        }
      }, 30_000);

      cleanup = () => {
        clearInterval(keepalive);
        unsubscribe();
      };
    },
    cancel() {
      cleanup?.();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
