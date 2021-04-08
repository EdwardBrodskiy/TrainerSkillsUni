import React from 'react'
import { Box } from '@chakra-ui/react'
import { Course } from '../../../types'
import store from 'store'

type Props = {
  course: Course
  setCurrentCourse: any
}

export type CourseChanger = () => void

export const CourseCard = ({ course, setCurrentCourse }: Props) => {
  var thisCourse: Course = store.get('courses')[course.courseId]
  return (
    <Box
      p={3}
      bg={'gray'}
      rounded={6}
      height={20}
      fontSize={18}
      onClick={event => setCurrentCourse(thisCourse)}
    >
      {course.name}
    </Box>
  )
}