import React from 'react'
import { Flex, Heading, IconButton, useColorMode, useToast } from '@chakra-ui/react'
import { Course, Role } from '../../../types'
import store from 'store'
import { Session } from '../../../schema'
import { CloseIcon } from '@chakra-ui/icons'
import { isPermited } from '../../../auth'

type Props = {
  course: Course
  setCurrentCourse: any
  removeCourse: () => void
}

export const CourseCard = ({ course, setCurrentCourse, removeCourse }: Props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }
  const thisCourse: Course = store.get('courses')[course.courseId]
  const toast = useToast()

  const changeWorkingCourse = (defultCourse?: number) => {
    const session: Session = store.get('session')
    if (defultCourse !== undefined) {
      session.selectedCourse = Number(0)
      setCurrentCourse(0)
    } else {
      session.selectedCourse = Number(thisCourse.courseId)
      setCurrentCourse(thisCourse)
    }
    store.set('session', session)
  }

  const deleteButton = () => {
    if (isPermited(Role.Admin)) {
      return (
        <IconButton
          aria-label='Remove Course'
          background='red.400'
          size='sm'
          onClick={(e) => {
            try {
              changeWorkingCourse()
              removeCourse()
              changeWorkingCourse(0)
            } catch (e) {
              toast({
                title: 'Invalid Input',
                description: e.message,
                status: 'error',
                position: 'bottom-left',
              })
            }
            e.stopPropagation()
          }}
          icon={<CloseIcon />}
        >
          Remove
        </IconButton>
      )
    }
  }

  return (
    <Flex
      p={3}
      bg={bgColor[colorMode]}
      rounded={6}
      height={20}
      fontSize={18}
      onClick={() => changeWorkingCourse()}
      justify='space-between'
    >
      <Heading size='md' isTruncated>
        {course.name}
      </Heading>
      {deleteButton()}
    </Flex>
  )
}
