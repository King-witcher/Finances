import { useFolders } from '@/contexts/FoldersContext'
import { Box, Flex } from '@chakra-ui/react'

export default function HomePage() {
  const { folders } = useFolders()
  console.log(folders)

  return (
    <Flex h="calc(100dvh - 44px)" w="full">
      <Box
        w="280px"
        h="full"
        bg="#FBFBFD"
        borderRight="1px solid rgb(230, 230, 234)"
      ></Box>
    </Flex>
  )
}
