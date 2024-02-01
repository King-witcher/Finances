import { AuthState, useAuth } from '@/contexts/AuthContext'
import { useQueryParam } from '@/hooks/useQueryParam'
import { Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignInPage() {
  const { authState, signIn } = useAuth()
  const referrer = useQueryParam('referrer') || '/'
  const navigate = useNavigate()

  useEffect(() => {
    if (authState === AuthState.SignedIn) {
      navigate(referrer)
    }
  }, [authState])

  if (authState !== AuthState.NotSignedIn) {
    return null
  }

  return <Button onClick={signIn}>Entrar</Button>
}
