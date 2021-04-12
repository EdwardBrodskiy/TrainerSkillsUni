import React from 'react'
import { Box, Grid, useColorMode } from '@chakra-ui/react'
import { Day } from './components/day'
import store from 'store'
import { Course } from '../../../types'
import { DayIndex } from './components/day_index'
import { CreateEventCaller } from '../eventCard'

const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

type Props = {
  createEvent: CreateEventCaller
}

export const Calendar = ({ createEvent }: Props) => {
  const { colorMode } = useColorMode()
  const altBgColor = { light: 'gray.300', dark: 'gray.600' }
  const scale = 64

  const current_course: Course = store.get('courses')[0]

  const days = week_days.map((day, index) => (
    <Box
      key={index}
      w='100%'
      h='14'
      bg={altBgColor[colorMode]}
      padding='3'
      fontSize='20'
      isTruncated
    >
      {day}
    </Box>
  ))
  const day_events = week_days.map((day, day_index) => {
    const eventIndexRefs: number[] = []
    const events = current_course.events.filter((event, index) => {
      const time = new Date(event.start_time)
      if ((time.getDay() + 6) % 7 === day_index) {
        eventIndexRefs.push(index)
        return true
      }
      return false
    })
    return (
      <Day
        key={day}
        events={events}
        eventIndexRefs={eventIndexRefs}
        scale={scale}
        createEvent={createEvent}
      />
    )
  })

  return (
    <Box>
      <Grid key='labels' templateColumns='7% repeat(7, 13%)' gap={1} mb={1}>
        <Box></Box>
        {days}
      </Grid>
      <Box
        height={`${(scale + 4) * 11}px`}
        overflowY='scroll'
        sx={{
          '::-webkit-scrollbar': { display: 'none' },
          msOverFlowStyle: 'none',
          scrollbarWidth: 'none',
          scrollSnapType: 'y manditory',
        }}
      >
        <Grid key='grid' templateColumns='7% repeat(7, 13%)' gap={1}>
          <DayIndex />
          {day_events}
        </Grid>
      </Box>
    </Box>
  )
}
