export const contactFormSchema = {
  parse: (data: any) => {
    const errors: string[] = []

    // Trim all string inputs
    const trimmedData = {
      firstName: data.firstName?.trim() || "",
      lastName: data.lastName?.trim() || "",
      email: data.email?.trim() || "",
      subject: data.subject?.trim() || "",
      message: data.message?.trim() || "",
    }

    if (!trimmedData.firstName || trimmedData.firstName.length < 2) {
      errors.push("First name must be at least 2 characters")
    }

    if (!trimmedData.lastName || trimmedData.lastName.length < 2) {
      errors.push("Last name must be at least 2 characters")
    }

    // Enhanced email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!trimmedData.email) {
      errors.push("Email is required")
    } else if (!emailRegex.test(trimmedData.email)) {
      errors.push("Please enter a valid email address")
    }

    if (!trimmedData.subject || trimmedData.subject.length < 3) {
      errors.push("Subject must be at least 3 characters")
    }

    if (!trimmedData.message || trimmedData.message.length < 10) {
      errors.push("Message must be at least 10 characters")
    }

    if (errors.length > 0) {
      throw new Error(errors[0])
    }

    return trimmedData
  },
}

export type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}
