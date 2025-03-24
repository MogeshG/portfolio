import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { LRUCache } from "lru-cache";

// Rate limiting setup
const rateLimit = new LRUCache<string, number>({
  max: 200,
  ttl: 1000 * 60 * 60,
});

function isRateLimited(ip: string, duration: number): boolean {
  const lastRequest = rateLimit.get(ip) || 0;
  const now = Date.now();

  if (now - lastRequest < duration) {
    return true;
  }

  rateLimit.set(ip, now);
  return false;
}

export async function POST(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for") || "";
  const ip = forwardedFor.split(",")[0]?.trim() || "unknown";

  const DURATION = 1000 * 60 * 3;

  if (isRateLimited(ip, DURATION)) {
    return NextResponse.json(
      { error: "Too many requests. Please try after 3 minutes." },
      { status: 429 }
    );
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_TO,
      subject: `New message from ${name} from Portfolio`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
