import nodemailer from "nodemailer";

// Reads SMTP credentials from environment variables (see .env.example).
// Works with Gmail (app password), Outlook, Zoho, Hostinger, or any
// standard SMTP provider.
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env"
    );
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"PromoFusion Website" <${process.env.SMTP_USER}>`,
    to,
    replyTo: data.email,
    subject: `New enquiry from ${data.name} — ${data.service ?? "General"}`,
    text: `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone ?? "—"}
Service: ${data.service ?? "—"}

Message:
${data.message}`,
    html: `
      <div style="font-family:sans-serif;font-size:14px;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">New Website Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone ?? "—")}</p>
        <p><strong>Service:</strong> ${escapeHtml(data.service ?? "—")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>
    `,
  });
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
