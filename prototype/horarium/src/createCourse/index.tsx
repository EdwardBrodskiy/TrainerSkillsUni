import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { SidebarWrapper } from './components/sidebar'
import { CourseDetails } from './components/courseDetails'
import { Course } from '../types'
import store from 'store'


export const CreateCourse = () => {
  const courseList: Course[] = store.get('courses')
  var defaultCourse: Course = store.get('courses')[0]
  const [currentCourse, setCurrentCourse] = useState(defaultCourse)
  return (
    <Box height='100%'>
      <SidebarWrapper 
        courses={courseList} 
        createCourse={CreateCourse} 
        setCurrentCourse={setCurrentCourse}
      >
        <CourseDetails course={currentCourse} />
      </SidebarWrapper>
    </Box>
  )
} 