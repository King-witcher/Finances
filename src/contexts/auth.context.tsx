import { auth, provider } from '@/services/firebase'
import {
  User,
  signInWithPopup,
  signOut as firebaseSignOut,
  Unsubscribe,
  onAuthStateChanged,
  getIdToken,
} from 'firebase/auth'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export enum AuthState {
  NotSignedIn,
  Loading,
  SignedIn,
}

type AuthData = {
  signIn(): void
  signOut(): void
  getToken(): Promise<string>
} & (
  | {
      user: null
      authState: AuthState.NotSignedIn
    }
  | {
      user: null
      authState: AuthState.Loading
    }
  | {
      user: User
      authState: AuthState.SignedIn
    }
)

interface Props {
  children: ReactNode
}

const AuthContext = createContext<AuthData>({} as AuthData)

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const [authState, setAuthState] = useState(AuthState.Loading)
  const [error, setError] = useState('')

  const signIn = useCallback(async () => {
    try {
      // states will be changed by onAuthStateChanged method
      await signInWithPopup(auth, provider)
    } catch (e) {
      console.error(e)
      if (import.meta.env.DEV) alert(e)
      setAuthState(AuthState.NotSignedIn)
    }
  }, [])

  const signOut = useCallback(async () => {
    try {
      await firebaseSignOut(auth)
    } catch (e) {
      console.error(e)
      if (import.meta.env.DEV) alert(e)
    }
  }, [])

  const getToken = useCallback(async () => {
    if (user) {
      const token = await getIdToken(user, true)
      return token
    } else throw new Error('No user connected')
  }, [user])

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setAuthState(AuthState.SignedIn)
      } else {
        setUser(null)
        setAuthState(AuthState.NotSignedIn)
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={
        {
          user,
          authState,
          signIn,
          signOut,
          getToken,
        } as unknown as AuthData
      }
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
