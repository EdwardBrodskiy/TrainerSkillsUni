import React, { PropsWithChildren, useState } from 'react'
import { ViewGrid, ViewSide } from '../layout'
import { Box, Stack } from '@chakra-ui/react'
import { EventCard, CreateEventCaller } from '../eventCard'
import { CalendarEventType, Course } from '../../../types'
import { CreateEventType } from '../createEventType'
import store from 'store'

type Props = {
  createEvent: CreateEventCaller
}

export const Sidebar = ({ createEvent }: Props) => {
  const [courses, setCourses] = useState<Course[]>(store.get('courses'))

  const eventCards = courses[0].eventTypes.map((event, index) => (
    <EventCard key={index} event={event} createEvent={createEvent} />
  ))
  const createEventType = (newEventType: CalendarEventType) => {
    const currentCourses: Course[] = store.get('courses')
    if (newEventType.name === '') {
      throw Error('Need a title')
    }
    currentCourses[0].eventTypes.forEach((eventType) => {
      if (eventType.name === newEventType.name) {
        throw Error(`Event type with the name ${eventType.name} already exists`)
      }
      if (eventType.color === newEventType.color) {
        throw Error(`This color is already used by ${eventType.name}`)
      }
    })
    currentCourses[0].eventTypes.push(newEventType)
    store.set('courses', currentCourses)
    setCourses(currentCourses)
  }
  return (
    <Stack spacing={2} padding={2}>
      {eventCards}
      <CreateEventType createEventType={createEventType} />
    </Stack>
  )
}

export const SidebarWrapper = ({ children, createEvent }: Props & PropsWithChildren<{}>) => {
  return (
    <ViewGrid>
      <ViewSide>
        <Sidebar createEvent={createEvent} />
      </ViewSide>
      <Box p={3}>{children}</Box>
    </ViewGrid>
  )
}
