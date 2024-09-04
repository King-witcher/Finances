import { iconMap, iconsNames } from '@/styles/icons'
import { Center, Grid } from '@chakra-ui/react'

interface Props {
  icon: string
  onChange: (icon: string) => void
}

export function Icons({ icon: selectedIcon, onChange }: Props) {
  return (
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
            onClick={() => onChange(iconName)}
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
  )
}
