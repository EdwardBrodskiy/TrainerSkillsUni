import React from 'react'
import { HStack, Wrap } from '@chakra-ui/react'
import { CalendarEvent } from '../../../../../../../types'
import { EventCard } from './components/event'

type Props = {
  events: CalendarEvent[]
}

export const Events = ({ events }: Props) => {
  const course_events = events.map((event, index) => <EventCard event={event} />)
  return (
    <Wrap
      direction='row'
      spacing={4}
      height='10em'
      overflowY='scroll'
      sx={{
        '::-webkit-scrollbar': { display: 'none' },
        msOverFlowStyle: 'none',
        scrollbarWidth: 'none',
        scrollSnapType: 'y manditory',
      }}
    >
      {course_events}
    </Wrap>
  )
}
