import React, { useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import { SidebarWrapper } from './components/sidebar'
import { Calendar } from './components/calendar'
import { CalendarEvent } from '../types'
import { CreateEventModal } from './components/createEvent'
import { useHistory } from 'react-router-dom'
import store from 'store'

export const Home = () => {
  const history = useHistory()
  const [eventData, setEventData] = useState<Partial<CalendarEvent>>({})
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(-1)
  const {
    isOpen: isCreateEventOpen,
    onOpen: onCreateEventOpen,
    onClose: onCreateEventClose,
  } = useDisclosure()
  const createEvent = async (data: Partial<CalendarEvent>, eventIndex?: number) => {
    if (eventIndex !== undefined) {
      await setCurrentEventIndex(eventIndex)
    } else {
      await setCurrentEventIndex(-1)
    }
    await setEventData(data)
    onCreateEventOpen()
  }
  const selected_course = () => {
    const course = store.get('session').selectedCourse
    if (course !== undefined) {
      return course
    } else {
      /*This works but it creates a wall of errors,
      to get here clear selectedCourse from memory and enter /home in URL*/
      history.push('/create-course')
      window.location.reload()
    }
  }
  const current_course: Course = store.get('courses')[selected_course()]
  return (
    <Box>
      <SidebarWrapper createEvent={createEvent}>
        <Calendar createEvent={createEvent} />
        <CreateEventModal
          key={`${JSON.stringify(eventData, null, 2)}`} // to make it rerender
          isOpen={isCreateEventOpen}
          onClose={onCreateEventClose}
          prefilledData={eventData}
          eventIndex={currentEventIndex}
        />
      </SidebarWrapper>
    </Box>
  )
}
