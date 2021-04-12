import React from 'react'
import { Flex, Heading, IconButton, useToast } from '@chakra-ui/react'
import { CalendarEvent, CalendarEventType } from '../../../types'
import { CloseIcon } from '@chakra-ui/icons'

export type CreateEventCaller = (data: Partial<CalendarEvent>, eventIndex?: number) => void

type Props = {
  event: CalendarEventType
  createEvent: CreateEventCaller
  isRemovable: boolean
  removeEventType: () => void
}

export const EventCard = ({ event, createEvent, isRemovable, removeEventType }: Props) => {
  const toast = useToast()
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
      <Heading size='md' isTruncated>
        {event.name}
      </Heading>
      <IconButton
        aria-label='Remove Event Type'
        background='red.400'
        size='sm'
        isDisabled={!isRemovable}
        onClick={(e) => {
          try {
            removeEventType()
          } catch (e) {
            toast({
              title: 'Invalid Input',
              description: e.message,
              status: 'error',
              position: 'bottom-left',
            })
          }

          e.stopPropagation()
        }}
        icon={<CloseIcon />}
      >
        Remove
      </IconButton>
    </Flex>
  )
}
