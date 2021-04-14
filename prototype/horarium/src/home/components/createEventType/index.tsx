import React, { useState } from 'react'
import { Box, Button, Flex, Input, useToast } from '@chakra-ui/react'
import { CalendarEventType } from '../../../types'
import { useColorMode } from '@chakra-ui/react'

type Props = {
  createEventType: (newEventType: CalendarEventType) => void
}

export const CreateEventType = ({ createEventType }: Props) => {
  const toast = useToast()

  const { colorMode } = useColorMode()
  const bgInputs = { light: 'gray.300', dark: 'gray.600' }
  const bgPlaceholder = { light: 'teal', dark: 'gray.700' }

  const [bg, setBg] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  return (
    <Box p={3} rounded={6} fontSize={18} color='white' bg={bg || bgPlaceholder[colorMode]}>
      <Input
        placeholder='Event Name'
        borderWidth={4}
        borderColor={bgInputs[colorMode]}
        value={title}
        fontSize={18}
        onChange={(e) => setTitle(e.target.value)}
        boxShadow='small'
      />
      <Flex justify='space-between' align='center' mt={4}>
        <Input
          bg={bgInputs[colorMode]}
          borderRadius={6}
          type='color'
          value={bg}
          onChange={(e) => setBg(e.target.value)}
          size='sm'
          width={20}
        />
        <Button
          aria-label='create event type'
          colorScheme='teal'
          onClick={() => {
            try {
              createEventType({ name: title, color: bg })
            } catch (e) {
              toast({
                title: 'Invalid Input',
                description: e.message,
                status: 'error',
              })
            }
          }}
        >
          Create
        </Button>
      </Flex>
    </Box>
  )
}
