"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { subscribeToNewsletter } from "@/actions/contact"

export function NewsletterSignup() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, { success: false, message: "" })

  return (
    <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Get the latest insights on software testing, QA best practices, and industry trends delivered to your inbox.
        </p>

        {state && state.message && (
          <Alert
            className={`mb-4 max-w-md mx-auto ${state.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
          >
            {state.success ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription className={state.success ? "text-green-800" : "text-red-800"}>
              {state.message}
            </AlertDescription>
          </Alert>
        )}

        <form action={formAction} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 bg-white text-slate-900"
            required
            disabled={isPending}
          />
          <Button type="submit" variant="secondary" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
