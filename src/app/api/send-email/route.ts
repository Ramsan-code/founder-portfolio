import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing");
    return NextResponse.json({ success: false, error: "API Key not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { user_name, user_email, message } = await request.json();

    // Server-side validation
    if (!user_name || !user_email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ilanthiraiyanfilm@gmail.com', // Reverted to the authorized email for this account
      subject: `New Inquiry from ${user_name}`,
      replyTo: user_email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #2D2424; border-bottom: 2px solid #2D2424; padding-bottom: 10px;">New Inquiry Received</h2>
          <div style="background-color: #F5F5F1; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${user_name}</p>
            <p><strong>Email:</strong> ${user_email}</p>
          </div>
          <div>
            <p><strong>Message:</strong></p>
            <p style="line-height: 1.6; color: #444; background: #fff; padding: 15px; border: 1px solid #ddd;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 30px; text-align: center;">Sent from your portfolio website.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend SDK Error:', error);
      // Return a STRING for the error, not the object!
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error('API Error:', err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
