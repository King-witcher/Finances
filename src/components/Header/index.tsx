import { useGuardedAuth } from '@/contexts/GuardedAuthContext'
import {
  Avatar,
  Box,
  Center,
  Flex,
  Stack,
  Text,
  keyframes,
  useDisclosure,
} from '@chakra-ui/react'
import { IoCloseCircleOutline } from 'react-icons/io5'

const popoverAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    pointer-events: all;
  }
`

const popoverClose = keyframes`
  from {

  }
  to {
    pointer-events: none;
    opacity: 0;
  }
`

export default function Header() {
  const { user, signOut } = useGuardedAuth()
  const { onClose, onOpen, onToggle, isOpen } = useDisclosure()

  return (
    <Flex
      h="44px"
      w="full"
      alignItems="center"
      bg="rgb(245, 245, 247)"
      borderBottom="1px solid rgb(230, 230, 234)"
      userSelect="none"
      pl="16px"
      pr="6px"
      position="relative"
    >
      <Text fontSize="21px" fontWeight={700} color="#00b847">
        Finanças
      </Text>

      <Center
        h="36px"
        w="36px"
        mx="4px"
        rounded="8px"
        ml="auto"
        _hover={{
          bg: 'rgba(0, 0, 0, 0.08)',
        }}
      >
        <Avatar
          bg="white"
          src={user.photoURL || undefined}
          w="28px"
          h="28pxs"
          onClick={onToggle}
        />
      </Center>

      <Box
        pos="fixed"
        right="7px"
        top="44px"
        w="260px"
        maxW="710px"
        bg="white"
        boxShadow="0 11px 34px rgba(0,0,0,.16)"
        overflow="hidden"
        rounded="12px"
        transformOrigin="top right"
        animation={`${isOpen ? popoverAnimation : popoverClose} 200ms ease`}
        sx={{
          'animation-fill-mode': 'forwards',
        }}
      >
        <Stack
          bg="rgba(170,170,174,.15)"
          p="13px 16px"
          gap="0"
          borderBottom="1px solid rgba(170,170,174,.3)"
          mt="-5px"
          w="fit-content"
        >
          <Text
            fontSize="17px"
            lineHeight="24px"
            fontWeight={700}
            noOfLines={1}
          >
            {user.displayName}
          </Text>
          <Text
            fontSize="14px"
            lineHeight="20px"
            fontWeight={400}
            color="rgba(0,0,0,.56)"
          >
            {user.email}
          </Text>
        </Stack>
        <Stack gap="0" p="5px 5px">
          <Flex
            alignItems="center"
            color="rgb(227, 0, 0)"
            cursor="pointer"
            gap="9px"
            p="5px 10px"
            rounded="10px"
            _hover={{
              bg: 'rgba(170, 170, 174, 0.2)',
              _active: {
                color: 'rgba(227,0,0,.3)',
                bg: 'rgba(0,0,0,.16)',
              },
            }}
            onClick={signOut}
          >
            <IoCloseCircleOutline size="16px" />
            <Text fontSize="14px">Finalizar sessão</Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  )
}
