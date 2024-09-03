import { LoadingSession } from '@/components/atoms'
import { Topbar } from '@/components/organisms'
import { AuthState, useAuth } from '@/contexts/AuthContext'
import { GuardedAuthProvider } from '@/contexts/GuardedAuthContext'
import { Box } from '@chakra-ui/react'
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-guarded')({
  component: () => {
    const { user, authState, getToken, signOut } = useAuth()
    const path = window.location.pathname

    if (authState === AuthState.NotSignedIn) {
      return <Navigate to="/sign-in" search={{ referrer: path }} />
    }

    if (authState === AuthState.Loading) {
      return <LoadingSession />
    }

    return (
      <GuardedAuthProvider user={user} getToken={getToken} signOut={signOut}>
        <Box position="absolute" inset={0} h="100dvh">
          <Topbar />
          <Box h="calc(100% - 44px)" w="full" overflow="hidden">
            <Outlet />
          </Box>
        </Box>
      </GuardedAuthProvider>
    )
  },
})
