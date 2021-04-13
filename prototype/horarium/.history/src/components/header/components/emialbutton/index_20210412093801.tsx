import React from 'react'
import { Button, HStack, Image, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import store from 'store'


const SenddEmail = () =>{
window.alert("Test") 
}

export const EmailButton = () => {
  const history = useHistory()

  return (
    <HStack spacing={4}>
      <Button
        onClick={() => SenddEmail()}
      >
        Login with Outlook
      </Button>
    </HStack>
  )
}
