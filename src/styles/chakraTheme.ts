import { extendTheme, styled } from '@chakra-ui/react'
import { modalTheme } from './modal'
import { buttonTheme } from './button'

export const chakraTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Nunito Variable',
      },
    },
  },
  colors: {
    theme: 'rgb(0, 197, 105)',
    categories: {
      wine: '#902040',
      red: '#f01010',
      orange: '#ff7000',
      yellow: '#f0e000',
      green: '#20b030',
      cyan: '#00b0d0',
      blue: '#0050ff',
      violet: '#7010e0',
      magenta: '#e010b8',
      pink: '#f070e0',
      brown: '#906040',
      gray: '#606070',
    },
  },
  components: {
    Modal: modalTheme,
    Button: buttonTheme,
  },
})
