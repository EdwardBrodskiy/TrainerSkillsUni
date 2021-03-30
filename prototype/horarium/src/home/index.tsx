import React, { useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import { SidebarWrapper } from './components/sidebar'
import { Calendar } from './components/calendar'
import { CalendarEventType, PrefillEventData } from '../types'
import { CreateEventModal } from './components/createEvent'

const events: CalendarEventType[] = [
  { name: 'Lecture', color: 'tomato' },
  { name: 'Lab', color: 'orange' },
  { name: 'Exam', color: 'purple' },
]

export const Home = () => {
  const [eventData, setEventData] = useState<PrefillEventData>({})
  const {
    isOpen: isCreateEventOpen,
    onOpen: onCreateEventOpen,
    onClose: onCreateEventClose,
  } = useDisclosure()
  const createEvent = (data: PrefillEventData) => {
    setEventData(data)
    onCreateEventOpen()
  }
  return (
    <Box height='100%'>
      <SidebarWrapper events={events} createEvent={createEvent}>
        <Calendar />
        <CreateEventModal
          isOpen={isCreateEventOpen}
          onClose={onCreateEventClose}
          prefilledData={eventData}
        />
      </SidebarWrapper>
    </Box>
  )
}
