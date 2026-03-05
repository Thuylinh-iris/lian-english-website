import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { testEmail } = body;

    if (!testEmail) {
      return NextResponse.json(
        { success: false, error: 'Test email address required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send test email
    const mailOptions = {
      from: `"Lian English" <${process.env.EMAIL_USER}>`,
      to: testEmail,
      subject: '✅ Test Email - Placement Test System Working!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0F2039 0%, #1a3a5c 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🎉 Email Test Successful!</h1>
          </div>

          <div style="background: white; padding: 40px 30px; border: 1px solid #E0E0E0;">
            <p style="font-size: 18px; color: #5A6C7D; margin-bottom: 20px;">
              Hello!
            </p>

            <p style="font-size: 16px; color: #5A6C7D; margin-bottom: 20px;">
              This is a test email from the <strong>Lian English Placement Test System</strong>.
            </p>

            <div style="background: #E3F2FD; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0; color: #0F2039; font-size: 16px;">
                ✅ Email configuration is working correctly!
              </p>
            </div>

            <p style="font-size: 14px; color: #5A6C7D; margin-bottom: 20px;">
              <strong>Configuration details:</strong><br/>
              Email: ${process.env.EMAIL_USER}<br/>
              Time: ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
            </p>

            <p style="font-size: 16px; color: #5A6C7D;">
              Your placement test system is ready to send emails to students! 🚀
            </p>
          </div>

          <div style="background: #F8F9FA; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; border: 1px solid #E0E0E0; border-top: none;">
            <p style="margin: 0; color: #5A6C7D; font-size: 14px;">
              © 2026 Lian English. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: `Test email sent successfully to ${testEmail}`,
      sentFrom: process.env.EMAIL_USER,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send test email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
