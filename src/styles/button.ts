import { ChakraProps, defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle<ChakraProps>({
  borderRadius: '8px',
  minW: '163px',
  fontSize: '14px',
  height: '30px',
  px: '16px',
  py: '0',
  bg: 'rgba(0,0,0,.08)',
  color: 'rgba(0,0,0,.88)',
  boxSizing: 'border-box',
  transition: 'none',
  _hover: {
    bg: 'rgb(198, 198, 198)',
  },
})

const emphasis = defineStyle<ChakraProps>({
  ...baseStyle,
  color: 'white',
  fontWeight: 700,
  bg: 'rgb(0, 113, 227)',
  _hover: {
    bg: 'rgb(0, 93, 186)',
  },
})

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: {
    base: baseStyle,
    emphasis,
  },
})
