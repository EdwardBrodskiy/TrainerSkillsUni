import React from 'react'
import { Course } from '../../../types'
import { AddCourse } from './components/addCourse'
import { EditCourse } from './components/editCourse'

type Props = {
  course: Course
}

export const CourseDetails = ({ course }: Props) => {
  if (!course) {
    return <AddCourse />
  }
  return <EditCourse course={course} />
}
