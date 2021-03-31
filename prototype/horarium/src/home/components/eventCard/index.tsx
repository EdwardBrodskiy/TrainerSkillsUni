import React from 'react'
import { Box } from '@chakra-ui/react'
import { CalendarEventType, PrefillEventData } from '../../../types'

export type CreateEventCaller = (data: PrefillEventData) => void

type Props = {
  event: CalendarEventType
  createEvent: CreateEventCaller
}

export const EventCard = ({ event, createEvent }: Props) => {
  return (
    <Box
      p={3}
      bg={event.color}
      rounded={6}
      height={20}
      fontSize={18}
      onClick={() => createEvent({ type: event })}
    >
      {event.name}
    </Box>
  )
}
