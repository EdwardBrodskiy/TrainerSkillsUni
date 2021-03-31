import React, { PropsWithChildren } from 'react'
import { ViewGrid, ViewSide } from '../layout'
import { Box, Stack } from '@chakra-ui/react'
import { AddCourse, CourseCard, CreateCourseCaller } from '../courseCard'
//import { CalendarEventType } from '../../../types'

type Props = {
  createCourse: CreateCourseCaller
}

export const Sidebar = ({ createCourse }: Props) => {
  return (
    <Stack spacing={2} padding={2}>
      <CourseCard createCourse={createCourse} />
      <CourseCard createCourse={createCourse} />
      <CourseCard createCourse={createCourse} />
      <AddCourse createCourse={createCourse} />
    </Stack>
  )
}

export const SidebarWrapper = ({
  children,
  createCourse,
}: Props & PropsWithChildren<{}>) => {
  return (
    <ViewGrid>
      <ViewSide>
        <Sidebar createCourse={createCourse} />
      </ViewSide>
      <Box p={3}>{children}</Box>
    </ViewGrid>
  )
}
