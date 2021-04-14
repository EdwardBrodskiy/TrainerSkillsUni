import React from 'react'
import { Flex, Heading, IconButton, useToast } from '@chakra-ui/react'
import { CalendarEvent, CalendarEventType, Role } from '../../../types'
import { CloseIcon } from '@chakra-ui/icons'
import { isPermited } from '../../../auth'

export type CreateEventCaller = (data: Partial<CalendarEvent>, eventIndex?: number) => void

type Props = {
  event: CalendarEventType
  createEvent: CreateEventCaller
  isRemovable: boolean
  removeEventType: () => void
}

export const EventCard = ({ event, createEvent, isRemovable, removeEventType }: Props) => {
  const toast = useToast()
  const hasSchedulerPermissions = isPermited(Role.Scheduler)
  return (
    <Flex
      p={3}
      bg={event.color}
      rounded={6}
      height={20}
      fontSize={18}
      color='white'
      onClick={hasSchedulerPermissions ? () => createEvent({ type: event }) : undefined}
      justify='space-between'
    >
      <Heading size='md' isTruncated>
        {event.name}
      </Heading>
      {hasSchedulerPermissions && (
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
      )}
    </Flex>
  )
}
