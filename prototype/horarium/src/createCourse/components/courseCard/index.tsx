import React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import { Course } from '../../../types'
import store from 'store'

type Props = {
  course: Course
  setCurrentCourse: any
}

export const CourseCard = ({ course, setCurrentCourse }: Props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }
  var thisCourse: Course = store.get('courses')[course.courseId]
  return (
    <Box
      p={3}
      bg={bgColor[colorMode]}
      rounded={6}
      height={20}
      fontSize={18}
      onClick={event => setCurrentCourse(thisCourse)}
    >
      {course.name}
    </Box>
  )
}