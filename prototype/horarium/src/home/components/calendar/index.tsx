import React from 'react'
import { Box, Grid, useColorMode } from '@chakra-ui/react'
import { Day } from './components/day'
import store from 'store'
import { Course } from '../../../types'
import { DayIndex } from './components/day_index'

const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const Calendar = () => {
  const { colorMode } = useColorMode()
  const altBgColor = { light: 'gray.300', dark: 'gray.600' }

  const current_course: Course = store.get('courses')[0]

  const days = week_days.map((day, index) => (
    <Box w='100%' h='14' bg={altBgColor[colorMode]} padding='3' fontSize='20'>
      {day}
    </Box>
  ))
  const day_events = week_days.map((day, day_index) => {
    const events = current_course.events.filter((event) => {
      const time = new Date(event.start_time)
      return time.getDay() - 1 === day_index
    })
    return <Day events={events} />
  })
  return (
    <Grid templateColumns='repeat(8, 1fr)' gap={1}>
      <Box></Box>
      {days}
      <DayIndex />
      {day_events}
    </Grid>
  )
}
