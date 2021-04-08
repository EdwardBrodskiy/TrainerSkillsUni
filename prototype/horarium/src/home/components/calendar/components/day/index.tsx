import React from 'react'
import { Box, useColorMode, VStack } from '@chakra-ui/react'
import { CalendarEvent } from '../../../../../types'
import { EventCard } from '../eventCard'

type Props = {
  events: CalendarEvent[]
  scale: number
}

export const Day = ({ events, scale }: Props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }

  const table: JSX.Element[] = new Array<JSX.Element>(9).fill(<></>).map((value, index) => {
    const events_this_hour = events
      .filter((event) => {
        const time = new Date(event.start_time)
        return time.getHours() === index + 9
      })
      .map((event, index) => <EventCard event={event} scale={scale} />)
    return (
      <Box w='100%' h={`${scale}px`} bg={bgColor[colorMode]}>
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
