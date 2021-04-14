import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Box,
  Heading,
  Switch,
  Center,
} from '@chakra-ui/react'
import { Course } from '../../../../../types'
import store from 'store'

type InputElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

type FormData = {
  name: FormElement
  module: FormElement
  description: FormElement
}

type FormElement = {
  value: string
  error: boolean
  touched: boolean
}

export const AddCourse = () => {
  const toast = useToast()

  const initialState: FormData = {
    name: { value: '', error: false, touched: false },
    module: { value: '', error: false, touched: true },
    description: { value: '', error: false, touched: false },
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

  return (
    <Box>
      <Heading mb='5'>Create Course:</Heading>
      <FormControl>
        <FormLabel>Name:</FormLabel>
        <Input
          name='name'
          placeholder={'Name of the course'}
          value={formData.name.value}
          isInvalid={formData.name.error}
          {...commonFormElementProps}
          mb='5'
        />
      </FormControl>

      <FormControl>
        <FormLabel>Module:</FormLabel>
        <Input
          name='module'
          placeholder='Name of the module'
          value={formData.module.value}
          isInvalid={formData.module.error}
          {...commonFormElementProps}
          mb='5'
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description:</FormLabel>
        <Textarea
          name='description'
          placeholder='Description of the course'
          value={formData.description.value}
          isInvalid={formData.description.error}
          {...commonFormElementProps}
          mb='5'
        />
      </FormControl>

      <FormLabel>Enrolled Groups:</FormLabel>{/* TODO: Make the switches changeable(not readOnly) and functional to the form*/}
      <FormControl display='flex' alignItems='center'>
        <FormLabel mb='5' mr='1'>
          EECS:
        </FormLabel>
        <Switch name='EECS' defaultChecked={true} isReadOnly={true}  value={1} colorScheme='purple' mr='2' mb='4' />
        <FormLabel mb='5' mr='1'>
          ASDF:
        </FormLabel>
        <Switch name='ASDF' defaultChecked={true} isReadOnly={true} value={1} colorScheme='green' mr='2' mb='4' />
        <FormLabel mb='5' mr='1'>
          HJKL:
        </FormLabel>
        <Switch name='HJKL' defaultChecked={true} isReadOnly={true} value={1} colorScheme='blue' mr='2' mb='4' />
      </FormControl>

      <Center>
        <Button
          colorScheme='blue'
          mr={3}
          onClick={() => {
            if (is_valid(formData)) {
              save_course({
                name: formData.name.value,
                module: formData.module.value,
                description: formData.description.value,
                courseId: store.get('courses').length,
                enrolled_groups: [
                  //Temporary default groups
                  { name: 'EECS', consultants: [] },
                  { name: 'ASDF', consultants: [] },
                  { name: 'HJKL', consultants: [] },
                ],
                schedulers: [], // TODO: Add support for different schedulers
                events: [],
                eventTypes: [
                  // TODO: Different types of events in the form
                  { name: 'Lecture', color: 'tomato' },
                  { name: 'Lab', color: 'orange' },
                  { name: 'Exam', color: 'purple' },
                ],
              })
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
      </Center>
    </Box>
  )
}

const is_element_invalid = (name: string, value: string, touched: boolean, values: FormData) => {
  if (touched) {
    if (name !== 'description' && value === '') {
      return true
    }
  }
  return false
}
const is_valid = (values: FormData) => {
  let element: keyof FormData
  for (element in values) {
    if (values[element].error || !values[element].touched) {
      return false
    }
  }
  return true
}

const save_course = (course: Course) => {
  const courses: Course[] = store.get('courses')
  courses.push(course)
  store.set('courses', courses)
  window.location.reload() //Refresh if succesful
}
