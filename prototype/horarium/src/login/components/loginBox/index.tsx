import React, { useState } from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button} from '@chakra-ui/react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { Home } from '../../../home'

export const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    if (username === 'ADMIN' && password ==='ADMIN') {
      //TO DO: learn how Route works lol and redirect to Home
    } else {
      alert('Invalid username or password');
      setUsername('');
      setPassword('');
    }
  };

  return (//TO DO: reformat Code
    <Flex width='full' align='center' justifyContent='center'>
      <Box margin={10} p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input 
                type="text" 
                placeholder="Username"
                size='lg'
                onChange={event => setUsername(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input 
                type="password"
                placeholder="Password"
                size='lg'
                onChange={event => setPassword(event.currentTarget.value)}
              />
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}