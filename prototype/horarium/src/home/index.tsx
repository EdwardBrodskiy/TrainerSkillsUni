import React from 'react'
import { Box } from '@chakra-ui/react'
import { SidebarWrapper } from './components/sidebar'
import { Calendar } from './components/calendar'
import { CalendarEvent } from '../types'

const events: CalendarEvent[] = [
  { title: 'Lecture', color: 'tomato' },
  { title: 'Lab', color: 'orange' },
  { title: 'Exam', color: 'purple' },
]

export const Home = () => {
  return (
    <Box height='100%'>
      <SidebarWrapper events={events}>
        <Calendar />
      </SidebarWrapper>
    </Box>
  )
}
