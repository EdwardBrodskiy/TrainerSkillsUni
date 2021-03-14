import React from 'react'
import { Box } from '@chakra-ui/react'
import { CalendarEvent } from '../../../types'

type Props = {
  event: CalendarEvent
}

export const EventCard = ({ event }: Props) => {
  return (
    <Box p={3} bg={event.color} rounded={6} height={20} fontSize={18}>
      {event.title}
    </Box>
  )
}
