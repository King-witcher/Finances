import { useCategories } from '@/contexts/CategoriesContext'
import { iconMap } from '@/styles/icons'
import { Folder } from '@/types/Folder'
import {
  Box,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import {
  IoAdd,
  IoAddCircleOutline,
  IoFastFood,
  IoFastFoodOutline,
} from 'react-icons/io5'
import CreateCategoryModal from './components/CreateCategoryModal'

export default function HomePage() {
  const { categories: folders } = useCategories()
  const [currentCategory, setCurrentCategory] = useState('')
  const { onClose, onOpen, isOpen } = useDisclosure()

  const selectCategory = useCallback((category: Folder) => {
    setCurrentCategory(category._id)
  }, [])

  return (
    <Flex h="calc(100dvh - 44px)" w="full">
      <Stack
        gap="0"
        userSelect="none"
        w="280px"
        h="full"
        bg="#FBFBFD"
        borderRight="1px solid rgb(230, 230, 234)"
      >
        <Box flex="1" p="10px">
          {folders.map((folder) => {
            const current = folder._id === currentCategory

            return (
              <Flex
                key={folder._id}
                h="38px"
                alignItems="center"
                rounded="10px"
                bg={current ? '#00c569' : undefined}
                px="10px"
                gap="10px"
                onClick={() => setCurrentCategory(folder._id)}
                _hover={{
                  bg: current ? '#009952' : 'rgb(0, 0, 0, 0.04)',
                }}
              >
                <Center
                  borderRadius="999px"
                  bgColor={`categories.${folder.color}`}
                  w="24px"
                  h="24px"
                  color="white"
                  border="1px solid white"
                  fontSize="16px"
                  overflow="hidden"
                >
                  {iconMap[folder.icon]}
                </Center>
                <Text fontWeight={500}>{folder.title}</Text>
              </Flex>
            )
          })}
        </Box>
        <Flex flexShrink={0} h="36px" alignItems="center" px="10px">
          <Flex
            alignItems="center"
            gap="2px"
            color="#03cc6e"
            cursor="pointer"
            _hover={{
              color: '#00a156',
            }}
            onClick={onOpen}
          >
            <IoAddCircleOutline size="18px" />
            <Text fontWeight={800}>Nova categoria</Text>
          </Flex>
        </Flex>
      </Stack>
      <CreateCategoryModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
