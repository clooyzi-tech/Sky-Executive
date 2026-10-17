import { NextResponse } from 'next/server';
import { sendContactEmail, type ContactEmailPayload } from '@/lib/email';

export async function POST(request: Request) {
  // 1. Parse JSON body
  let body: Partial<ContactEmailPayload>;
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

  // 3. Dispatch enquiry email via Nodemailer
  try {
    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : undefined,
      checkIn: checkIn ? checkIn.trim() : undefined,
      checkOut: checkOut ? checkOut.trim() : undefined,
      roomPreference: roomPreference ? roomPreference.trim() : undefined,
      guests: guests ? String(guests).trim() : undefined,
      message: message ? message.trim() : undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          'Enquiry sent successfully. The Hotel Sky Executive team will contact you shortly.',
        simulated: result.simulated ?? false,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : 'Unknown server error';
    console.error('[Contact API] Failed to send email enquiry:', errMessage);

    return NextResponse.json(
      {
        error:
          'Failed to send enquiry email. Please verify your internet connection or reach out directly to reception at +91 92093 97362.',
      },
      { status: 500 }
    );
  }
}
