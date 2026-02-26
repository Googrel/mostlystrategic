import { NextResponse } from "next/server";
import { moments } from "@/lib/moments";

function pickMoment(message: string) {
  const normalized = message.trim().toLowerCase();
  if (!normalized) return moments[0];

  const score = normalized.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return moments[score % moments.length];
}

function buildReply(message: string) {
  const moment = pickMoment(message);
  const wittyLine =
    "Strategy is usually less fireworks, more furniture that never squeaks.";

  return [
    `Let’s borrow from ${moment.title} (${moment.year}, ${moment.country}).`,
    "Psychology first: it gave people a role they could adopt, not just a slogan to admire.",
    "Category conventions were bent just enough to feel fresh without becoming unreadable.",
    "Distinctiveness came from one memorable device carried across touchpoints with discipline.",
    "Coherence did the compounding—the promise, tone, and execution all pointed in one direction.",
    `Evidence-wise, the idea lasted because it was repeatable, not because it was merely loud. ${wittyLine}`
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { message?: string };
    const message = payload.message?.trim() ?? "";

    if (!message) {
      return NextResponse.json({ reply: "Give me a prompt and I’ll give you a tight strategic read." }, { status: 200 });
    }

    return NextResponse.json({ reply: buildReply(message) }, { status: 200 });
  } catch {
    return NextResponse.json({ reply: "I tripped over the brief. Try that one more time." }, { status: 200 });
  }
}
