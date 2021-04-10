import React from 'react'
import { Box, Heading, Divider, Text, Stack, Button, Link, Flex } from '@chakra-ui/react'
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
            <Heading mb='5'>{course.name} details:</Heading>
          </Box>
          <Box>
            <Flex direction='row' align='center' mb='2'>
              <Text fontWeight='bold' mr='1'>Course ID:</Text>
              <Text>{course.courseId}</Text>
            </Flex>
            <Divider mb='2'/>

            <Flex direction='row' mb='2'>
              <Text fontWeight='bold' mr='1'>Description:</Text>
              <Text>{course.description}</Text>
            </Flex>
            <Divider mb='2'/>

            <Flex direction='row' align='center' mb='2' >
              <Text fontWeight='bold' mr='1'>Modules: </Text>
              <Text>{course.module}</Text>
            </Flex>
            <Divider mb='2'/>

            <Groups groups={course.enroled_groups} />
            <Divider mb='2'/>

            <Flex direction='row' align='center' mb='2' >
              {/* TODO: Subcomponent for display of Schedulers */}
              <Text fontWeight='bold' mr='1'>Schedulers: </Text>
              <Text>{course.schedulers}</Text>
            </Flex>
            <Divider mb='2'/>

            <Flex direction='row' align='center' mb='2' >
              {/* TODO: Subcomponent for display of Events */}
              <Text fontWeight='bold' mr='1'>Course Events: </Text>
              <Text>{course.schedulers}</Text>
            </Flex>
            <Divider mb='2'/>
          </Box>
          <Stack direction='row' justify='center' spacing={8}>
            <Link as={ReactLink} to={`/home/${course.courseId}`}>
              <Button colorScheme='green' variant='solid'>
                To Calendar
              </Button>
            </Link>
            {/* TODO: Edit Course functionality */}
            <Button colorScheme='teal' variant='solid'>
              Edit Course
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  )
}
