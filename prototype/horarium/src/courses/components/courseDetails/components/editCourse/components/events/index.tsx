import React from 'react'
import { Flex, HStack, Text } from '@chakra-ui/react'
import { CalendarEvent } from '../../../../../../../types'
import dayjs from 'dayjs'

type Props = {
  events: CalendarEvent[]
}

export const Events = ({ events }: Props) => {
  const course_events = events.map((event, index) => {
    const start_time = new Date(event.start_time)
    const end_time = new Date(event.end_time)
    const duration = end_time.getTime() - start_time.getTime() - (1000*3600)
    return (
      <Flex
        key={index}
        size='lg'
        p={2}
        rounded={8}
        bg={event.type.color || 'gray'}
        direction='column'
        marginX={1}
        position='relative'
        borderLeft='4px'
        borderColor='rgba(0,0,0,0.4)'
      >
        <Text>Event: {event.title}</Text>
        <Text>Location: {event.location}</Text>
        <Text>Duration: {dayjs(duration).format('HH:mm')}h </Text>
      </Flex>
    )
  })
  return (
    <HStack direction='row' spacing={4}>
      {course_events}
    </HStack>
  )
}
