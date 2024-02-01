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
  const { categories } = useCategories()
  const [currentCategory, setCurrentCategory] = useState<Folder | null>(null)
  const { onClose, onOpen, isOpen } = useDisclosure()

  const selectCategory = useCallback((category: Folder) => {
    setCurrentCategory(category)
  }, [])

  return (
    <Flex h="calc(100dvh - 44px)" w="full" userSelect="none">
      <Stack
        gap="0"
        userSelect="none"
        w="280px"
        h="full"
        bg="#FBFBFD"
        borderRight="1px solid rgb(230, 230, 234)"
      >
        <Box flex="1" p="10px">
          {categories.map((category) => {
            const current = category === currentCategory

            return (
              <Flex
                key={category._id}
                h="38px"
                alignItems="center"
                rounded="10px"
                bg={current ? '#00c569' : undefined}
                px="10px"
                gap="10px"
                onClick={() => setCurrentCategory(category)}
                _hover={{
                  bg: current ? '#009952' : 'rgb(0, 0, 0, 0.04)',
                }}
              >
                <Center
                  borderRadius="999px"
                  bgColor={`categories.${category.color}`}
                  w="24px"
                  h="24px"
                  color="white"
                  border="1px solid white"
                  fontSize="16px"
                  overflow="hidden"
                >
                  {iconMap[category.icon]}
                </Center>
                <Text fontWeight={500}>{category.title}</Text>
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
            <Text fontWeight={700}>Nova categoria</Text>
          </Flex>
        </Flex>
      </Stack>
      <Stack as="main" flex="1">
        <Flex pl="24px" pr="10px" h="50px" alignItems="center">
          <Text
            fontSize="2rem"
            fontWeight={700}
            color={`categories.${currentCategory?.color}`}
            h="42px"
          >
            {currentCategory?.title}
          </Text>
        </Flex>
        <Center
          fontSize="1.1875rem"
          flex="1"
          fontWeight={700}
          color="rgba(0,0,0,.48)"
        >
          Não implementado
        </Center>
      </Stack>
      <CreateCategoryModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
