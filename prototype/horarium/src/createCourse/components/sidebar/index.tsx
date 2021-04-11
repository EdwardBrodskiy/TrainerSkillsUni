import React, { PropsWithChildren } from 'react'
import { ViewGrid, ViewSide } from '../layout'
import { Box, Stack } from '@chakra-ui/react'
import { CourseCard } from '../courseCard'
import { AddCard } from '../addCard'
import { Course } from '../../../types'

type Props = {
  courses: Course[]
  setCurrentCourse: any
}

export const Sidebar = ({ courses, setCurrentCourse }: Props) => {
  const courseCards = courses.map((course, index) => (
    <CourseCard key={index} course={course} setCurrentCourse={setCurrentCourse} />
  ))
  return (
    <Stack spacing={2} padding={2}>
      {courseCards}
      <AddCard setCurrentCourse={setCurrentCourse} />
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
