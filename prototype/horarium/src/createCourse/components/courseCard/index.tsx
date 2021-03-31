import React from 'react'
import { Box } from '@chakra-ui/react'
//import { PrefillEventData } from '../../../types'

export type CreateCourseCaller = () => void

type Props = {
  createCourse: CreateCourseCaller
}

export const CourseCard = ({ createCourse }: Props) => {
  return (
    <Box
      p={3}
      bg={'green'}
      rounded={6}
      height={20}
      fontSize={18}
      onClick={() => createCourse()}
    >
      Course
    </Box>
  )
}

export const AddCourse = ({ createCourse }: Props) => {
  return (
    <Box
      p={3}
      bg={'darkblue'}
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
