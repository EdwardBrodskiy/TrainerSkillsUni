import React from 'react'
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { Course } from '../../../../../types'
import { Groups } from '../groups'
import { Description } from '../description'
import { Modules } from '../modules'

type Props = {
  course: Course
  isEditing: boolean
}

export const EditCourse = ({ course, isEditing }: Props) => {
  return (
    <Box>
      <Box>
        <Heading mb='5'>{course.name} details:</Heading>
      </Box>
      <Box>
        <Flex direction='row' align='center' mb='2'>
          <Text fontWeight='bold' mr='1'>
            Course ID:
          </Text>
          <Text>{course.courseId}</Text>
        </Flex>
        <Divider mb='2' />

        <Description description={course.description} isEditing={isEditing} />
        <Divider mb='2' />

        <Modules modules={course.module} isEditing={isEditing} />
        <Divider mb='2' />

        <Groups groups={course.enroled_groups} />
        <Divider mb='2' />

        <Flex direction='row' align='center' mb='2'>
          <Text fontWeight='bold' mr='1'>
            Schedulers:
          </Text>
          <Text>{course.schedulers}</Text>
        </Flex>
        <Divider mb='2' />

        <Flex direction='row' align='center' mb='2'>
          {/* TODO: Subcomponent for display of Events */}
          <Text fontWeight='bold' mr='1'>
            Course Events:
          </Text>
          <Text>{course.schedulers}</Text>
        </Flex>
        <Divider mb='2' />
      </Box>
    </Box>
  )
}
