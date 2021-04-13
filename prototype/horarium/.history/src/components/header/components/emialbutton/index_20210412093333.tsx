import React from 'react'
import { Button, HStack, Image, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import store from 'store'

export const Settings = () => {
  const history = useHistory()

  return (
    <HStack spacing={4}>
      <Button
        onClick={() => {}}
      >
        Login with Outlook
      </Button>
    </HStack>
  )
}
