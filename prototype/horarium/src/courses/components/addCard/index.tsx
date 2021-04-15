import React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

type Props = {
  setCurrentCourse: any
}

export const AddCard = ({ setCurrentCourse }: Props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.100', dark: 'gray.600' }
  return (
    <Box
      p={3}
      bg={bgColor[colorMode]}
      rounded={6}
      height={20}
      fontSize={36}
      textAlign={'center'}
      onClick={(event) => setCurrentCourse(null)}
    >
      +
    </Box>
  )
}
