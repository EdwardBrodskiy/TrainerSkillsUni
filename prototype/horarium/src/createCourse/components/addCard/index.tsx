import React from 'react'
import { Box } from '@chakra-ui/react'

export type CreateCourseCaller = () => void

type Props = {
  createCourse: CreateCourseCaller
}

export const AddCourse = ({ createCourse }: Props) => {
  return (
    <Box
      p={3}
      bg={'darkgray'}
      rounded={6}
      height={20}
      fontSize={36}
      onClick={() => createCourse()}
      textAlign={'center'}
    >
      +
    </Box>
  )
}
