import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { sendContactNotification } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 1. Always save to the database first, so we never lose an enquiry
    //    even if the email step fails.
    db.prepare(
      `INSERT INTO contact_messages (name, email, phone, service, message)
       VALUES (?, ?, ?, ?, ?)`
    ).run(name, email, phone || null, service || null, message);

    // 2. Try to email the business inbox. If SMTP isn't configured yet,
    //    don't fail the whole request — the message is already saved.
    let emailSent = true;
    try {
      await sendContactNotification({ name, email, phone, service, message });
    } catch (err) {
      emailSent = false;
      console.error("Email notification failed:", err);
    }

    return NextResponse.json({ ok: true, emailSent });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
