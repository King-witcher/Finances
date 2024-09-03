import { CreateCategoryModal } from '@/components/organisms/modals'
import { useGuardedAuth } from '@/contexts/GuardedAuthContext'
import { Category } from '@/types/Category'
import { categoriesQueryOptions } from '@/utils/query-options'
import { Center, Flex, Stack, useDisclosure, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Sidebar } from './sidebar'

export function HomeTemplate() {
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null)
  const { onClose, onOpen, isOpen } = useDisclosure()
  const { user } = useGuardedAuth()

  const categoriesQuery = useQuery(categoriesQueryOptions(user.uid))

  return (
    <Flex h="full" w="full" userSelect="none">
      <Sidebar currentCategory={null} />
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
