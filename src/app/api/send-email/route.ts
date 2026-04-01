import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("ERROR: RESEND_API_KEY is missing from environment variables.");
    return NextResponse.json({ error: { message: "API key is not configured in Vercel settings." } }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Simplified 'from' for best compatibility
      to: 'Ilanthiraiyanfilm@gmail.com',  // Single recipient is more reliable for free tier
      subject: `New Collaboration Inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #ddd; padding-bottom: 10px;">New Message from Portfolio</h2>
          <div style="padding: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #333; font-style: italic;">${message}</p>
          </div>
          <footer style="margin-top: 20px; font-size: 12px; color: #777;">
            Sent from your portfolio contact form.
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: { message: 'Internal Server Error' } }, { status: 500 });
  }
}
