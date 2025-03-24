import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { LRUCache } from "lru-cache";

const rateLimit = new LRUCache<string, { count: number; firstRequestTime: number }>({
  max: 200,
  ttl: 1000 * 60 * 5,
});

const MAX_REQUESTS = 3;
const DURATION = 1000 * 60 * 5;

function isRateLimited(ip: string): boolean {
  const record = rateLimit.get(ip);
  const now = Date.now();

  if (record) {
    if (now - record.firstRequestTime < DURATION) {
      if (record.count >= MAX_REQUESTS) {
        return true;
      } else {
        record.count += 1;
        rateLimit.set(ip, record);
        return false;
      }
    } else {
      rateLimit.set(ip, { count: 1, firstRequestTime: now });
      return false;
    }
  } else {
    rateLimit.set(ip, { count: 1, firstRequestTime: now });
    return false;
  }
}

export async function POST(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for") || "";
  const ip = forwardedFor.split(",")[0]?.trim() || "unknown";

  const DURATION = 1000 * 60 * 5;

  if (isRateLimited(ip, DURATION)) {
    return NextResponse.json(
      { error: "Too many requests. Please try after 5 minutes." },
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
