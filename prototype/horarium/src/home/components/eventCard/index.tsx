import React from 'react'
import { Flex, IconButton } from '@chakra-ui/react'
import { CalendarEventType, PrefillEventData } from '../../../types'
import { CloseIcon } from '@chakra-ui/icons'

export type CreateEventCaller = (data: PrefillEventData) => void

type Props = {
  event: CalendarEventType
  createEvent: CreateEventCaller
  isRemovable: boolean
  removeEventType: () => void
}

export const EventCard = ({ event, createEvent, isRemovable, removeEventType }: Props) => {
  return (
    <Flex
      p={3}
      bg={event.color}
      rounded={6}
      height={20}
      fontSize={18}
      onClick={() => createEvent({ type: event })}
      justify='space-between'
    >
      {event.name}
      <IconButton
        aria-label='Remove Event Type'
        background='red.400'
        size='sm'
        isDisabled={!isRemovable}
        onClick={(e) => {
          removeEventType()
          e.stopPropagation()
        }}
        icon={<CloseIcon />}
      >
        Remove
      </IconButton>
    </Flex>
  )
}
