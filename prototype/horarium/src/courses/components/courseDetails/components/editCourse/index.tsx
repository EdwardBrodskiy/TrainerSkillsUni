import React, { useState } from 'react'
import { Box, Button, ButtonGroup, Divider, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { Course, Role } from '../../../../../types'
import { Groups } from './components/groups'
import { Description } from './components/description'
import { Modules } from './components/modules'
import { CourseItem } from './components/courseItem'
import { Link as ReactLink } from 'react-router-dom'
import { isPermited } from '../../../../../auth'
import store from 'store'

type Props = {
  course: Course
}

export const EditCourse = ({ course }: Props) => {
  const [newDescription, setNewDescription] = useState(course.description)
  const [newModule, setNewModule] = useState(course.module)
  const [isEditing, setIsEditing] = useState(false)

  const editButton = (setIsEditing: any) => {
    if(isPermited(Role.Scheduler)) {
      return isEditing ? (
        <ButtonGroup>
          <Button
            colorScheme='green'
            variant='solid'
            onClick={() => handleSave(store.get('session').selectedCourse)}
          >
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
  }

  const handleSave = (course_index: number) => {
    const courses: Course[] = store.get('courses')
    courses[course_index].description = newDescription
    courses[course_index].module = newModule
    store.set('courses', courses)
    window.location.reload() 
  }
  
  return (
    <Box>
      <Heading m={8} size='2xl'>
        {course.name}
      </Heading>

      <VStack divider={<Divider />} mr='10%' fontSize={22} textAlign='left'>
        <CourseItem title='Course ID'>{course.courseId}</CourseItem>

        <CourseItem title='Description'>
          <Description
            description={course.description}
            isEditing={isEditing}
            setNewDescription={setNewDescription}
          />
        </CourseItem>

        <CourseItem title='Modules'>
          <Modules modules={course.module} isEditing={isEditing} setNewModule={setNewModule} />
        </CourseItem>

        <CourseItem title='Enrolled Groups'>
          <Groups groups={course.enrolled_groups} />
        </CourseItem>

        <CourseItem title='Involved Schedulers'>
          <Text>{course.schedulers.map((scheduler) => scheduler.name)}</Text>
        </CourseItem>

        <CourseItem title='Course Events'>
          TODO: add event but remember the events have colors in the eventType don't be silly this
          time
        </CourseItem>

        <CourseItem title='Course Length'>
          <Text>{course.schedulers.map((scheduler) => scheduler.name)}</Text>
        </CourseItem>
      </VStack>
      <Stack direction='row' justify='space-between' mx='20%' mt={4}>
        <Link as={ReactLink} to={'/home'}>
          <Button colorScheme='green' variant='solid'>
            To Calendar
          </Button>
        </Link>
        {editButton(setIsEditing)}
      </Stack>
    </Box>
  )
}
