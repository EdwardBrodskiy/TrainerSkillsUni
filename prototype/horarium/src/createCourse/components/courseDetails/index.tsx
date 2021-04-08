import React from 'react'
import { Box, Heading, Divider, Text } from '@chakra-ui/react'
import { Course } from '../../../types'
import { Groups } from './components/groups'
import { Module } from './components/module'

type Props = {
  course: Course
}

export const CourseDetails = ({ course }: Props) => {
  return (
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
        <Module modules={course.module} />
        <Divider />
        <Groups groups={course.enroled_groups} />
        <Divider />
        <Text>
          {/* TODO: Subcomponent for display of events */}
          Course Events: {course.events}
          <Divider />
        </Text> 
      </Box>
    </Box>
  )
}