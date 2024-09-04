import { SignInTemplate } from '@/components/templates'
import { AuthState, useAuth } from '@/contexts/auth.context'
import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-in')({
  component: Page,
  validateSearch,
})

function validateSearch(search: Record<string, unknown>): {
  referrer?: string
} {
  return {
    referrer: search.referrer?.toString(),
  }
}

function Page() {
  const { referrer } = Route.useSearch()
  const { authState } = useAuth()
  if (authState === AuthState.SignedIn) {
    return <Navigate to={referrer} />
  }
  return <SignInTemplate />
}
