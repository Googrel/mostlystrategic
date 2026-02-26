import { NextRequest, NextResponse } from "next/server";
import { validateInquiry } from "@/lib/contact";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { message: "Service is not configured. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const payload = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
      website?: string;
    };

    const validation = validateInquiry({
      name: payload.name ?? "",
      email: payload.email ?? "",
      message: payload.message ?? "",
      website: payload.website ?? ""
    });

    if (!validation.ok) {
      return NextResponse.json({ message: validation.error }, { status: 400 });
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() ?? "unknown";
    const userAgent = request.headers.get("user-agent") ?? "unknown";

    const response = await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        name: payload.name?.trim(),
        email: payload.email?.trim(),
        message: payload.message?.trim(),
        ip,
        user_agent: userAgent,
        created_at: new Date().toISOString()
      })
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Supabase insert failed", details);
      return NextResponse.json({ message: "Unable to submit inquiry right now." }, { status: 500 });
    }

    return NextResponse.json({ message: "Thank you. I will reply soon." }, { status: 200 });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
