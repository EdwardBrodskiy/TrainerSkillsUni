import React, { useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import { SidebarWrapper } from './components/sidebar'
import { Calendar } from './components/calendar'
import { Course, PrefillEventData } from '../types'
import { CreateEventModal } from './components/createEvent'
import { Searchbar } from './components/searchbar'
import store from 'store'
import { useHistory } from 'react-router-dom'

export const Home = () => {
  const history = useHistory()
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
