import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import { CalendarEvent } from '../../../../../../../types'
import dayjs from 'dayjs'

type Props = {
  events: CalendarEvent[]
}

export const Duration = ({ events }: Props) => {
  if(events[0] !== undefined) {
    const startTime = dayjs(events[0].start_time).unix()
    const endTime = dayjs(events[events.length-1].end_time).unix()
    const duration = Math.floor((endTime - startTime) / 3600)
    return (
      <Text>{duration} h</Text>
    )
  } else {
    return (
      <Text>Course currently does not have any events</Text>
    )
  }
}
