import React, { useState } from 'react'
import {
  Box,
  Flex,
  Grid,
  Heading,
  useColorMode,
  Text,
  Input,
  HStack,
  Center,
  Button,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react'
import { Day } from './components/day'
import store from 'store'
import { Course } from '../../../types'
import { DayIndex } from './components/day_index'
import { CreateEventCaller } from '../eventCard'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { ArrowBackIcon, InfoIcon } from '@chakra-ui/icons'

dayjs.extend(advancedFormat)
dayjs.extend(weekOfYear)

const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

type Props = {
  createEvent: CreateEventCaller
}

export const Calendar = ({ createEvent }: Props) => {
  const { colorMode } = useColorMode()
  const altBgColor = { light: 'gray.300', dark: 'gray.600' }
  const scale = 64

  const current_course: Course = store.get('courses')[0]

  const earliest_event_time = Math.min(
    ...current_course.events.map((event) => new Date(event.start_time).getTime()),
  )
  const [selectedWeek, setSelectedWeek] = useState<string>(
    dayjs(earliest_event_time).format('YYYY-[W]w'),
  )

  const [eventsInOtherWeeks, setEventsInOtherWeeks] = useState<number>(0)

  const currentEventsInOtherWeeks = current_course.events.filter((event) => {
    const time = dayjs(event.start_time)
    return time.format('YYYY-[W]w') !== selectedWeek
  }).length
  if (eventsInOtherWeeks !== currentEventsInOtherWeeks) {
    setEventsInOtherWeeks(currentEventsInOtherWeeks)
  }

  const days = week_days.map((day, index) => (
    <Box
      key={index}
      w='100%'
      h='14'
      bg={altBgColor[colorMode]}
      padding='3'
      fontSize='20'
      isTruncated
    >
      {day}
    </Box>
  ))
  const day_events = week_days.map((day, day_index) => {
    const eventIndexRefs: number[] = []
    const events = current_course.events.filter((event, index) => {
      const time = dayjs(event.start_time)
      if (time.format('YYYY-[W]w') === selectedWeek && (time.day() + 6) % 7 === day_index) {
        eventIndexRefs.push(index)
        return true
      }
      return false
    })

    return (
      <Day
        key={day}
        events={events}
        eventIndexRefs={eventIndexRefs}
        scale={scale}
        createEvent={createEvent}
      />
    )
  })

  return (
    <Box>
      <Flex mb={4} align='center' justify='space-between'>
        <HStack spacing={10} isTruncated>
          <Button
            aria-label='back to course'
            size='lg'
            bg={altBgColor[colorMode]}
            leftIcon={<ArrowBackIcon />}
          >
            Back to Course
          </Button>
          <Heading size='2xl'>{current_course.name}</Heading>
          <Text isTruncated fontSize='lg'>
            {current_course.description}
          </Text>
        </HStack>
        <HStack>
          <Heading size='sm'>Select week:</Heading>
          <Input
            type='week'
            bg={altBgColor[colorMode]}
            value={selectedWeek}
            onChange={(event) => {
              console.log(event.target.value)
              setSelectedWeek(event.target.value)
            }}
          />
          {eventsInOtherWeeks > 0 && (
            <Tag colorScheme='blue' size='lg'>
              <TagLeftIcon boxSize='12px' as={InfoIcon} />
              <TagLabel isTruncated={false}>
                {eventsInOtherWeeks} Event{eventsInOtherWeeks > 1 && 's'} in other weeks
              </TagLabel>
            </Tag>
          )}
        </HStack>
      </Flex>
      <Grid key='labels' templateColumns='7% repeat(7, 13%)' gap={1} mb={1}>
        <Center textAlign='center' bg={colorMode === 'light' ? 'gray.400' : 'gray.500'} as='i'>
          Scroll to see other times
        </Center>
        {days}
      </Grid>
      <Box
        height={`${(scale + 4) * 11}px`}
        overflowY='scroll'
        sx={{
          '::-webkit-scrollbar': { display: 'none' },
          msOverFlowStyle: 'none',
          scrollbarWidth: 'none',
          scrollSnapType: 'y manditory',
        }}
      >
        <Grid key='grid' templateColumns='7% repeat(7, 13%)' gap={1}>
          <DayIndex />
          {day_events}
        </Grid>
      </Box>
    </Box>
  )
}
