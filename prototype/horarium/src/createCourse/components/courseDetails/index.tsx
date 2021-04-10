import React from 'react'
import { Box, Heading, Divider, Text, Stack, Button, Link } from '@chakra-ui/react'
import { Course } from '../../../types'
import { Groups } from './components/groups'
import { AddCourse } from './components/addCourse'
import { Link as ReactLink } from 'react-router-dom'

type Props = {
  course: Course
}

export const CourseDetails = ({ course }: Props) => {
  const showForm = (course: Course) => {
    if (course === null) {
      return true
    }
  }
  return (
    <Box>
      {showForm(course) ? (
        <AddCourse />
      ) : (
        <Box>
          <Box>
            <Heading>{course.name} details:</Heading>
          </Box>
          <Box>
            <Text>
              Course ID: {course.courseId}
              <Divider />
            </Text>
            <Text>
              Description: {course.description}
              <Divider />
            </Text>
            <Text>
              Modules: {course.module}
              <Divider />
            </Text>
            <Divider />
            <Groups groups={course.enroled_groups} />
            <Divider />
            <Text>
              {/* TODO: Subcomponent for display of Schedulers */}
              Schedulers: {course.schedulers}
              <Divider />
            </Text>
            <Text>
              {/* TODO: Subcomponent for display of Events */}
              Course Events: {course.events}
              <Divider />
            </Text>
          </Box>
          <Stack direction='row' spacing={4}>
            <Link as={ReactLink} to={`/home/${course.courseId}`}>
              <Button colorScheme='green' variant='solid'>
                To Calendar
              </Button>
            </Link>
            <Button colorScheme='teal' variant='solid'>
              Edit Course
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  )
}
