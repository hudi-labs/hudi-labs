import { type NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
import { hermesBus } from "@/lib/event-bus";
import { randomUUID } from "node:crypto";

/** Validates the X-Hub-Signature-256 header sent by Meta. */
function isValidMetaSignature(body: string, signature: string | null): boolean {
  const secret = process.env.WHATSAPP_APP_SECRET ?? "";
  if (!signature || !secret) return false;
  const expected = "sha256=" + createHmac("sha256", secret).update(body).digest("hex");
  try {
    return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  } catch {
    return false;
  }
}

/** GET — webhook verification handshake required by Meta. */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN ?? "";

  if (mode === "subscribe" && token === verifyToken) {
    return new NextResponse(challenge, { status: 200 });
  }
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

/** POST — receives interaction callbacks from Meta and emits SSE events. */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const rawBody = await request.text();
  const signature = request.headers.get("x-hub-signature-256");

  if (process.env.WHATSAPP_APP_SECRET && !isValidMetaSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(rawBody) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  hermesBus.publish({
    type: "whatsapp.interaction",
    correlationId: randomUUID(),
    payload: body,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ status: "accepted" }, { status: 200 });
}
