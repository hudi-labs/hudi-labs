import { createHmac } from "node:crypto";
import { hermesBus, type HermesBusEvent } from "@/lib/event-bus";
import { GET, POST } from "@/lib/api/webhook/whatsapp/route";

// Provide minimal stubs so the route module loads in a non-Next.js test env
vi.mock("next/server", () => {
  function NextResponse(body: BodyInit | null, init?: ResponseInit) {
    return new Response(body, init);
  }
  NextResponse.json = (body: unknown, init?: ResponseInit) =>
    new Response(JSON.stringify(body), {
      ...init,
      headers: { "Content-Type": "application/json" },
    });

  class NextRequest extends Request {
    nextUrl: URL;
    constructor(url: string, init?: RequestInit) {
      super(url, init);
      this.nextUrl = new URL(url);
    }
  }
  return { NextResponse, NextRequest };
});

const SECRET = "test-secret";
const VERIFY_TOKEN = "test-verify-token";

beforeEach(() => {
  process.env.WHATSAPP_APP_SECRET = SECRET;
  process.env.WHATSAPP_VERIFY_TOKEN = VERIFY_TOKEN;
});

afterEach(() => {
  process.env.WHATSAPP_APP_SECRET = SECRET;
  process.env.WHATSAPP_VERIFY_TOKEN = VERIFY_TOKEN;
});

function sign(body: string, secret: string) {
  return "sha256=" + createHmac("sha256", secret).update(body).digest("hex");
}

describe("GET /api/webhook/whatsapp — verificação do webhook", () => {
  it("retorna o challenge quando token e modo são válidos", async () => {
    const { NextRequest } = await import("next/server");
    const req = new NextRequest(
      `http://localhost/api/webhook/whatsapp?hub.mode=subscribe&hub.verify_token=${VERIFY_TOKEN}&hub.challenge=abc123`,
    );
    const res = await GET(req);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("abc123");
  });

  it("retorna 403 quando o token é inválido", async () => {
    const { NextRequest } = await import("next/server");
    const req = new NextRequest(
      "http://localhost/api/webhook/whatsapp?hub.mode=subscribe&hub.verify_token=wrong&hub.challenge=abc123",
    );
    const res = await GET(req);
    expect(res.status).toBe(403);
  });
});

describe("POST /api/webhook/whatsapp — recepção de eventos", () => {
  it("aceita payload válido com assinatura correta e emite evento no bus", async () => {
    const { NextRequest } = await import("next/server");
    const body = JSON.stringify({ entry: [{ id: "1", changes: [] }] });
    const sig = sign(body, SECRET);

    const received: HermesBusEvent[] = [];
    const unsub = hermesBus.subscribe((e) => received.push(e));

    const req = new NextRequest("http://localhost/api/webhook/whatsapp", {
      method: "POST",
      body,
      headers: { "x-hub-signature-256": sig, "content-type": "application/json" },
    });
    const res = await POST(req);

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.status).toBe("accepted");
    expect(received).toHaveLength(1);
    expect(received[0].type).toBe("whatsapp.interaction");
    unsub();
  });

  it("rejeita payload com assinatura inválida", async () => {
    const { NextRequest } = await import("next/server");
    const body = JSON.stringify({ entry: [] });

    const req = new NextRequest("http://localhost/api/webhook/whatsapp", {
      method: "POST",
      body,
      headers: { "x-hub-signature-256": "sha256=badasignature" },
    });
    const res = await POST(req);
    expect(res.status).toBe(401);
  });

  it("rejeita JSON malformado", async () => {
    const { NextRequest } = await import("next/server");
    // Disable signature check for this test
    process.env.WHATSAPP_APP_SECRET = "";

    const req = new NextRequest("http://localhost/api/webhook/whatsapp", {
      method: "POST",
      body: "not-json",
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});
