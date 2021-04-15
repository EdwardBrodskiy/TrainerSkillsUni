import React, { PropsWithChildren } from 'react'
import { ViewGrid, ViewSide } from '../layout'
import { Box, Stack } from '@chakra-ui/react'
import { CourseCard } from '../courseCard'
import { AddCard } from '../addCard'
import { Course, Role } from '../../../types'
import store from 'store'
import { isPermited } from '../../../auth'

type Props = {
  courses: Course[]
  setCurrentCourse: any
}

export const Sidebar = ({ courses, setCurrentCourse }: Props) => {
  const removeCourse = () => {
    let counter = 0
    const courses: Course[] = store.get('courses')
    courses.splice(store.get('session').selectedCourse, 1)
    courses.forEach((course) => {
      course.courseId = String(counter)
      counter += 1
    })
    store.set('courses', courses)
  }

  const addCard = () => {
    if (isPermited(Role.Scheduler)) {
      return <AddCard setCurrentCourse={setCurrentCourse} />
    }
  }

  const courseCards = courses.map((course, index) => (
    <CourseCard
      key={index}
      course={course}
      setCurrentCourse={setCurrentCourse}
      removeCourse={removeCourse}
    />
  ))
  return (
    <Stack spacing={2} padding={2}>
      {courseCards}
      {addCard()}
    </Stack>
  )
}

export const SidebarWrapper = ({
  children,
  courses,
  setCurrentCourse,
}: Props & PropsWithChildren<{}>) => {
  return (
    <ViewGrid>
      <ViewSide
        height='57em'
        overflowY='scroll'
        sx={{
          '::-webkit-scrollbar': { display: 'none' },
          msOverFlowStyle: 'none',
          scrollbarWidth: 'none',
          scrollSnapType: 'y manditory',
        }}
      >
        <Sidebar courses={courses} setCurrentCourse={setCurrentCourse} />
      </ViewSide>
      <Box p={3}>{children}</Box>
    </ViewGrid>
  )
}
