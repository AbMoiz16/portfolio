export const contactFormSchema = {
  parse: (data: any) => {
    const errors: string[] = []

    if (!data.firstName || data.firstName.length < 2) {
      errors.push("First name must be at least 2 characters")
    }

    if (!data.lastName || data.lastName.length < 2) {
      errors.push("Last name must be at least 2 characters")
    }

    if (!data.email || !data.email.includes("@")) {
      errors.push("Please enter a valid email address")
    }

    if (!data.subject || data.subject.length < 5) {
      errors.push("Subject must be at least 5 characters")
    }

    if (!data.message || data.message.length < 10) {
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
