import nodemailer from "nodemailer";

const adminEmail = process.env.ADMIN_EMAIL || "dev.tee01@gmail.com";

function escapeHtml(value = ""): string {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function emailShell({
  title,
  eyebrow,
  body,
  cta,
}: {
  title: string;
  eyebrow: string;
  body: string;
  cta?: { label: string; href: string };
}): string {
  return `
    <div style="margin:0;padding:0;background:#06080f;color:#e5e7eb;font-family:Inter,Arial,sans-serif;">
      <div style="max-width:640px;margin:0 auto;padding:40px 20px;">
        <div style="border:1px solid rgba(255,255,255,0.08);background:#0c1018;border-radius:18px;padding:32px;">
          <p style="margin:0 0 12px;color:#a78bfa;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">${eyebrow}</p>
          <h1 style="margin:0 0 18px;color:#ffffff;font-size:26px;line-height:1.15;font-family:'Space Grotesk',Arial,sans-serif;">${title}</h1>
          <div style="color:#94a3b8;font-size:15px;line-height:1.7;">${body}</div>
          ${
            cta
              ? `<a href="${cta.href}" style="display:inline-block;margin-top:24px;background:#6366f1;color:#ffffff;text-decoration:none;border-radius:999px;padding:13px 22px;font-weight:700;font-size:14px;">${cta.label}</a>`
              : ""
          }
        </div>
        <p style="margin:18px 0 0;color:#4b5563;font-size:12px;text-align:center;">DEV-TEE — Strategic Digital Engineering Studio</p>
      </div>
    </div>
  `;
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  timestamp?: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const safeName = escapeHtml(data.name.trim());
  const safeEmail = escapeHtml(data.email.trim());
  const safeProjectType = escapeHtml(data.projectType.trim());
  const safeBudget = escapeHtml(data.budget.trim());
  const safeMessage = escapeHtml(data.message.trim());
  const safeTimestamp = escapeHtml(data.timestamp || new Date().toISOString());

  const autoReplyHtml = emailShell({
    eyebrow: "Inquiry received",
    title: `Thanks, ${safeName}. DEV-TEE received your request.`,
    body: `
      <p style="margin:0 0 14px;">Your message is in. DEV-TEE will review your project details and respond with the clearest next step.</p>
      <p style="margin:0 0 14px;">Typical response time: <strong style="color:#fff;">within 24 hours</strong>.</p>
      <div style="margin-top:20px;padding:16px;border-radius:14px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.15);">
        <strong style="color:#ffffff;">Project type:</strong>
        <span style="color:#94a3b8;"> ${safeProjectType}</span><br/>
        <strong style="color:#ffffff;">Budget:</strong>
        <span style="color:#94a3b8;"> ${safeBudget}</span>
      </div>
    `,
    cta: { label: "Email DEV-TEE", href: "mailto:dev.tee01@gmail.com" },
  });

  const adminHtml = emailShell({
    eyebrow: "New lead",
    title: "New DEV-TEE project inquiry",
    body: `
      <p style="margin:0 0 12px;"><strong style="color:#ffffff;">Name:</strong> ${safeName}</p>
      <p style="margin:0 0 12px;"><strong style="color:#ffffff;">Email:</strong> ${safeEmail}</p>
      <p style="margin:0 0 12px;"><strong style="color:#ffffff;">Project Type:</strong> ${safeProjectType}</p>
      <p style="margin:0 0 12px;"><strong style="color:#ffffff;">Budget:</strong> ${safeBudget}</p>
      <p style="margin:0 0 12px;"><strong style="color:#ffffff;">Timestamp:</strong> ${safeTimestamp}</p>
      <div style="margin-top:18px;padding:16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
        <strong style="display:block;color:#ffffff;margin-bottom:8px;">Message</strong>
        <span style="white-space:pre-line;">${safeMessage}</span>
      </div>
    `,
    cta: { label: "Reply to lead", href: `mailto:${encodeURIComponent(data.email)}` },
  });

  await Promise.all([
    transporter.sendMail({
      from: `"DEV-TEE" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "DEV-TEE received your project inquiry",
      html: autoReplyHtml,
    }),
    transporter.sendMail({
      from: `"DEV-TEE Website" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      replyTo: data.email,
      subject: `New inquiry: ${data.projectType} — ${data.name}`,
      html: adminHtml,
    }),
  ]);
}
