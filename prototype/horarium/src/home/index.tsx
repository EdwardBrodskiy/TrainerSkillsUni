import React, { useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import { SidebarWrapper } from './components/sidebar'
import { Calendar } from './components/calendar'
import { Course, PrefillEventData } from '../types'
import { CreateEventModal } from './components/createEvent'
import { Searchbar } from './components/searchbar'
import store from 'store'

export const Home = () => {
  const [eventData, setEventData] = useState<PrefillEventData>({})
  const {
    isOpen: isCreateEventOpen,
    onOpen: onCreateEventOpen,
    onClose: onCreateEventClose,
  } = useDisclosure()
  const createEvent = async (data: PrefillEventData) => {
    await setEventData(data)
    onCreateEventOpen()
  }
  const current_course: Course = store.get('courses')[0] //TODO: add course selection and creation
  return (
    <Box height='100%'>
      <SidebarWrapper events={current_course.eventTypes} createEvent={createEvent}>
        <Calendar />
        <CreateEventModal
          key={`${JSON.stringify(eventData, null, 2)}`} // to make it rerender
          isOpen={isCreateEventOpen}
          onClose={onCreateEventClose}
          prefilledData={eventData}
        />
      </SidebarWrapper>
    </Box>
  )
}
