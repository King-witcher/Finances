import { Modal, ModalOverlay, ModalProps } from '@chakra-ui/react'
import { Content } from './content'

interface Props extends Omit<ModalProps, 'children'> {}

export function CreateCategoryModal(props: Props) {
  return (
    <Modal isCentered {...props} size="600px">
      <ModalOverlay />
      {/* This is a separate component in order to reset all of it's states when the modal is unmounted. */}
      <Content {...props} />
    </Modal>
  )
}
