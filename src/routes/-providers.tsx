import { AuthProvider } from '@/contexts/auth.context'
import { chakraTheme } from '@/styles/chara-theme'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const queryclient = new QueryClient()

export function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryclient}>
      <AuthProvider>
        <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
