import { modalAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys)

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'rgba(245,245,247,.85)',
  },
  dialog: {
    borderRadius: '11px',
    margin: '10px',
    boxShadow: '0 11px 34px rgba(0,0,0,.16)',
    bg: 'white',
    overflow: 'hidden',
    w: '600px !important',
    userSelect: 'none',
  },
  header: {
    margin: 0,
    padding: '20px',
  },
  body: {
    justifyContent: 'center',
    padding: '20px',
    m: '0',
    display: 'flex',
    flexDir: 'column',
  },
  footer: {
    margin: 0,
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  closeButton: {
    top: '20px',
    left: '20px',
  },
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})
