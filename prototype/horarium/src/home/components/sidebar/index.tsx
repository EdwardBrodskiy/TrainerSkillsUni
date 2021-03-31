import React, { PropsWithChildren } from 'react'
import { ViewGrid, ViewSide } from '../layout'
import { Box, Stack } from '@chakra-ui/react'
import { EventCard, CreateEventCaller } from '../eventCard'
import { CalendarEventType } from '../../../types'

type Props = {
  events: CalendarEventType[]
  createEvent: CreateEventCaller
}

export const Sidebar = ({ events, createEvent }: Props) => {
  const eventCards = events.map((event, index) => (
    <EventCard key={index} event={event} createEvent={createEvent} />
  ))
  return (
    <Stack spacing={2} padding={2}>
      {eventCards}
    </Stack>
  )
}

export const SidebarWrapper = ({
  children,
  events,
  createEvent,
}: Props & PropsWithChildren<{}>) => {
  return (
    <ViewGrid>
      <ViewSide>
        <Sidebar events={events} createEvent={createEvent} />
      </ViewSide>
      <Box p={3}>{children}</Box>
    </ViewGrid>
  )
}
