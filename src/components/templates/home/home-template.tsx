import { CreateCategoryModal } from '@/components/organisms/modals'
import { categoriesQueryOptions } from '@/utils/query-options'
import { Center, Flex, Stack, useDisclosure, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Sidebar } from './sidebar'
import { useGuardedAuth } from '@/contexts/guarded-auth.context'

export function HomeTemplate() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  )
  const { user } = useGuardedAuth()

  const categoriesQuery = useQuery(categoriesQueryOptions(user.uid))

  const selectedCategory = categoriesQuery.data?.find(
    (category) => category._id === selectedCategoryId,
  )

  return (
    <Flex h="full" w="full" userSelect="none">
      <Sidebar
        selectedCategoryId={selectedCategoryId}
        onChangeCategoryId={setSelectedCategoryId}
      />
      <Stack as="main" flex="1">
        <Flex pl="24px" pr="10px" h="50px" alignItems="center">
          <Text
            fontSize="2rem"
            fontWeight={700}
            color={`categories.${selectedCategory?.color}`}
            h="42px"
          >
            {selectedCategory?.title}
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
    </Flex>
  )
}
