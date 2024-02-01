import { useGuardedAuth } from '@/contexts/GuardedAuthContext'
import { Avatar, Center, Flex, Text } from '@chakra-ui/react'

export default function Header() {
  const { user } = useGuardedAuth()

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
        />
      </Center>
    </Flex>
  )
}
