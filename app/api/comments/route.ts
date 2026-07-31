import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const rows = db
    .prepare(
      `SELECT id, name, company, rating, comment, created_at
       FROM comments
       WHERE approved = 1
       ORDER BY id DESC
       LIMIT 50`
    )
    .all();

  return NextResponse.json({ ok: true, comments: rows });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const comment = String(body.comment ?? "").trim();
    let rating = Number(body.rating ?? 5);
    if (!Number.isFinite(rating)) rating = 5;
    rating = Math.min(5, Math.max(1, Math.round(rating)));

    if (!name || !comment) {
      return NextResponse.json(
        { ok: false, error: "Name and comment are required." },
        { status: 400 }
      );
    }

    const result = db
      .prepare(
        `INSERT INTO comments (name, email, company, rating, comment, approved)
         VALUES (?, ?, ?, ?, ?, 1)`
      )
      .run(name, email || null, company || null, rating, comment);

    const created = db
      .prepare(
        `SELECT id, name, company, rating, comment, created_at FROM comments WHERE id = ?`
      )
      .get(result.lastInsertRowid);

    return NextResponse.json({ ok: true, comment: created });
  } catch (err) {
    console.error("Comment submit error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
