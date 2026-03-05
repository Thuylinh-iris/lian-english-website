import nodemailer from 'nodemailer';

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export interface TestResults {
  studentName: string;
  studentEmail: string;
  level: string;
  levelName: string;
  score: number;
  totalQuestions: number;
  recommendedClass: string;
  duration: string;
  startDate: string;
  generalTestBreakdown?: {
    listening: number;
    grammar: number;
    vocabulary: number;
    reading: number;
  };
  speakingAssessment?: {
    level: string;
    score: number;
    feedback: string;
  };
  writingAssessment?: {
    level: string;
    score: number;
    feedback: string;
  };
}

/**
 * Send test results to student
 */
export async function sendResultsToStudent(results: TestResults): Promise<void> {
  const {
    studentName,
    studentEmail,
    level,
    levelName,
    score,
    totalQuestions,
    recommendedClass,
    duration,
    startDate,
  } = results;

  const mailOptions = {
    from: `"Lian English" <${process.env.EMAIL_USER}>`,
    to: studentEmail,
    subject: `Your Placement Test Results - ${level} Level`,
    html: `
      <div style="font-family: 'Be Vietnam Pro', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0F2039 0%, #1a3a5c 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Your Placement Test Results</h1>
        </div>

        <div style="background: white; padding: 40px 30px; border: 1px solid #E0E0E0;">
          <p style="font-size: 18px; color: #5A6C7D; margin-bottom: 30px;">
            Chào ${studentName},
          </p>

          <p style="font-size: 16px; color: #5A6C7D; margin-bottom: 30px;">
            Cảm ơn bạn đã hoàn thành bài test trình độ tại Lian English! Dưới đây là kết quả của bạn:
          </p>

          <div style="background: linear-gradient(135deg, #B8860B 0%, #D4A017 100%); color: white; padding: 25px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <div style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Your Level</div>
            <div style="font-size: 36px; font-weight: 800;">${level} (${levelName})</div>
          </div>

          <div style="background: #F8F9FA; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <div style="font-size: 14px; color: #5A6C7D; margin-bottom: 5px;">Score</div>
            <div style="font-size: 28px; font-weight: 700; color: #0F2039;">${score}/${totalQuestions}</div>
          </div>

          <div style="background: #F8F9FA; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
            <div style="font-size: 14px; color: #5A6C7D; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Recommended Class</div>
            <div style="font-size: 24px; font-weight: 700; color: #0F2039; margin-bottom: 8px;">${recommendedClass}</div>
            <div style="font-size: 16px; color: #5A6C7D;">Duration: ${duration} | Starts: ${startDate}</div>
          </div>

          ${
            results.generalTestBreakdown
              ? `
          <div style="margin-bottom: 30px;">
            <h3 style="font-size: 18px; color: #0F2039; margin-bottom: 15px;">Detailed Breakdown:</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="padding: 10px 0; color: #5A6C7D; border-bottom: 1px solid #E0E0E0;">
                Listening: ${results.generalTestBreakdown.listening}/20
              </li>
              <li style="padding: 10px 0; color: #5A6C7D; border-bottom: 1px solid #E0E0E0;">
                Grammar: ${results.generalTestBreakdown.grammar}/30
              </li>
              <li style="padding: 10px 0; color: #5A6C7D; border-bottom: 1px solid #E0E0E0;">
                Vocabulary: ${results.generalTestBreakdown.vocabulary}/20
              </li>
              <li style="padding: 10px 0; color: #5A6C7D;">
                Reading: ${results.generalTestBreakdown.reading}/10
              </li>
            </ul>
          </div>
          `
              : ''
          }

          ${
            results.speakingAssessment
              ? `
          <div style="margin-bottom: 30px; padding: 20px; background: #E3F2FD; border-radius: 8px;">
            <h3 style="font-size: 18px; color: #0F2039; margin-bottom: 10px;">Speaking Assessment (AI-analyzed)</h3>
            <p style="color: #5A6C7D; margin-bottom: 10px;">Level: ${results.speakingAssessment.level} | Score: ${results.speakingAssessment.score}/100</p>
            <p style="color: #5A6C7D; font-size: 14px;">${results.speakingAssessment.feedback}</p>
          </div>
          `
              : ''
          }

          ${
            results.writingAssessment
              ? `
          <div style="margin-bottom: 30px; padding: 20px; background: #FFF8E1; border-radius: 8px;">
            <h3 style="font-size: 18px; color: #0F2039; margin-bottom: 10px;">Writing Assessment (AI-analyzed)</h3>
            <p style="color: #5A6C7D; margin-bottom: 10px;">Level: ${results.writingAssessment.level} | Score: ${results.writingAssessment.score}/100</p>
            <p style="color: #5A6C7D; font-size: 14px;">${results.writingAssessment.feedback}</p>
          </div>
          `
              : ''
          }

          <div style="background: #0F2039; color: white; padding: 25px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h3 style="margin: 0 0 10px 0; font-size: 20px;">Ready to Enroll?</h3>
            <p style="margin: 0 0 20px 0; font-size: 16px; opacity: 0.9;">Connect with us to secure your spot!</p>
            <a href="https://m.me/405160506005369" style="display: inline-block; background: #0084FF; color: white; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 18px;">
              💬 Chat via Messenger
            </a>
          </div>

          <div style="background: #F8F9FA; padding: 20px; border-radius: 8px;">
            <h4 style="margin: 0 0 15px 0; color: #0F2039; font-size: 16px;">What happens next?</h4>
            <ul style="list-style: none; padding: 0; margin: 0; color: #5A6C7D; font-size: 14px;">
              <li style="padding: 8px 0; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #B8860B; font-weight: bold;">→</span>
                Our team will review your test results
              </li>
              <li style="padding: 8px 0; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #B8860B; font-weight: bold;">→</span>
                We'll contact you within 24 hours
              </li>
              <li style="padding: 8px 0; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #B8860B; font-weight: bold;">→</span>
                Discuss class schedule and enrollment
              </li>
            </ul>
          </div>
        </div>

        <div style="background: #F8F9FA; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; border: 1px solid #E0E0E0; border-top: none;">
          <p style="margin: 0; color: #5A6C7D; font-size: 14px;">
            © 2026 Lian English. All rights reserved.<br/>
            <a href="https://lianenglish.com" style="color: #B8860B; text-decoration: none;">lianenglish.com</a>
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Results email sent to student:', studentEmail);
  } catch (error) {
    console.error('❌ Error sending email to student:', error);
    throw new Error('Failed to send results email');
  }
}

/**
 * Send notification to admin (Lian English team)
 */
export async function sendNotificationToAdmin(results: TestResults): Promise<void> {
  const adminEmail = 'info.lianenglish@gmail.com';

  const mailOptions = {
    from: `"Lian English Test System" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: `New Test Submission - ${results.studentName} (${results.level})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0F2039;">New Placement Test Submission</h2>

        <div style="background: #F8F9FA; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 15px 0; color: #0F2039;">Student Information</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${results.studentName}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${results.studentEmail}</p>
          <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date().toLocaleDateString('vi-VN')}</p>
        </div>

        <div style="background: #E3F2FD; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 15px 0; color: #0F2039;">Test Results</h3>
          <p style="margin: 5px 0;"><strong>Level:</strong> ${results.level} (${results.levelName})</p>
          <p style="margin: 5px 0;"><strong>Score:</strong> ${results.score}/${results.totalQuestions}</p>
          <p style="margin: 5px 0;"><strong>Recommended Class:</strong> ${results.recommendedClass}</p>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <a href="https://lianenglish.com/admin" style="display: inline-block; background: #B8860B; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">
            View in Admin Dashboard
          </a>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Notification sent to admin');
  } catch (error) {
    console.error('❌ Error sending notification to admin:', error);
    // Don't throw error - admin notification is not critical
  }
}
