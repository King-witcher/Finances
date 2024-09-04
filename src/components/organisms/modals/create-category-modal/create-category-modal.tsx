import { Modal, ModalOverlay, ModalProps } from '@chakra-ui/react'
import { Content } from './content'

interface Props extends Omit<ModalProps, 'children'> {}

export function CreateCategoryModal(props: Props) {
  return (
    <Modal isCentered {...props} size="600px">
      <ModalOverlay />
      <Content {...props} />
    </Modal>
  )
}
