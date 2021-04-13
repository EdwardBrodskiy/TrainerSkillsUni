import React from 'react'
import { Button, HStack, Image, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import store from 'store'

export const UserInfo = () => {
  const history = useHistory()
  return (
    <HStack spacing={4}>
      <Image // TODO: sort out profile pics
        borderRadius='full'
        boxSize='3.5em'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
      />
      <Text>Welcome, {store.get('session').user?.name}</Text>
      <Button
        onClick={() => {
          store.set('session', {})
          history.push('/')
        }}
      >
        Log out
      </Button>
    </HStack>
  )
}
