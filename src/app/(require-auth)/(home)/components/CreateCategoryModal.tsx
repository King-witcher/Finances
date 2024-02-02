import { useCategories } from '@/contexts/CategoriesContext'
import { colors } from '@/styles/colors'
import { iconMap, iconsNames } from '@/styles/icons'
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ChangeEvent, lazy, useCallback, useEffect, useState } from 'react'

interface Props extends Omit<ModalProps, 'children'> {}

export default function CreateCategoryModal(props: Props) {
  const { createCategory } = useCategories()
  const [selectedColor, setSelectedColor] = useState('red')
  const [selectedIcon, setSelectedIcon] = useState('food')
  const [title, setTitle] = useState('Nova categoria')
  const [titleDirty, setTitleDirty] = useState(false)

  const handleCreateCategory = useCallback(async () => {
    await createCategory({
      _id: '',
      color: selectedColor,
      icon: selectedIcon,
      title,
    })
    props.onClose()
  }, [selectedColor, selectedIcon, title])

  useEffect(() => {
    setSelectedColor('red')
    setSelectedIcon('food')
    setTitle('Nova categoria')
    setTitleDirty(false)
  }, [props.isOpen])

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitleDirty(true)
    if (e.target.value.length <= 40) setTitle(e.target.value)
  }, [])

  return (
    <Modal isCentered {...props} size="600px">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <VStack gap="0">
            <Text fontWeight={700} mt="20px">
              Criar categoria
            </Text>
            <Center
              mt="24px"
              w="6rem"
              h="6rem"
              bg={`categories.${selectedColor}`}
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
                {iconMap[selectedIcon]}
              </Center>
            </Center>
            <Input
              my="24px"
              h="34px"
              w="400px"
              fontSize="14px"
              textAlign="center"
              color={`categories.${selectedColor}`}
              value={title}
              border="1px solid rgba(0,0,0,.16)"
              rounded="8px"
              onChange={handleChangeTitle}
              transition="none"
              onFocus={titleDirty ? undefined : (e) => e.target.select()}
              _hover={{
                bg: 'rgba(0,0,0,.04)',
              }}
              _focus={{
                outline: 'red',
              }}
            />
            <Flex justifyContent="space-between" w="full">
              {colors.map((color) => {
                const selected = color == selectedColor
                return (
                  <Box
                    borderRadius="999px"
                    cursor="pointer"
                    key={color}
                    w="32px"
                    h="32px"
                    onClick={() => setSelectedColor(color)}
                    bg={`categories.${color}`}
                    position="relative"
                    _before={
                      selected
                        ? {
                            pos: 'absolute',
                            top: '-5px',
                            bottom: '-5px',
                            left: '-5px',
                            right: '-5px',
                            content: '""',
                            rounded: '999px',
                            border: '2px solid #858585',
                            zIndex: 1,
                          }
                        : undefined
                    }
                  />
                )
              })}
            </Flex>
            <Grid
              mt="20px"
              justifyContent="space-between"
              gridTemplateColumns="repeat(12, 1fr)"
              w="full"
              flexWrap="wrap"
              gap="16px"
            >
              {iconsNames.map((iconName) => {
                const selected = iconName == selectedIcon
                return (
                  <Center
                    borderRadius="999px"
                    cursor="pointer"
                    key={iconName}
                    w="32px"
                    h="32px"
                    fontSize="20px"
                    onClick={() => setSelectedIcon(iconName)}
                    bg={selected ? 'rgb(235, 235, 235)' : '#fbfbfd'}
                    color="#505050"
                    position="relative"
                    _before={
                      selected
                        ? {
                            pos: 'absolute',
                            top: '-5px',
                            bottom: '-5px',
                            left: '-5px',
                            right: '-5px',
                            content: '""',
                            rounded: '999px',
                            border: '2px solid #858585',
                            zIndex: 1,
                          }
                        : undefined
                    }
                    _hover={{
                      bg: 'rgb(235, 235, 235)',
                    }}
                  >
                    {iconMap[iconName]}
                  </Center>
                )
              })}
            </Grid>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button height="30px" variant="base" onClick={props.onClose}>
            Cancelar
          </Button>
          <Button
            height="30px"
            variant="emphasis"
            onClick={handleCreateCategory}
          >
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
