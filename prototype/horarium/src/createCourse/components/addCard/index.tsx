import React from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  setCurrentCourse: any
}

export const AddCard = ({ setCurrentCourse }: Props) => {
  return (
    <Box
      p={3}
      bg={'darkgray'}
      rounded={6}
      height={20}
      fontSize={36}
      textAlign={'center'}
      onClick={event => setCurrentCourse(null)}
    >
      +
    </Box>
  )
}
