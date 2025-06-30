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

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, { success: false, message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!firstName || firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters"
    }

    if (!lastName || lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters"
    }

    if (!email || !email.includes("@") || email.trim().length < 5) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!subject || subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters"
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (formData: FormData) => {
    if (validateForm(formData)) {
      formAction(formData)
    }
  }

  return (
    <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200">
      <CardHeader>
        <CardTitle className="text-white dark:text-white light:text-slate-900">Send a Message</CardTitle>
        <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
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
              <Label htmlFor="firstName" className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                disabled={isPending}
                className={`bg-slate-700 dark:bg-slate-700 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-400 light:placeholder:text-slate-500 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                disabled={isPending}
                className={`bg-slate-700 dark:bg-slate-700 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-400 light:placeholder:text-slate-500 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-slate-300 dark:text-slate-300 light:text-slate-700">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              disabled={isPending}
              className={`bg-slate-700 dark:bg-slate-700 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-400 light:placeholder:text-slate-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="subject" className="text-slate-300 dark:text-slate-300 light:text-slate-700">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Project Discussion"
              required
              disabled={isPending}
              className={`bg-slate-700 dark:bg-slate-700 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-400 light:placeholder:text-slate-500 ${
                errors.subject ? "border-red-500" : ""
              }`}
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="text-slate-300 dark:text-slate-300 light:text-slate-700">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project and QA requirements..."
              rows={4}
              required
              disabled={isPending}
              className={`bg-slate-700 dark:bg-slate-700 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-400 light:placeholder:text-slate-500 ${
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
