import { iconMap } from '@/styles/icons'
import { Center, Input, Text, VStack } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

interface Props {
  color: string
  icon: string
  title: string
  titleIsDirty: boolean
  onChangeTitle: (title: string) => void
}

export function Header({
  color,
  icon,
  title,
  titleIsDirty,
  onChangeTitle,
}: Props) {
  function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length <= 40) onChangeTitle(e.target.value)
  }

  return (
    <VStack spacing={0}>
      <Text fontWeight={700} mt="20px">
        Criar categoria
      </Text>
      <Center
        mt="24px"
        w="6rem"
        h="6rem"
        bg={`categories.${color}`}
        transition="background 300ms linear"
        rounded="999px"
        color="white"
        fontSize="4rem"
        overflow="hidden"
        boxShadow="rgba(0, 0, 60, 0.2) 0px 4px 12px"
        position="relative"
      >
        <Center
          w="full"
          h="full"
          bg="linear-gradient(hsla(0,0%,100%,.2),rgba(0,0,0,.1))"
        >
          {iconMap[icon]}
        </Center>
      </Center>
      <Input
        my="24px"
        h="34px"
        w="400px"
        fontSize="14px"
        textAlign="center"
        color={`categories.${color}`}
        value={title}
        border="1px solid rgba(0,0,0,.16)"
        rounded="8px"
        onChange={handleChangeTitle}
        transition="none"
        onFocus={titleIsDirty ? undefined : (e) => e.target.select()}
        _hover={{
          bg: 'rgba(0,0,0,.04)',
        }}
        _focus={{
          outline: 'red',
        }}
      />
    </VStack>
  )
}
