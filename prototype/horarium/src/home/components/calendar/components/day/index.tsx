import React from 'react'
import { Box, useColorMode, VStack } from '@chakra-ui/react'
import { CalendarEvent } from '../../../../../types'

type Props = {
  events: CalendarEvent[]
}

export const Day = ({ events }: Props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }

  const table: JSX.Element[] = new Array<JSX.Element>(9).fill(<></>).map((value, index) => {
    const events_this_hour = events
      .filter((event) => {
        const time = new Date(event.start_time)
        return time.getHours() === index + 9
      })
      .map((event, index) => <Box bg={event.type.color}>{event.title}</Box>)
    return (
      <Box w='100%' h='16' bg={bgColor[colorMode]}>
        {events_this_hour}
      </Box>
    )
  })

  return <VStack spacing={1}>{table}</VStack>
}
