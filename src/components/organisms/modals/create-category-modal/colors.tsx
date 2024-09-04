import { colors } from '@/styles/colors'
import { Box, Flex } from '@chakra-ui/react'

interface Props {
  color: string
  onChange: (color: string) => void
}

export function Colors({ color: selectedColor, onChange }: Props) {
  return (
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
            onClick={() => onChange(color)}
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
  )
}
