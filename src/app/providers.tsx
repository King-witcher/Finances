import { AuthProvider } from '@/contexts/AuthContext'
import { chakraTheme } from '@/styles/chakraTheme'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <AuthProvider>
      <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
    </AuthProvider>
  )
}
