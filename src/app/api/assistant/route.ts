import { NextResponse } from 'next/server';
import { sendAssistantEmail, type AssistantEmailPayload } from '@/lib/email';

export async function POST(request: Request) {
  // 1. Parse JSON body
  let body: Partial<AssistantEmailPayload>;
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
    roomId = 'General / Online Guest',
    roomKey = '',
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

  // Optional email format check if an email was supplied
  if (email && typeof email === 'string' && email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }
  }

  // 3. Dispatch assistant request via Nodemailer
  try {
    const result = await sendAssistantEmail({
      name: name.trim(),
      email: email ? email.trim() : undefined,
      phone: phone ? phone.trim() : undefined,
      roomId: roomId ? roomId.trim() : 'General / Online Guest',
      roomKey: roomKey ? roomKey.trim() : undefined,
      services: services ? services.trim() : 'General Assistance',
      message: message ? message.trim() : undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your request has been dispatched to the front desk team.',
        simulated: result.simulated ?? false,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : 'Unknown server error';
    console.error('[Assistant API] Failed to send assistant email:', errMessage);

    return NextResponse.json(
      {
        error:
          'Failed to send request email. Please reach out directly to reception at +91 92093 97362.',
      },
      { status: 500 }
    );
  }
}
