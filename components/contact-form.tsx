"use client"

import { useActionState, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from "@/actions/contact"

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, { success: false, message: "" })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "firstName":
        if (!value || value.trim().length < 2) {
          return "First name must be at least 2 characters"
        }
        break
      case "lastName":
        if (!value || value.trim().length < 2) {
          return "Last name must be at least 2 characters"
        }
        break
      case "email":
        if (!value || value.trim().length === 0) {
          return "Email is required"
        }
        if (!validateEmail(value.trim())) {
          return "Please enter a valid email address (e.g., user@example.com)"
        }
        break
      case "subject":
        if (!value || value.trim().length < 3) {
          return "Subject must be at least 3 characters"
        }
        break
      case "message":
        if (!value || value.trim().length < 10) {
          return "Message must be at least 10 characters"
        }
        break
    }
    return undefined
  }

  const handleInputChange = (name: string, value: string) => {
    const error = validateField(name, value)
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }))
  }

  const validateForm = (formData: FormData): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    const fields = ["firstName", "lastName", "email", "subject", "message"]

    fields.forEach((field) => {
      const value = formData.get(field) as string
      const error = validateField(field, value)
      if (error) {
        newErrors[field as keyof FormErrors] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (formData: FormData) => {
    if (validateForm(formData)) {
      await formAction(formData)
      // Clear form on successful submission
      if (state.success) {
        setErrors({})
      }
    }
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Send a Message</CardTitle>
        <CardDescription className="text-slate-300">
          Fill out the form below and I'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state && state.message && (
          <Alert
            className={`mb-6 ${state.success ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10"}`}
          >
            {state.success ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
            <AlertDescription className={state.success ? "text-green-400" : "text-red-400"}>
              {state.message}
            </AlertDescription>
          </Alert>
        )}

        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-slate-300">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                disabled={isPending}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={`bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-slate-300">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                disabled={isPending}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={`bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-slate-300">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              disabled={isPending}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="subject" className="text-slate-300">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Project Discussion"
              required
              disabled={isPending}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={`bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 ${
                errors.subject ? "border-red-500" : ""
              }`}
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="text-slate-300">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project and QA requirements..."
              rows={4}
              required
              disabled={isPending}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
