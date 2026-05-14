import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";
import { contactSchema } from "@/validators/contact-schema";

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.timestamp > 60000) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

export async function POST(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many requests." },
      { status: 429 }
    );
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json(
      { success: false, message: "Email not configured." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    
    // Server-side honeypot check
    if (body._gotcha && body._gotcha.length > 0) {
      console.warn("Honeypot filled, ignoring request.");
      return NextResponse.json({ success: true, message: "Message received." }, { status: 200 });
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.errors[0]?.message },
        { status: 400 }
      );
    }

    await sendContactEmail({
      name: result.data.name,
      email: result.data.email,
      projectType: result.data.projectType,
      budget: result.data.budget,
      message: result.data.message,
      timestamp: body.timestamp,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
