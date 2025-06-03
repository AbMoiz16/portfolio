// Email service utility
export interface EmailData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailData) {
  // Using Resend for email sending
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "portfolio@yourdomain.com",
        to: ["moiza7197@gmail.com"], // Your email
        subject: `New Contact: ${data.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      }),
    })

    if (response.ok) {
      return { success: true, message: "Email sent successfully" }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Email error:", error)
    return { success: false, message: "Failed to send email" }
  }
}

export async function subscribeToNewsletter(email: string) {
  // Using Resend for newsletter
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "newsletter@yourdomain.com",
        to: ["moiza7197@gmail.com"], // Your email
        subject: "New Newsletter Subscription",
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p>Subscribed at: ${new Date().toISOString()}</p>
        `,
      }),
    })

    return { success: true, message: "Successfully subscribed!" }
  } catch (error) {
    console.error("Newsletter error:", error)
    return { success: false, message: "Failed to subscribe" }
  }
}
