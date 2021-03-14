import React, { PropsWithChildren } from 'react'
import { ViewGrid, ViewSide } from '../layout'
import { Box, Stack } from '@chakra-ui/react'
import { EventCard } from '../eventCard'
import { CalendarEvent } from '../../../types'

type Props = {
  events: CalendarEvent[]
}

export const Sidebar = ({ events }: Props) => {
  const eventCards = events.map((event, index) => <EventCard key={index} event={event} />)
  return (
    <Stack spacing={2} padding={2}>
      {eventCards}
    </Stack>
  )
}

export const SidebarWrapper = ({ children, events }: Props & PropsWithChildren<{}>) => {
  return (
    <ViewGrid>
      <ViewSide>
        <Sidebar events={events} />
      </ViewSide>
      <Box p={3}>{children}</Box>
    </ViewGrid>
  )
}
