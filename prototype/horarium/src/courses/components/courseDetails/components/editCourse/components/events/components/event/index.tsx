import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import dayjs from 'dayjs'
import { CalendarEvent } from '../../../../../../../../../types'
import { TrainerListItem } from '../../../../../../../../../components/searchSelect/components/trainerListItem'

type Props = {
  event: CalendarEvent
}
export const EventCard = ({ event }: Props) => {
  const start_time = new Date(event.start_time)
  const end_time = new Date(event.end_time)
  return (
    <Box
      p={2}
      bg={event.type.color}
      rounded={6}
      fontSize={18}
      color='white'
      marginX={1}
      position='relative'
      borderLeft='4px'
      borderColor='rgba(0,0,0,0.4)'
      overflow='hidden'
    >
      <Text fontSize='md' textAlign='right'>
        {`${dayjs(start_time).format('HH:mm DD/MM/YY')} - ${dayjs(end_time).format(
          'HH:mm DD/MM/YY',
        )}`}
      </Text>
      <Heading isTruncated fontSize='2xl' mt={2}>
        {event.title}
      </Heading>
      <Text>{event.description}</Text>
      <TrainerListItem trainer={event.trainer} />
      <Text textAlign='right'>Location: {event.location}</Text>
    </Box>
  )
}
