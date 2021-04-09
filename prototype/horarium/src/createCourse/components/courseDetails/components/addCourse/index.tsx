import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Box,
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
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          name='name'
          placeholder={'Name of the course'}
          value={formData.name.value}
          isInvalid={formData.name.error}
          {...commonFormElementProps}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Module</FormLabel>
        <Textarea
          name='module'
          placeholder='Select a module'
          value={formData.module.value}
          isInvalid={formData.module.error}
          {...commonFormElementProps}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          name='description'
          placeholder='Description of the course'
          value={formData.description.value}
          isInvalid={formData.description.error}
          {...commonFormElementProps}
        />
      </FormControl>

      {/*<FormControl>
        <FormLabel>Enroled Groups</FormLabel>
        <CheckboxGroup colorScheme='green'>
          <HStack>{group_boxes}</HStack>
        </CheckboxGroup>
      </FormControl>*/}

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
              enroled_groups: [
                { name: 'EECS', consultants: [] },
                { name: 'HJKL', consultants: [] }],
              schedulers: [],// TODO: Add support for different schedulers
              events: [],
              eventTypes: [// TODO: Different types of events in the form
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
      return true
    }
  }
  return true
}

const save_course = ( course: Course ) => {
  const courses: Course[] = store.get('courses')
  courses.push(course)
  store.set('courses', courses)
}
