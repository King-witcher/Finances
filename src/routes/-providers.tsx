import { AuthProvider } from '@/contexts/AuthContext'
import { chakraTheme } from '@/styles/chakraTheme'
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
