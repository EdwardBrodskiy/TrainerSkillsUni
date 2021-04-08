import React, { PropsWithChildren } from 'react'
import { ViewGrid, ViewSide } from '../layout'
import { Box, Stack } from '@chakra-ui/react'
import { CourseCard } from '../courseCard'
import { AddCourse, CreateCourseCaller } from '../addCard'
import { Course } from '../../../types'

type Props = {
  courses: Course[]
  createCourse: CreateCourseCaller
  setCurrentCourse: any
}

export const Sidebar = ({ courses, createCourse, setCurrentCourse }: Props) => {
  const courseCards = courses.map((course, index) => (
    <CourseCard key={index} course={course} setCurrentCourse={setCurrentCourse} />
  ))
  return (
    <Stack spacing={2} padding={2}>
      {courseCards}
      <AddCourse createCourse={createCourse} />
    </Stack>
  )
}

export const SidebarWrapper = ({
  children,
  courses,
  createCourse,
  setCurrentCourse,
}: Props & PropsWithChildren<{}>) => {
  return (
    <ViewGrid>
      <ViewSide>
        <Sidebar courses={courses} createCourse={createCourse} setCurrentCourse={setCurrentCourse}/>
      </ViewSide>
      <Box p={3}>{children}</Box>
    </ViewGrid>
  )
}
