import { AuthState, useAuth } from '@/contexts/AuthContext'
import { GuardedAuthProvider } from '@/contexts/GuardedAuthContext'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import GuardedProviders from './providers'
import Header from '@/components/Header'

export default function AuthGuardedLayout() {
  const { user, authState, signOut, getToken } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const path = window.location.pathname
    if (authState === AuthState.NotSignedIn)
      navigate(path === '/' ? '/sign-in' : `/sign-in?referrer=${path}`)
  }, [authState])

  if (authState !== AuthState.SignedIn) {
    return 'Loading session'
  }

  return (
    <GuardedAuthProvider user={user} getToken={getToken} signOut={signOut}>
      <GuardedProviders>
        <Header />
        <Outlet />
      </GuardedProviders>
    </GuardedAuthProvider>
  )
}
