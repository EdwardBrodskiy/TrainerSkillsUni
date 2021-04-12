import { Box, BoxProps, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { CalendarEvent } from '../../../../../types'
import dayjs from 'dayjs'

type Props = {
  event: CalendarEvent
  scale: number
}
export const EventCard = ({ event, scale, ...rest }: Props & BoxProps) => {
  const start_time = new Date(event.start_time)
  const end_time = new Date(event.end_time)
  const minute_shift = Math.round((start_time.getMinutes() / 60) * scale)
  const duration = (end_time.getTime() - start_time.getTime()) / (1000 * 3600)
  const gap_jumps = Math.floor(duration - 4 / scale)
  return (
    <Box
      {...rest}
      marginTop={`${minute_shift}px`}
      height={`${Math.round(duration * scale) + gap_jumps * 4}px`}
      p={2}
      bg={event.type.color}
      rounded={6}
      fontSize={18}
      marginX={1}
      position='relative'
      borderLeft='4px'
      borderColor='rgba(0,0,0,0.4)'
    >
      <Text fontSize='md' textAlign='right'>
        {`${dayjs(start_time).format('HH:mm')} - ${dayjs(end_time).format('HH:mm')}`}
      </Text>
      <Heading isTruncated fontSize='lg'>
        {event.title}
      </Heading>
      {gap_jumps > 0 && <Text noOfLines={gap_jumps * 2}>{event.description}</Text>}
    </Box>
  )
}
