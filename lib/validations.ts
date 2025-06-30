export const contactFormSchema = {
  parse: (data: any) => {
    const errors: string[] = []

    if (!data.firstName || data.firstName.trim().length < 2) {
      errors.push("First name must be at least 2 characters")
    }

    if (!data.lastName || data.lastName.trim().length < 2) {
      errors.push("Last name must be at least 2 characters")
    }

    // Enhanced email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email || data.email.trim().length === 0) {
      errors.push("Email is required")
    } else if (!emailRegex.test(data.email.trim())) {
      errors.push("Please enter a valid email address")
    }

    if (!data.subject || data.subject.trim().length < 3) {
      errors.push("Subject must be at least 3 characters")
    }

    if (!data.message || data.message.trim().length < 10) {
      errors.push("Message must be at least 10 characters")
    }

    if (errors.length > 0) {
      throw new Error(errors[0])
    }

    return data
  },
}

export type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}
