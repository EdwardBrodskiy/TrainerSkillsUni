import React, { PropsWithChildren, useState } from 'react'
import { ViewGrid, ViewSide } from '../layout'
import { Box, Stack } from '@chakra-ui/react'
import { EventCard, CreateEventCaller } from '../eventCard'
import { CalendarEvent, CalendarEventType, Course } from '../../../types'
import { CreateEventType } from '../createEventType'
import store from 'store'

type Props = {
  createEvent: CreateEventCaller
}

export const Sidebar = ({ createEvent }: Props) => {
  const [courses, setCourses] = useState<Course[]>(store.get('courses'))
  const removeEventType = (index: number) => {
    const currentCourses: Course[] = store.get('courses')
    currentCourses[0].eventTypes.splice(index, 1)
    store.set('courses', currentCourses)
    setCourses(currentCourses)
  }
  const eventCards = courses[0].eventTypes.map((eventType, index) => {
    return (
      <EventCard
        key={index}
        event={eventType}
        createEvent={createEvent}
        removeEventType={() => removeEventType(index)}
        isRemovable={!hasEvents(eventType, courses[0].events)}
      />
    )
  })
  const createEventType = (newEventType: CalendarEventType) => {
    const currentCourses: Course[] = store.get('courses')
    if (newEventType.name === '') {
      throw Error('Need a title')
    }
    if (newEventType.color === '') {
      throw Error('Select a background')
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
      <ViewSide
        height='57em'
        overflowY='scroll'
        sx={{
          '::-webkit-scrollbar': { display: 'none' },
          msOverFlowStyle: 'none',
          scrollbarWidth: 'none',
          scrollSnapType: 'y manditory',
        }}
      >
        <Sidebar createEvent={createEvent} />
      </ViewSide>
      <Box p={3}>{children}</Box>
    </ViewGrid>
  )
}

const hasEvents = (eventType: CalendarEventType, events: CalendarEvent[]) => {
  const temp = events.filter((event) => {
    return event.type.name === eventType.name
  })
  return temp.length !== 0
}
