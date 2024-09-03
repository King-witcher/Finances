import { Center } from '@chakra-ui/react'
import { FadeLoader } from 'react-spinners'

export function LoadingSession() {
  return (
    <Center h="100dvh">
      <FadeLoader color="#888" />
    </Center>
  )
}
