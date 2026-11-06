import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = { name?: unknown; email?: unknown; message?: unknown };

const isNonEmpty = (v: unknown): v is string => typeof v === "string" && v.trim().length > 0;
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!isNonEmpty(name) || !isNonEmpty(email) || !isNonEmpty(message) || !isEmail(email)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Input too long" }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    // Not configured: the UI shows the "Message not sent!" popup.
    return NextResponse.json({ error: "Contact webhook is not configured" }, { status: 500 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}
