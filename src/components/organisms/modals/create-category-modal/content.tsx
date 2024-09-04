import { useCategories } from '@/contexts/categories.context'
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalProps,
  VStack,
} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { Header } from './header'
import { Colors } from './colors'
import { Icons } from './icons'

interface Props extends Omit<ModalProps, 'children'> {}

export function Content(props: Props) {
  const { createCategory } = useCategories()
  const [color, setColor] = useState('red')
  const [icon, setIcon] = useState('food')
  const [title, setTitle] = useState('Nova categoria')
  const [titleDirty, setTitleDirty] = useState(false)

  const createCategoryMutation = useMutation({
    mutationFn: async () => {},
  })

  const handleCreateCategory = useCallback(async () => {
    await createCategory({
      _id: '',
      color: color,
      icon: icon,
      title,
    })
    props.onClose()
  }, [color, icon, title])

  function handleChangeTitle(title: string) {
    setTitle(title)
    setTitleDirty(true)
  }

  return (
    <ModalContent>
      <ModalCloseButton />
      <ModalBody>
        <VStack gap="0">
          <Header
            color={color}
            icon={icon}
            title={title}
            titleIsDirty={titleDirty}
            onChangeTitle={handleChangeTitle}
          />
          <Colors color={color} onChange={setColor} />
          <Icons icon={icon} onChange={setIcon} />
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Button height="30px" variant="base" onClick={props.onClose}>
          Cancelar
        </Button>
        <Button height="30px" variant="emphasis" onClick={handleCreateCategory}>
          OK
        </Button>
      </ModalFooter>
    </ModalContent>
  )
}
