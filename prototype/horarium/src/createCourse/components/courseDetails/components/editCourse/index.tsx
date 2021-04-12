import React from 'react'
import { Box, Divider, Flex, Heading, StackDivider, Text, VStack } from '@chakra-ui/react'
import { Course, Scheduler } from '../../../../../types'
import { Groups } from '../groups'
import { Description } from '../description'
import { Modules } from '../modules'
import { CourseItem } from './components/courseItem'

type Props = {
  course: Course
  isEditing: boolean
}

export const EditCourse = ({ course, isEditing }: Props) => {
  return (
    <Box>
      <Heading m={8} size='2xl'>
        {course.name}
      </Heading>

      <VStack divider={<Divider />} mr='10%' fontSize={22} textAlign='left'>
        <CourseItem title='Course ID'>{course.courseId}</CourseItem>

        <CourseItem title='Description'>
          <Description description={course.description} isEditing={isEditing} />
        </CourseItem>

        <CourseItem title='Modules'>
          <Modules modules={course.module} isEditing={isEditing} />
        </CourseItem>

        <CourseItem title='Enrolled Groups'>
          <Groups groups={course.enrolled_groups} />
        </CourseItem>

        <CourseItem title='Involved Schedulers'>
          <Text>{course.schedulers.map((scheduler) => scheduler.name)}</Text>
        </CourseItem>

        <CourseItem title='Course Events'>
          TODO: add event but remember the events have colors in the eventType don't be silly this
          time)
        </CourseItem>

        <CourseItem title='Course Length'>
          <Text>{course.schedulers.map((scheduler) => scheduler.name)}</Text>
        </CourseItem>
      </VStack>
    </Box>
  )
}
