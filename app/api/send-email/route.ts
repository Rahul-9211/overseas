import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_EU68httZ_Fvph1iuiW1B4hHHuuqzdmM7Z');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const emailContent = `
      New Consultation Request
      ------------------------
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    const { data, error } = await resend.emails.send({
      from: 'info@visafilling.com',
      to: 'Visafillinghiring@gmail.com',
      subject: 'New Consultation Request',
      text: emailContent,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
} 