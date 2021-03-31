import React from 'react'
import { Box } from '@chakra-ui/react'
import { SidebarWrapper } from './components/sidebar'
import { CourseDetails } from './components/courseDetails'


export const createCourse = () => {
  return (
    <Box height='100%'>
      <SidebarWrapper createCourse={createCourse}>
        <CourseDetails />
      </SidebarWrapper>
    </Box>
  )
} 