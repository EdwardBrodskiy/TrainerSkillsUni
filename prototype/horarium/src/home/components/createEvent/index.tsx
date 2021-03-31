import React from 'react'
import {
  Box,
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
import { CalendarEventType, Course, PrefillEventData } from '../../../types'
import store from 'store'

type Props = {
  isOpen: boolean
  onClose: () => void
  prefilledData: PrefillEventData
}

export const CreateEventModal = ({ onClose, isOpen, prefilledData }: Props) => {
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
            <Input placeholder={`${prefilledData.type?.name} name`} />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder='Some text here' />
          </FormControl>

          <FormControl>
            <FormLabel>Location</FormLabel>
            <Select placeholder='Select option'>{location_options}</Select>
          </FormControl>

          <FormControl>
            <FormLabel>Start Time</FormLabel>
            <Input type='datetime-local' />
          </FormControl>

          <FormControl>
            <FormLabel>Duration</FormLabel>
            <Input type='time' />
          </FormControl>

          <FormControl>
            <FormLabel>Event Type</FormLabel>
            <Select defaultValue={prefilledData.type?.name}>{eventType_options}</Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
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
