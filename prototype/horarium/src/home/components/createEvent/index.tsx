import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { CalendarEvent, CalendarEventType, Course, Role, Trainer, User } from '../../../types'
import { isPermited, AuthCourse } from '../../../auth'
import { SearchSelect } from '../../../components/searchSelect'
import dayjs from 'dayjs'
import store from 'store'

type Props = {
  isOpen: boolean
  onClose: () => void
  prefilledData: Partial<CalendarEvent>
  eventIndex: number
}

type FormData = {
  title: FormElement
  description: FormElement
  location: FormElement
  startTime: FormElement
  endTime: FormElement
  trainer: FormElement
  type: FormElement
}

type FormElement = {
  value: string
  error: boolean
  touched: boolean
}

export const CreateEventModal = ({ onClose, isOpen, prefilledData, eventIndex }: Props) => {
  const toast = useToast()
  const currentCourse = AuthCourse()
  const isEdit: boolean = eventIndex !== -1
  const permitedToEdit = isPermited(Role.Scheduler)
  const initialState: FormData = {
    title: { value: prefilledData.title || '', error: false, touched: isEdit },
    description: { value: prefilledData.description || '', error: false, touched: true },
    location: { value: prefilledData.location || '', error: false, touched: isEdit },
    startTime: {
      value: prefilledData.start_time || '',
      error: false,
      touched: prefilledData.start_time !== undefined,
    },
    endTime: {
      value: prefilledData.end_time || '',
      error: false,
      touched: prefilledData.end_time !== undefined,
    },
    trainer: {
      value: prefilledData.trainer?.name || '',
      error: false,
      touched: prefilledData.end_time !== undefined,
    },
    type: {
      value: prefilledData.type?.name || '',
      error: false,
      touched: prefilledData.type?.name !== undefined,
    },
  }
  const [formData, setFormData] = useState<FormData>(initialState)

  const updateElementState = (name: string, value: string) => {
    if (!permitedToEdit) return
    const error = is_element_invalid(name, value, true, formData)
    setFormData((prevState) => ({ ...prevState, [name]: { touched: true, value, error } }))
    let element: keyof FormData
    const to_update: Partial<FormData> = {}
    for (element in formData) {
      const is_invalid = is_element_invalid(
        element,
        formData[element].value,
        formData[element].touched,
        formData,
      )
      if (is_invalid !== formData[element].error) {
        to_update[element] = { ...formData[element], error: !formData[element].error }
      }
    }
    setFormData((prevState) => ({ ...prevState, ...to_update }))
  }
  const commonFormElementProps = {
    onChange: (e: { target: { name: string; value: string } }) =>
      updateElementState(e.target.name, e.target.value),
    onBlur: (e: { target: { name: string; value: string } }) =>
      updateElementState(e.target.name, e.target.value),
    errorBorderColor: 'crimson',
    isReadOnly: !permitedToEdit,
  }
  const location_options = store.get('locations').map((item: string, index: number) => (
    <option key={index} value={item}>
      {item}
    </option>
  ))
  const current_course: Course = store.get('courses')[currentCourse]
  const eventType_options = current_course.eventTypes.map(
    (type: CalendarEventType, index: number) => (
      <option key={index} value={type.name}>
        {type.name}
      </option>
    ),
  )
  const users: User[] = store.get('users')
  const timeCourseCollision = () => {
    const courses: Course[] = store.get('courses')
    const currentStartTime = dayjs(formData.startTime.value).unix()
    const currentEndTime = dayjs(formData.endTime.value).unix()
    let collidingEvents: CalendarEvent[] = []

    courses.forEach((course) => {
      const common_groups = current_course.enrolled_groups.filter(
        (current_course_group) =>
          course.enrolled_groups.filter((group) => group.name === current_course_group.name)
            .length > 0,
      )
      if (common_groups.length > 0)
        course.events.forEach((event) => {
          const startTime = dayjs(event.start_time).unix()
          const endTime = dayjs(event.end_time).unix()
          if (
            (currentStartTime >= startTime && currentStartTime <= endTime) ||
            (currentEndTime >= startTime && currentEndTime <= endTime)
          ) {
            collidingEvents.push(event)
          }
        })
    })
    return collidingEvents
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={isEdit}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {isEdit ? (permitedToEdit ? 'View/Edit Event' : 'View Event') : 'Create Event'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              name='title'
              placeholder={`${prefilledData.type?.name} name`}
              value={formData.title.value}
              isInvalid={formData.title.error}
              {...commonFormElementProps}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name='description'
              placeholder='Some text here'
              value={formData.description.value}
              isInvalid={formData.description.error}
              {...commonFormElementProps}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Location</FormLabel>
            <Select
              name='location'
              placeholder='Select option'
              value={formData.location.value}
              isInvalid={formData.location.error}
              {...commonFormElementProps}
            >
              {location_options}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Start Time</FormLabel>
            <Input
              name='startTime'
              type='datetime-local'
              max={formData.endTime.value}
              value={formData.startTime.value}
              isInvalid={formData.startTime.error}
              {...commonFormElementProps}
            />
          </FormControl>

          <FormControl>
            <FormLabel>End Time</FormLabel>
            <Input
              name='endTime'
              type='datetime-local'
              min={formData.startTime.value}
              value={formData.endTime.value}
              isInvalid={formData.endTime.error}
              {...commonFormElementProps}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Trainer</FormLabel>
            <SearchSelect
              name='trainer'
              value={formData.trainer.value}
              onChange={updateElementState}
              errorBorderColor='crimson'
              isReadOnly={!permitedToEdit}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Event Type</FormLabel>
            <Select
              name='type'
              value={formData.type.value}
              isInvalid={formData.type.error}
              {...commonFormElementProps}
            >
              {eventType_options}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          {permitedToEdit && (
            <Flex justify='space-between' width='100%'>
              <Box>
                {isEdit && (
                  <Button
                    colorScheme='red'
                    onClick={() => {
                      if (isEdit) {
                        delete_event(currentCourse, eventIndex)
                        onClose()
                      }
                    }}
                  >
                    Delete
                  </Button>
                )}
              </Box>

              <HStack>
                <Button
                  colorScheme='blue'
                  onClick={() => {
                    if (!is_valid(formData)) {
                      toast({
                        title: `Make sure you filled in all the fields`,
                        status: 'error',
                        isClosable: true,
                      })
                      return
                    }
                    let cached_event: CalendarEvent | undefined
                    if (isEdit) {
                      cached_event = delete_event(currentCourse, eventIndex)
                    }
                    const collidingEvents = timeCourseCollision()
                    if (collidingEvents.length > 0) {
                      const event_titles = collidingEvents.map((event) => event.title)
                      toast({
                        title: `Conflicts Detected`,
                        description: `with events: ${event_titles.toString()}`,
                        status: 'error',
                        isClosable: true,
                      })
                      if (cached_event !== undefined) {
                        save_event(currentCourse, cached_event)
                      }

                      return
                    }

                    const eventType = current_course.eventTypes.find(
                      (type) => type.name === formData.type.value,
                    )
                    const trainer = users.find(
                      (user: User): user is Trainer => user.name === formData.trainer.value,
                    )
                    if (trainer !== undefined && eventType !== undefined) {
                      save_event(currentCourse, {
                        title: formData.title.value,
                        description: formData.description.value,
                        type: eventType,
                        location: formData.location.value,
                        start_time: formData.startTime.value,
                        end_time: formData.endTime.value,
                        trainer,
                      })
                    }
                    onClose()
                  }}
                >
                  {isEdit ? 'Update' : 'Create'}
                </Button>
                <Button variant='ghost' onClick={onClose}>
                  Cancel
                </Button>
              </HStack>
            </Flex>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const is_element_invalid = (name: string, value: string, touched: boolean, values: FormData) => {
  if (touched) {
    if (name !== 'description' && value === '') {
      return true
    }
    if (
      name === 'startTime' &&
      values.endTime.value !== '' &&
      new Date(value) >= new Date(values.endTime.value)
    ) {
      return true
    }
    if (
      name === 'endTime' &&
      values.startTime.value !== '' &&
      new Date(value) <= new Date(values.startTime.value)
    ) {
      return true
    }
  }
  return false
}
const is_valid = (values: FormData) => {
  //TODO: switch to use of .every
  let element: keyof FormData
  for (element in values) {
    if (values[element].error || !values[element].touched) {
      return false
    }
  }
  return true
}

const save_event = (course_index: number, event: CalendarEvent) => {
  const courses: Course[] = store.get('courses')
  courses[course_index].events.push(event)
  store.set('courses', courses)
}

const delete_event = (course_index: number, event_index: number) => {
  const courses: Course[] = store.get('courses')
  const event = courses[course_index].events[event_index]
  courses[course_index].events.splice(event_index, 1)
  store.set('courses', courses)
  return event
}
