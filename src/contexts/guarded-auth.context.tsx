import { User } from 'firebase/auth'
import { ReactNode, createContext, useContext } from 'react'
import { AuthState } from './auth.context'

// GuardedAuth Context

interface GuardedAuthData {
  user: User
  authState: AuthState.SignedIn
  signOut(): void
  getToken(): Promise<string>
}

interface Props {
  children?: ReactNode
  user: User
  signOut(): void
  getToken(): Promise<string>
}

const GuardedAuthContext = createContext<GuardedAuthData>({} as GuardedAuthData)

export function GuardedAuthProvider({ children, ...rest }: Props) {
  return (
    <GuardedAuthContext.Provider
      value={{
        authState: AuthState.SignedIn,
        ...rest,
      }}
    >
      {children}
    </GuardedAuthContext.Provider>
  )
}

export const useGuardedAuth = () => useContext(GuardedAuthContext)
