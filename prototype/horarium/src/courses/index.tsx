import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { SidebarWrapper } from './components/sidebar'
import { CourseDetails } from './components/courseDetails'
import { Course } from '../types'
import store from 'store'

export const Courses = () => {
  const courseList: Course[] = store.get('courses')
  let selected_course = store.get('session').selectedCourse
  if (selected_course === undefined) {
    selected_course = 0
  }
  const [currentCourse, setCurrentCourse] = useState(courseList[selected_course])

  return (
    <Box height='100%'>
      <SidebarWrapper courses={courseList} setCurrentCourse={setCurrentCourse}>
        <CourseDetails course={currentCourse} />
      </SidebarWrapper>
    </Box>
  )
}
