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
} from '@chakra-ui/react'
import { CalendarEvent, CalendarEventType, Course, PrefillEventData } from '../../../types'
import store from 'store'

type Props = {
  isOpen: boolean
  onClose: () => void
  prefilledData: PrefillEventData
}

export const CreateEventModal = ({ onClose, isOpen, prefilledData }: Props) => {
  const initialState = {
    title: '',
    description: '',
    location: '',
    startTime: '',
    duration: '',
    type: prefilledData.type?.name,
  }
  const [{ title, description, location, startTime, duration, type }, setFormData] = useState(
    initialState,
  )
  const clearState = () => {
    setFormData({ ...initialState })
  }
  const onChange: React.ChangeEventHandler<any> = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
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
              value={title}
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name='description'
              placeholder='Some text here'
              value={description}
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Location</FormLabel>
            <Select
              name='location'
              placeholder='Select option'
              value={location}
              onChange={onChange}
            >
              {location_options}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Start Time</FormLabel>
            <Input name='startTime' type='datetime-local' value={startTime} onChange={onChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Duration</FormLabel>
            <Input name='duration' type='time' value={duration} onChange={onChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Event Type</FormLabel>
            <Select
              name='type'
              defaultValue={prefilledData.type?.name}
              placeholder='Select option'
              value={type}
              onChange={onChange}
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
              console.log(`${title} ${description} ${location} ${startTime} ${duration} ${type}`)
              clearState()
              onClose()
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

const save_event = (course_index: number, event: CalendarEvent) => {
  const courses = store.get('course')
  courses[course_index].push(event)
  store.set('courses', courses)
}
