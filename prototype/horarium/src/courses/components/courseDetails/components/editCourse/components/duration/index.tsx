import React from 'react'
import { Text, Box, Alert, AlertIcon } from '@chakra-ui/react'
import { CalendarEvent } from '../../../../../../../types'
import dayjs from 'dayjs'

type Props = {
  events: CalendarEvent[]
}

export const Duration = ({ events }: Props) => {
  if (events.length > 0) {
    const minStartTime = Math.min(...events.map((event) => dayjs(event.start_time).unix()))
    const endTime = Math.max(...events.map((event) => dayjs(event.end_time).unix()))
    const duration = Math.floor((endTime - minStartTime) / 3600)
    return <Text>{duration} h</Text>
  } else {
    return (
      <Alert status='warning'>
        <AlertIcon />
        Course currently does not have any events
      </Alert>
    )
  }
}
