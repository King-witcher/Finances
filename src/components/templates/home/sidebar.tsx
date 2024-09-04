import { CreateCategoryModal } from '@/components/organisms/modals'
import { useGuardedAuth } from '@/contexts/guarded-auth.context'
import { iconMap } from '@/styles/icons'
import { categoriesQueryOptions } from '@/utils/query-options'
import { Box, Center, Flex, Stack, useDisclosure, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { IoAddCircleOutline } from 'react-icons/io5'
import { FadeLoader } from 'react-spinners'

interface Props {
  selectedCategoryId: string | null
  onChangeCategoryId: (id: string) => void
}

export function Sidebar({ selectedCategoryId, onChangeCategoryId }: Props) {
  const { user } = useGuardedAuth()
  const categoriesQuery = useQuery(categoriesQueryOptions(user.uid))
  const modalState = useDisclosure()

  return (
    <Stack
      spacing={0}
      userSelect="none"
      w="280px"
      h="full"
      bg="#FBFBFD"
      borderRight="1px solid rgb(230, 230, 234)"
    >
      <Box flex="1" p="10px">
        {categoriesQuery.data ? (
          categoriesQuery.data.map((category) => {
            const current = category._id === selectedCategoryId

            return (
              <Flex
                key={category._id}
                h="38px"
                alignItems="center"
                rounded="10px"
                bg={current ? '#00c569' : undefined}
                px="10px"
                gap="10px"
                onClick={() => onChangeCategoryId(category._id)}
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
          })
        ) : (
          <Center w="full" h="full">
            <FadeLoader color="#888" />
          </Center>
        )}
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
          onClick={modalState.onOpen}
        >
          <IoAddCircleOutline size="18px" />
          <Text fontWeight={700}>Nova categoria</Text>
        </Flex>
      </Flex>
      <CreateCategoryModal
        isOpen={modalState.isOpen}
        onClose={modalState.onClose}
      />
    </Stack>
  )
}
