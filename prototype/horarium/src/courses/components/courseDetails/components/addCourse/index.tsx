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
import { Course, Group } from '../../../../../types'
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
  const [EECS, setEECS] = useState<Boolean>(false)
  const [ASDF, setASDF] = useState<Boolean>(false)
  const [HJKL, setHJKL] = useState<Boolean>(false)


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

  const handleGroups = () => {
    const groups: Group[] = []
    if (EECS) groups.push({ name: 'EECS', consultants: [] })
    if (ASDF) groups.push({ name: 'ASDF', consultants: [] }) 
    if (HJKL) groups.push({ name: 'HJKL', consultants: [] })
    return groups
  }
  let hasGroup = EECS || ASDF || HJKL
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

      <FormLabel>Enrolled Groups:</FormLabel>
      <FormControl display='flex' alignItems='center'>
        <FormLabel mb='5' mr='1'>
          EECS:
        </FormLabel>
        <Switch
          name='EECS'
          onChange={() => setEECS((EECS) => !EECS)}
          colorScheme='purple'
          mr='2'
          mb='4'
        />
        <FormLabel mb='5' mr='1'>
          ASDF:
        </FormLabel>
        <Switch
          name='ASDF'
          onChange={() => setASDF((ASDF) => !ASDF)}
          colorScheme='green'
          mr='2'
          mb='4'
        />
        <FormLabel mb='5' mr='1'>
          HJKL:
        </FormLabel>
        <Switch
          name='HJKL'
          onChange={() => setHJKL((HJKL) => !HJKL)}
          colorScheme='blue'
          mr='2'
          mb='4'
        />
      </FormControl>

      <Center>
        <Button
          colorScheme='blue'
          mr={3}
          onClick={() => {
            if (is_valid(formData) && hasGroup) {
              save_course(
                {
                  name: formData.name.value,
                  module: formData.module.value,
                  description: formData.description.value,
                  courseId: store.get('courses').length,
                  enrolled_groups: handleGroups(),
                  schedulers: [store.get('session').user],
                  events: [],
                  eventTypes: [
                    { name: 'Lecture', color: 'tomato' },
                    { name: 'Lab', color: 'orange' },
                    { name: 'Exam', color: 'purple' },
                  ],
                },
                toast,
              )
            } else {
              toast({
                title: `Make sure you filled in all the fields and selected at least one group.`,
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

const save_course = (course: Course, toast: any) => {
  toast({
    title: 'Course Succesfully Created',
    status: 'success',
    position: 'bottom-left',
  })
  const courses: Course[] = store.get('courses')
  courses.push(course)
  store.set('courses', courses)
  window.location.reload() //Refresh if succesful
}
