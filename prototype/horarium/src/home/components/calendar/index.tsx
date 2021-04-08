import React from 'react'
import { Box, Grid, HStack, useColorMode } from '@chakra-ui/react'
import { Day } from './components/day'
import store from 'store'
import { Course } from '../../../types'
import { DayIndex } from './components/day_index'

const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const Calendar = () => {
  const { colorMode } = useColorMode()
  const altBgColor = { light: 'gray.300', dark: 'gray.600' }
  const scale = 64

  const current_course: Course = store.get('courses')[0]

  const days = week_days.map((day, index) => (
    <Box w='100%' h='14' bg={altBgColor[colorMode]} padding='3' fontSize='20' isTruncated>
      {day}
    </Box>
  ))
  const day_events = week_days.map((day, day_index) => {
    const events = current_course.events.filter((event) => {
      const time = new Date(event.start_time)
      return time.getDay() - 1 === day_index
    })
    return <Day events={events} scale={scale} />
  })
  return (
    <Box>
      <Grid templateColumns='7% repeat(7, 13%)' gap={1} mb={1}>
        <Box></Box>
        {days}
      </Grid>
      <Box
        height={`${(scale + 4) * 9}px`}
        overflowY='scroll'
        sx={{
          '::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          'scroll-snap-type': 'y manditory',
        }}
      >
        <Grid templateColumns='7% repeat(7, 13%)' gap={1}>
          <DayIndex />
          {day_events}
        </Grid>
      </Box>
    </Box>
  )
}
