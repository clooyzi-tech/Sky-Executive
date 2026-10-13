import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  roomPreference?: string;
  guests?: string;
  message?: string;
}

export async function POST(request: Request) {
  // 1. Parse JSON body
  let body: ContactPayload;
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
    checkIn = '',
    checkOut = '',
    roomPreference = 'Premium Room',
    guests = '2',
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

  // 3. SMTP configuration with flexible variable support
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
    'help.skyexecutive@gmail.com';

  // 4. Verify SMTP credentials exist
  if (!smtpUser || !smtpPass) {
    console.warn(
      '[Contact API] SMTP credentials not configured. Please set SMTP_USER and SMTP_PASS in .env.local.'
    );
    return NextResponse.json(
      {
        error:
          'The hotel email service is not yet configured. Please set SMTP credentials in .env.local or reach out via WhatsApp / phone at +91 80077 24646.',
      },
      { status: 503 }
    );
  }

  const fromAddress =
    process.env.SMTP_FROM || `"Hotel Sky Executive Reservations" <${smtpUser}>`;

  // 5. Send email via Nodemailer
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

    // Plain text version
    const textContent = `
New Guest Stay Enquiry - Hotel Sky Executive (Pune)
=======================================
Date: ${formattedSubmissionDate}

GUEST INFORMATION:
- Full Name: ${name.trim()}
- Email: ${email.trim()}
- Phone: ${phone.trim() || 'Not provided'}

STAY DETAILS:
- Room Preference: ${roomPreference}
- Number of Guests: ${guests}
- Check-in Date: ${checkIn || 'Not specified'}
- Check-out Date: ${checkOut || 'Not specified'}

MESSAGE / SPECIAL REQUESTS:
${message.trim() || 'None'}

---------------------------------------
You can reply directly to this email to respond to the guest at ${email.trim()}.
`.trim();

    // Branded HTML version
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .header { background: #1a2e22; color: #ffffff; padding: 28px 32px; text-align: left; }
    .badge { display: inline-block; background: #d4af37; color: #1a2e22; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 9999px; margin-bottom: 10px; }
    .title { margin: 0; font-size: 24px; font-family: Georgia, serif; font-weight: 600; color: #ffffff; }
    .subtitle { margin: 6px 0 0 0; font-size: 13px; color: #cbd5e1; }
    .content { padding: 28px 32px; }
    .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-top: 20px; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
    .section-title:first-child { margin-top: 0; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
    .table td { padding: 8px 0; font-size: 14px; vertical-align: top; }
    .table td.label { width: 150px; color: #64748b; font-weight: 500; }
    .table td.value { color: #0f172a; font-weight: 600; }
    .message-box { background: #fdfbf7; border: 1px solid #e8dec8; border-radius: 10px; padding: 14px 16px; font-size: 14px; line-height: 1.5; color: #334155; white-space: pre-wrap; }
    .reply-box { margin-top: 24px; padding: 14px 16px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; font-size: 13px; color: #166534; }
    .footer { padding: 18px 32px; background: #f8fafc; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">New Enquiry</div>
      <h1 class="title">HOTEL SKY EXECUTIVE</h1>
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
          <td class="label">Email</td>
          <td class="value"><a href="mailto:${escapeHtml(email.trim())}" style="color: #0284c7; text-decoration: none;">${escapeHtml(email.trim())}</a></td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value">${phone.trim() ? `<a href="tel:${escapeHtml(phone.trim())}" style="color: #0284c7; text-decoration: none;">${escapeHtml(phone.trim())}</a>` : '<span style="color:#94a3b8; font-weight: normal;">Not provided</span>'}</td>
        </tr>
      </table>

      <div class="section-title">Stay & Reservation Information</div>
      <table class="table">
        <tr>
          <td class="label">Room Category</td>
          <td class="value">${escapeHtml(roomPreference)}</td>
        </tr>
        <tr>
          <td class="label">Guests</td>
          <td class="value">${escapeHtml(guests)}</td>
        </tr>
        <tr>
          <td class="label">Check-in Date</td>
          <td class="value">${checkIn ? escapeHtml(checkIn) : '<span style="color:#94a3b8; font-weight: normal;">Not specified</span>'}</td>
        </tr>
        <tr>
          <td class="label">Check-out Date</td>
          <td class="value">${checkOut ? escapeHtml(checkOut) : '<span style="color:#94a3b8; font-weight: normal;">Not specified</span>'}</td>
        </tr>
      </table>

      <div class="section-title">Guest Message / Special Requests</div>
      <div class="message-box">${message.trim() ? escapeHtml(message.trim()) : '<em>No additional message provided.</em>'}</div>

      <div class="reply-box">
        <strong>💡 Quick Reply:</strong> You can reply directly to this email to contact <strong>${escapeHtml(name.trim())}</strong> at <strong>${escapeHtml(email.trim())}</strong>.
      </div>
    </div>
    <div class="footer">
      Hotel Sky Executive • Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune – 412216
    </div>
  </div>
</body>
</html>
`.trim();

    await transporter.sendMail({
      from: fromAddress,
      to: receiverEmail,
      replyTo: email.trim(),
      subject: `New Stay Enquiry: ${name.trim()} - Hotel Sky Executive`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: 'Enquiry sent successfully.' },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : 'Unknown server error';
    console.error('[Contact API] Failed to dispatch email:', errMessage);

    return NextResponse.json(
      {
        error:
          'Failed to send enquiry email. Please verify your internet connection or reach out directly to reception at +91 80077 24646.',
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
