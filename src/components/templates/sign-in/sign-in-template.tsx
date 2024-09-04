import { LoadingSession } from '@/components/atoms'
import { AuthState, useAuth } from '@/contexts/auth.context'
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

export function SignInTemplate() {
  const { authState, signIn } = useAuth()

  if (authState === AuthState.Loading) {
    return <LoadingSession />
  }

  return (
    <Modal size="600px" isOpen isCentered onClose={() => {}}>
      <ModalOverlay />
      <ModalContent rounded="20px">
        <ModalBody alignItems="center">
          <Text
            fontSize="60px"
            fontWeight={700}
            textAlign="center"
            color="theme"
          >
            Finanças
          </Text>
          <Button
            w="fit-content"
            mt="30px"
            onClick={signIn}
            p="10px 15px"
            rounded="10px"
            bg="#f0f0f4"
            _hover={{
              bg: '#e8e8ea',
            }}
          >
            <Flex gap="10px" fontSize="20px" fontWeight={400}>
              <FcGoogle />
              Entrar com Google
            </Flex>
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
