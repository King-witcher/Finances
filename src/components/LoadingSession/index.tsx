import { Center, Stack } from '@chakra-ui/react'
import { FadeLoader } from 'react-spinners'

export default function LoadingSession() {
  return (
    <Center h="100dvh">
      <FadeLoader color="#888" />
    </Center>
  )
}
