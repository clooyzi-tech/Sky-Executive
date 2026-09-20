import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface AssistantPayload {
  name?: string;
  email?: string;
  phone?: string;
  roomId?: string;
  roomKey?: string;
  services?: string;
  message?: string;
}

export async function POST(request: Request) {
  // 1. Parse JSON body
  let body: AssistantPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON request format.' },
      { status: 400 }
    );
  }

  const {
    name,
    email,
    phone = '',
    roomId = 'Unknown',
    roomKey = 'Unknown',
    services = 'General Assistance',
    message = '',
  } = body || {};

  // 2. Validate user inputs
  if (!name || typeof name !== 'string' || !name.trim()) {
    return NextResponse.json(
      { error: 'Please enter your full name.' },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return NextResponse.json(
      { error: 'Please provide a valid email address.' },
      { status: 400 }
    );
  }

  // 3. SMTP configuration
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const smtpSecure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465;

  const smtpUser = (
    process.env.SMTP_USER ||
    process.env.EMAIL_USER ||
    process.env.MAIL_USER ||
    ''
  ).trim();

  const rawPass = (
    process.env.SMTP_PASS ||
    process.env.EMAIL_PASS ||
    process.env.MAIL_PASS ||
    ''
  ).trim();
  const smtpPass = rawPass.replace(/\s+/g, '');

  const receiverEmail =
    process.env.STAFF_RECEIVER_EMAIL ||
    process.env.STAFF_EMAIL ||
    process.env.CONTACT_RECEIVER_EMAIL ||
    'help.livinn@gmail.com';

  if (!smtpUser || !smtpPass) {
    console.warn(
      '[Assistant API] SMTP credentials not configured.'
    );
    return NextResponse.json(
      {
        error:
          'The hotel email service is not yet configured. Please reach out via WhatsApp.',
      },
      { status: 503 }
    );
  }

  const fromAddress =
    process.env.SMTP_FROM || `"liv.inn Assistant" <${smtpUser}>`;

  // 4. Send email via Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const formattedSubmissionDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const textContent = `
Guest Service Request - Room ${roomId} (liv.inn)
=======================================
Date: ${formattedSubmissionDate}

ROOM DETAILS:
- Room Number: ${roomId}
- Room Key: ${roomKey}

GUEST INFORMATION:
- Full Name: ${name.trim()}
- Email: ${email.trim()}
- Phone: ${phone.trim() || 'Not provided'}

REQUEST DETAILS:
- Services Requested: ${services}

MESSAGE / REMARKS:
${message.trim() || 'None'}
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .header { background: #B38E46; color: #ffffff; padding: 28px 32px; text-align: left; }
    .badge { display: inline-block; background: #ffffff; color: #B38E46; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 9999px; margin-bottom: 10px; }
    .title { margin: 0; font-size: 24px; font-family: Georgia, serif; font-weight: 600; color: #ffffff; }
    .subtitle { margin: 6px 0 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.9); }
    .content { padding: 28px 32px; }
    .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-top: 20px; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
    .section-title:first-child { margin-top: 0; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
    .table td { padding: 8px 0; font-size: 14px; vertical-align: top; }
    .table td.label { width: 150px; color: #64748b; font-weight: 500; }
    .table td.value { color: #0f172a; font-weight: 600; }
    .message-box { background: #fdfbf7; border: 1px solid #e8dec8; border-radius: 10px; padding: 14px 16px; font-size: 14px; line-height: 1.5; color: #334155; white-space: pre-wrap; }
    .footer { padding: 18px 32px; background: #f8fafc; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">Room ${escapeHtml(roomId)}</div>
      <h1 class="title">Service Request</h1>
      <p class="subtitle">Received on ${formattedSubmissionDate} (IST)</p>
    </div>
    <div class="content">
      <div class="section-title">Guest Details</div>
      <table class="table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value">${escapeHtml(name.trim())}</td>
        </tr>
        <tr>
          <td class="label">Room Number</td>
          <td class="value">${escapeHtml(roomId)} (Key: ${escapeHtml(roomKey)})</td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value">${phone.trim() ? `<a href="tel:${escapeHtml(phone.trim())}" style="color: #0284c7; text-decoration: none;">${escapeHtml(phone.trim())}</a>` : '<span style="color:#94a3b8; font-weight: normal;">Not provided</span>'}</td>
        </tr>
      </table>

      <div class="section-title">Request Information</div>
      <table class="table">
        <tr>
          <td class="label">Services</td>
          <td class="value">${escapeHtml(services)}</td>
        </tr>
      </table>

      <div class="section-title">Message / Remarks</div>
      <div class="message-box">${message.trim() ? escapeHtml(message.trim()) : '<em>No additional message provided.</em>'}</div>
    </div>
    <div class="footer">
      liv.inn Hotel Pune • Chatbot Assistant System
    </div>
  </div>
</body>
</html>
`.trim();

    await transporter.sendMail({
      from: fromAddress,
      to: receiverEmail,
      replyTo: email.trim(),
      subject: `Room ${roomId} - Service Request from ${name.trim()}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: 'Request sent successfully.' },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : 'Unknown server error';
    console.error('[Assistant API] Failed to dispatch email:', errMessage);

    return NextResponse.json(
      {
        error:
          'Failed to send request email. Please reach out directly to reception.',
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
