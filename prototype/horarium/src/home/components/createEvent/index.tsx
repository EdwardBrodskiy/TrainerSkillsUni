import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
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
import { CalendarEvent, CalendarEventType, Course, PrefillEventData } from '../../../types'
import store from 'store'

type Props = {
  isOpen: boolean
  onClose: () => void
  prefilledData: PrefillEventData
}

type InputElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

type FormData = {
  title: FormElement
  description: FormElement
  location: FormElement
  startTime: FormElement
  endTime: FormElement
  type: FormElement
}

type FormElement = {
  value: string
  error: boolean
  touched: boolean
}

export const CreateEventModal = ({ onClose, isOpen, prefilledData }: Props) => {
  const toast = useToast()
  const initialState: FormData = {
    title: { value: '', error: false, touched: false },
    description: { value: '', error: false, touched: true },
    location: { value: '', error: false, touched: false },
    startTime: { value: '', error: false, touched: false },
    endTime: { value: '', error: false, touched: false },
    type: {
      value: prefilledData.type?.name || '',
      error: false,
      touched: prefilledData.type?.name !== undefined,
    },
  }
  const [formData, setFormData] = useState<FormData>(initialState)

  const updateElementState: React.ChangeEventHandler<InputElements> = (event) => {
    const { name, value } = event.target
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
    onChange: updateElementState,
    onBlur: updateElementState,
    errorBorderColor: 'crimson',
  }
  const location_options = store.get('locations').map((item: string, index: number) => (
    <option key={index} value={item}>
      {item}
    </option>
  ))
  const current_course: Course = store.get('courses')[0] //TODO: add course selection and creation
  const eventType_options = current_course.eventTypes.map(
    (type: CalendarEventType, index: number) => (
      <option key={index} value={type.name}>
        {type.name}
      </option>
    ),
  )
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Event</ModalHeader>
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
          <Button
            colorScheme='blue'
            mr={3}
            onClick={() => {
              if (is_valid(formData)) {
                const eventType = current_course.eventTypes.find(
                  (type) => type.name === formData.type.value,
                )
                if (eventType !== undefined) {
                  save_event(0, {
                    title: formData.title.value,
                    description: formData.description.value,
                    type: eventType,
                    location: formData.location.value,
                    start_time: formData.startTime.value,
                    end_time: formData.endTime.value,
                  })
                }
                onClose()
              } else {
                toast({
                  title: `Make sure you filled in all the fields`,
                  status: 'error',
                  isClosable: true,
                })
              }
            }}
          >
            Create
          </Button>
          <Button variant='ghost' onClick={onClose}>
            Cancel
          </Button>
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