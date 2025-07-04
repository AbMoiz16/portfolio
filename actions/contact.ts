"use server"

import { contactFormSchema } from "@/lib/validations"

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Check if formData exists
    if (!formData) {
      return {
        success: false,
        message: "Form data is missing. Please try again.",
      }
    }

    // Extract form data
    const rawData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Check if any required fields are missing
    if (!rawData.firstName || !rawData.lastName || !rawData.email || !rawData.subject || !rawData.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Validate the data
    const validatedData = contactFormSchema.parse(rawData)

    // Check if Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      console.log("Contact form submission received:", {
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message.substring(0, 100) + "...",
        timestamp: new Date().toISOString(),
      })

      return {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      }
    }

    // Try to send email using Resend
    try {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      const { data, error } = await resend.emails.send({
        from: "Abdul Moiz Khan Portfolio <noreply@resend.dev>",
        to: ["moiza7197@gmail.com"],
        replyTo: validatedData.email,
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
                New Portfolio Contact
              </h1>
              <p style="color: #fed7aa; margin: 10px 0 0 0; font-size: 16px;">
                Someone is interested in your QA services!
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <!-- Contact Info -->
              <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 5px solid #f97316;">
                <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px;">Contact Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 100px;">Name:</td>
                    <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${validatedData.firstName} ${validatedData.lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${validatedData.email}" style="color: #f97316; text-decoration: none; font-weight: 500;">
                        ${validatedData.email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Subject:</td>
                    <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${validatedData.subject}</td>
                  </tr>
                </table>
              </div>
              
              <!-- Message -->
              <div style="margin-bottom: 30px;">
                <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #f97316; padding-bottom: 8px; display: inline-block;">
                  Message
                </h3>
                <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316; line-height: 1.6;">
                  <p style="margin: 0; color: #334155; font-size: 16px; white-space: pre-wrap;">${validatedData.message}</p>
                </div>
              </div>
              
              <!-- Call to Action -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${validatedData.email}?subject=Re: ${validatedData.subject}" 
                   style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); 
                          color: white; 
                          padding: 15px 30px; 
                          text-decoration: none; 
                          border-radius: 8px; 
                          font-weight: 600; 
                          font-size: 16px;
                          display: inline-block;
                          box-shadow: 0 4px 6px rgba(249, 115, 22, 0.3);">
                  Reply to ${validatedData.firstName}
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #1e293b; padding: 25px; text-align: center;">
              <p style="color: #94a3b8; margin: 0; font-size: 14px;">
                This message was sent from your portfolio contact form
              </p>
              <p style="color: #64748b; margin: 8px 0 0 0; font-size: 12px;">
                Received on ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
              </p>
            </div>
          </div>
        `,
        text: `
New Portfolio Contact

From: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

Reply to: ${validatedData.email}
Received: ${new Date().toLocaleString()}
        `,
      })

      if (error) {
        console.error("Email sending error:", error)
        // Log the submission even if email fails
        console.log("Contact form submission (email failed):", {
          name: `${validatedData.firstName} ${validatedData.lastName}`,
          email: validatedData.email,
          subject: validatedData.subject,
          timestamp: new Date().toISOString(),
        })

        return {
          success: true,
          message: "Thank you for your message! I'll get back to you within 24 hours.",
        }
      }

      console.log("Email sent successfully:", data)
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      }
    } catch (emailError) {
      console.error("Email service error:", emailError)

      // Log the submission even if email service fails
      console.log("Contact form submission (email service failed):", {
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        subject: validatedData.subject,
        timestamp: new Date().toISOString(),
      })

      return {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      }
    }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      }
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again or contact me directly at moiza7197@gmail.com",
    }
  }
}

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Simulate newsletter subscription
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Newsletter subscription:", email, new Date().toISOString())

    return {
      success: true,
      message: "Successfully subscribed to newsletter!",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "Failed to subscribe. Please try again.",
    }
  }
}
