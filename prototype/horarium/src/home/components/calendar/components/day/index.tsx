import React from 'react'
import { Box, useColorMode, VStack } from '@chakra-ui/react'
import { CalendarEvent } from '../../../../../types'
import { EventCard } from '../eventCard'
import { CreateEventCaller } from '../../../eventCard'

type Props = {
  events: CalendarEvent[]
  eventIndexRefs: number[]
  createEvent: CreateEventCaller
  scale: number
}

export const Day = ({ events, eventIndexRefs, scale, createEvent }: Props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }

  const table: JSX.Element[] = new Array<JSX.Element>(24).fill(<></>).map((value, hour) => {
    const events_this_hour_index_ref: number[] = []
    const events_this_hour = events
      .filter((event, index) => {
        const time = new Date(event.start_time)
        if (time.getHours() === hour) {
          events_this_hour_index_ref.push(index)
          return true
        }
        return false
      })
      .map((event, index) => (
        <EventCard
          key={index}
          event={event}
          scale={scale}
          onClick={() => createEvent(event, eventIndexRefs[events_this_hour_index_ref[index]])}
        />
      ))
    return (
      <Box key={hour} w='100%' h={`${scale}px`} bg={bgColor[colorMode]}>
        {events_this_hour}
      </Box>
    )
  })

  return (
    <VStack spacing={1} maxWidth='100%' overflow='hidden'>
      {table}
    </VStack>
  )
}
