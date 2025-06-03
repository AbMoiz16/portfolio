"use server"

import { contactFormSchema } from "@/lib/validations"
import { sendEmail } from "@/lib/email"

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

    // Send email
    const result = await sendEmail(validatedData)

    if (result.success) {
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      }
    } else {
      return {
        success: false,
        message: "Failed to send message. Please try again.",
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
      message: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  // Simulate newsletter subscription
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("Newsletter subscription:", email)

  return {
    success: true,
    message: "Successfully subscribed to newsletter!",
  }
}
