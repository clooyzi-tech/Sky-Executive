import nodemailer from 'nodemailer';

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  roomPreference?: string;
  guests?: string;
  message?: string;
}

export interface AssistantEmailPayload {
  name: string;
  phone?: string;
  email?: string;
  roomId?: string;
  roomKey?: string;
  services?: string;
  message?: string;
}

export interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  receiver: string;
  isConfigured: boolean;
}

/**
 * Retrieve and normalize SMTP configuration from environment variables.
 * Supports multiple environment variable aliases for flexibility.
 */
export function getSmtpConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === 'true'
      : port === 465;

  const user = (
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
  const pass = rawPass.replace(/\s+/g, '');

  const receiver = (
    process.env.STAFF_RECEIVER_EMAIL ||
    process.env.STAFF_EMAIL ||
    process.env.CONTACT_RECEIVER_EMAIL ||
    'help.skyexecutive@gmail.com'
  ).trim();

  const from =
    process.env.SMTP_FROM?.trim() ||
    (user
      ? `"Hotel Sky Executive" <${user}>`
      : '"Hotel Sky Executive" <reservations@hotelskyexecutive.in>');

  const isConfigured = Boolean(user && pass);

  return { host, port, secure, user, pass, from, receiver, isConfigured };
}

/**
 * HTML entities escaping utility for email security.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Creates and returns a Nodemailer transporter instance based on active configuration.
 */
export function createMailTransporter() {
  const config = getSmtpConfig();
  if (!config.isConfigured) return null;

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 7500,
  });
}

/**
 * Dispatches a Stay Enquiry email from the website Contact Form / Enquiry Modal.
 */
export async function sendContactEmail(payload: ContactEmailPayload) {
  const config = getSmtpConfig();
  const formattedDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const {
    name,
    email,
    phone = 'Not provided',
    checkIn = 'Not specified',
    checkOut = 'Not specified',
    roomPreference = 'Premium Room',
    guests = '2',
    message = 'None',
  } = payload;

  const subject = `New Stay Enquiry: ${name.trim()} - Hotel Sky Executive`;

  const text = `
New Guest Stay Enquiry - Hotel Sky Executive (Pune)
======================================================
Date: ${formattedDate} (IST)

GUEST INFORMATION:
- Full Name: ${name.trim()}
- Email: ${email.trim()}
- Phone: ${phone.trim()}

STAY DETAILS:
- Room Preference: ${roomPreference}
- Number of Guests: ${guests}
- Check-in Date: ${checkIn}
- Check-out Date: ${checkOut}

MESSAGE / SPECIAL REQUESTS:
${message.trim()}

------------------------------------------------------
Reply directly to this email to contact the guest at ${email.trim()}.
Hotel Sky Executive • Jaywant Towers, Pune–Nagar Road, Lonikand, Pune – 412216
`.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
    .header { background: #1a2e22; color: #ffffff; padding: 28px 32px; border-bottom: 3px solid #d4af37; }
    .badge { display: inline-block; background: #d4af37; color: #1a2e22; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }
    .title { margin: 0; font-size: 24px; font-family: Georgia, serif; font-weight: 600; color: #ffffff; }
    .subtitle { margin: 6px 0 0 0; font-size: 13px; color: #cbd5e1; }
    .content { padding: 32px; }
    .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-top: 24px; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
    .section-title:first-child { margin-top: 0; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
    .table td { padding: 8px 0; font-size: 14px; vertical-align: top; }
    .table td.label { width: 150px; color: #64748b; font-weight: 500; }
    .table td.value { color: #0f172a; font-weight: 600; }
    .message-box { background: #fdfbf7; border: 1px solid #e8dec8; border-radius: 10px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .reply-box { margin-top: 24px; padding: 14px 18px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; font-size: 13px; color: #166534; }
    .footer { padding: 20px 32px; background: #f8fafc; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; text-align: center; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">Stay Enquiry</div>
      <h1 class="title">HOTEL SKY EXECUTIVE</h1>
      <p class="subtitle">Enquiry received on ${formattedDate} (IST)</p>
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
          <td class="value">${phone && phone !== 'Not provided' ? `<a href="tel:${escapeHtml(phone.trim())}" style="color: #0284c7; text-decoration: none;">${escapeHtml(phone.trim())}</a>` : '<span style="color:#94a3b8; font-weight: normal;">Not provided</span>'}</td>
        </tr>
      </table>

      <div class="section-title">Reservation Details</div>
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
          <td class="value">${escapeHtml(checkIn)}</td>
        </tr>
        <tr>
          <td class="label">Check-out Date</td>
          <td class="value">${escapeHtml(checkOut)}</td>
        </tr>
      </table>

      <div class="section-title">Guest Message / Special Requests</div>
      <div class="message-box">${message && message !== 'None' ? escapeHtml(message.trim()) : '<em>No additional message provided.</em>'}</div>

      <div class="reply-box">
        <strong>💡 Quick Reply:</strong> You can hit reply directly to respond to <strong>${escapeHtml(name.trim())}</strong> at <strong>${escapeHtml(email.trim())}</strong>.
      </div>
    </div>
    <div class="footer">
      <strong>Hotel Sky Executive</strong> • Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune – 412216<br>
      Front Desk: +91 92093 97362 • Website: hotelskyexecutive.in
    </div>
  </div>
</body>
</html>
`.trim();

  // If SMTP is not yet configured, provide graceful development simulation
  if (!config.isConfigured) {
    const isDev = process.env.NODE_ENV !== 'production' || process.env.EMAIL_DEV_MODE === 'true';
    console.warn(
      `\n⚠️ [Nodemailer] SMTP credentials are not configured in environment (SMTP_USER / SMTP_PASS).`
    );
    if (isDev) {
      console.log(`[Nodemailer DEV SIMULATION] Contact enquiry logged successfully:`);
      console.log({ to: config.receiver, replyTo: email.trim(), subject, name, phone, checkIn, checkOut });
      return {
        success: true,
        simulated: true,
        message: 'Enquiry received (Simulated in development mode. Configure SMTP in .env.local for live dispatch).',
      };
    }
    throw new Error(
      'Email service is not yet configured on this server. Please contact front desk directly at +91 92093 97362.'
    );
  }

  const transporter = createMailTransporter();
  if (!transporter) {
    throw new Error('Failed to initialize mail transporter.');
  }

  const info = await transporter.sendMail({
    from: config.from,
    to: config.receiver,
    replyTo: email.trim(),
    subject,
    text,
    html,
  });

  return { success: true, simulated: false, messageId: info.messageId };
}

/**
 * Dispatches an In-Stay or Service Request email from the Chatbot Assistant.
 */
export async function sendAssistantEmail(payload: AssistantEmailPayload) {
  const config = getSmtpConfig();
  const formattedDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const {
    name,
    phone = 'Not provided',
    email = '',
    roomId = 'General / Online Guest',
    roomKey = '',
    services = 'General Assistance',
    message = 'None',
  } = payload;

  const guestReplyEmail = email.trim() || `${phone.replace(/\D/g, '') || 'guest'}@guest.hotelskyexecutive.in`;
  const subject = `Chatbot Assistant: Service Request from ${name.trim()} (${roomId})`;

  const text = `
Chatbot Assistant Service Request - Hotel Sky Executive
======================================================
Date: ${formattedDate} (IST)

ROOM / GUEST DETAILS:
- Room Number / ID: ${roomId} ${roomKey ? `(Key: ${roomKey})` : ''}
- Guest Name: ${name.trim()}
- Phone: ${phone.trim()}
- Email: ${guestReplyEmail}

SERVICES REQUESTED:
${services}

MESSAGE / REMARKS:
${message.trim()}

------------------------------------------------------
Hotel Sky Executive • Front Desk & Concierge Notification
`.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
    .header { background: #B38E46; color: #ffffff; padding: 28px 32px; border-bottom: 3px solid #1a2e22; }
    .badge { display: inline-block; background: #ffffff; color: #8C6D2D; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }
    .title { margin: 0; font-size: 24px; font-family: Georgia, serif; font-weight: 600; color: #ffffff; }
    .subtitle { margin: 6px 0 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.9); }
    .content { padding: 32px; }
    .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-top: 24px; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
    .section-title:first-child { margin-top: 0; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
    .table td { padding: 8px 0; font-size: 14px; vertical-align: top; }
    .table td.label { width: 150px; color: #64748b; font-weight: 500; }
    .table td.value { color: #0f172a; font-weight: 600; }
    .highlight-pill { display: inline-block; background: #FAF5EC; color: #8C6D2D; border: 1px solid #E8DFC8; padding: 6px 12px; border-radius: 8px; font-weight: 600; font-size: 13px; }
    .message-box { background: #fdfbf7; border: 1px solid #e8dec8; border-radius: 10px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .footer { padding: 20px 32px; background: #f8fafc; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; text-align: center; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">Chatbot Service Request • ${escapeHtml(roomId)}</div>
      <h1 class="title">HOTEL SKY EXECUTIVE</h1>
      <p class="subtitle">Assistant request submitted on ${formattedDate} (IST)</p>
    </div>
    <div class="content">
      <div class="section-title">Guest & Room Information</div>
      <table class="table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value">${escapeHtml(name.trim())}</td>
        </tr>
        <tr>
          <td class="label">Room / Status</td>
          <td class="value"><strong>${escapeHtml(roomId)}</strong> ${roomKey ? `(Key: ${escapeHtml(roomKey)})` : ''}</td>
        </tr>
        <tr>
          <td class="label">Contact Phone</td>
          <td class="value">${phone ? `<a href="tel:${escapeHtml(phone.trim())}" style="color: #0284c7; text-decoration: none;">${escapeHtml(phone.trim())}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Contact Email</td>
          <td class="value"><a href="mailto:${escapeHtml(guestReplyEmail)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(guestReplyEmail)}</a></td>
        </tr>
      </table>

      <div class="section-title">Services Requested</div>
      <div style="margin-bottom: 16px;">
        <span class="highlight-pill">${escapeHtml(services)}</span>
      </div>

      <div class="section-title">Guest Remarks / Chatbot Transcript</div>
      <div class="message-box">${message && message !== 'None' ? escapeHtml(message.trim()) : '<em>No extra remarks provided.</em>'}</div>
    </div>
    <div class="footer">
      <strong>Hotel Sky Executive Assistant System</strong> • Front Desk Concierge Desk<br>
      Jaywant Towers, Pune–Nagar Road, Lonikand, Pune – 412216 • Reception: +91 92093 97362
    </div>
  </div>
</body>
</html>
`.trim();

  // If SMTP is not yet configured, provide graceful development simulation
  if (!config.isConfigured) {
    const isDev = process.env.NODE_ENV !== 'production' || process.env.EMAIL_DEV_MODE === 'true';
    console.warn(
      `\n⚠️ [Nodemailer] SMTP credentials are not configured in environment (SMTP_USER / SMTP_PASS).`
    );
    if (isDev) {
      console.log(`[Nodemailer DEV SIMULATION] Assistant request logged successfully:`);
      console.log({ to: config.receiver, replyTo: guestReplyEmail, subject, name, phone, roomId, services });
      return {
        success: true,
        simulated: true,
        message: 'Assistant request received (Simulated in development mode. Configure SMTP in .env.local for live dispatch).',
      };
    }
    throw new Error(
      'Email service is not yet configured on this server. Please contact reception directly at +91 92093 97362.'
    );
  }

  const transporter = createMailTransporter();
  if (!transporter) {
    throw new Error('Failed to initialize mail transporter.');
  }

  const info = await transporter.sendMail({
    from: config.from,
    to: config.receiver,
    replyTo: guestReplyEmail,
    subject,
    text,
    html,
  });

  return { success: true, simulated: false, messageId: info.messageId };
}
