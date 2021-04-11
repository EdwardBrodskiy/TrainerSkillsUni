import React, { useState } from 'react'
import { Box, Stack, Button, Link, ButtonGroup } from '@chakra-ui/react'
import { Course } from '../../../types'
import { AddCourse } from './components/addCourse'
import { EditCourse } from './components/editCourse'
import { Link as ReactLink } from 'react-router-dom'
import store from 'store'

type Props = {
  course: Course
}

export const CourseDetails = ({ course }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  const editButton = (setIsEditing: any) => {
    return isEditing ? (
      <ButtonGroup>
        <Button colorScheme='green' variant='solid' onClick={() => setIsEditing(false)}>
          Save
        </Button>
        <Button colorScheme='red' variant='solid' onClick={() => setIsEditing(false)}>
          Cancel
        </Button>
      </ButtonGroup>
    ) : (
      <Button colorScheme='teal' variant='solid' onClick={() => setIsEditing(true)}>
        Edit Course
      </Button>
    )
  }

  if (!course) {
    return <AddCourse />
  }
  return (
    <Box>
      <EditCourse course={course} isEditing={isEditing} />

      <Stack direction='row' justify='space-between' mx='20%' mt={4}>
        <Link as={ReactLink} to={'/home'}>
          <Button
            colorScheme='green'
            variant='solid'
            onClick={() => {
              select_course(Number(course.courseId))
            }}
          >
            To Calendar
          </Button>
        </Link>
        {editButton(setIsEditing)}
      </Stack>
    </Box>
  )
}

const select_course = (courseId: number) => {
  store.set('selectedCourse', courseId)
}
