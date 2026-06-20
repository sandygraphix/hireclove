"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// Strict backend validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  company: z.string().optional(),
  service: z.string().min(1, "Service is required"),
  message: z.string().optional(),
});

export async function submitContactForm(data: z.infer<typeof contactSchema>) {
  try {
    // 1. Secure Backend Validation
    const parsedData = contactSchema.parse(data);

    // 2. Configure Email Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 3. Premium HTML Email Template
    const htmlEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E3DE; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0A0A0A; padding: 24px; text-align: center; border-bottom: 4px solid #E8581A;">
          <h2 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: -0.5px;">New Workforce Inquiry</h2>
        </div>
        
        <div style="padding: 32px; background-color: #FAFAF8; color: #1A1A1A;">
          <p style="font-size: 16px; margin-bottom: 24px;">A new inquiry has been submitted via the HireClove website.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #E5E3DE;">
              <td style="padding: 12px 0; font-weight: bold; width: 140px; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</td>
              <td style="padding: 12px 0; font-weight: 500;">${parsedData.firstName} ${parsedData.lastName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E3DE;">
              <td style="padding: 12px 0; font-weight: bold; width: 140px; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 0; font-weight: 500;">
                <a href="mailto:${parsedData.email}" style="color: #E8581A; text-decoration: none;">${parsedData.email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E3DE;">
              <td style="padding: 12px 0; font-weight: bold; width: 140px; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</td>
              <td style="padding: 12px 0; font-weight: 500;">${parsedData.company || "<em>Not provided</em>"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E3DE;">
              <td style="padding: 12px 0; font-weight: bold; width: 140px; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service Requested</td>
              <td style="padding: 12px 0; font-weight: 500; color: #E8581A;">${parsedData.service}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background-color: #ffffff; border: 1px solid #E5E3DE; border-radius: 6px;">
            <div style="color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message Details</div>
            <p style="margin: 0; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${parsedData.message || "<em>No additional details provided.</em>"}</p>
          </div>
        </div>
        
        <div style="background-color: #111111; padding: 16px; text-align: center; color: #6B7280; font-size: 12px;">
          Secure transmission from HireClove.com
        </div>
      </div>
    `;

    // 4. Send the Email
    await transporter.sendMail({
      from: `"HireClove Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: parsedData.email, // Allows you to hit "Reply" and email the client directly
      subject: `New Lead: ${parsedData.service} - ${parsedData.company || parsedData.firstName}`,
      html: htmlEmail,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}