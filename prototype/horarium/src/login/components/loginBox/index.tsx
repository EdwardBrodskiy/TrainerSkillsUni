import React, { useState } from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Checkbox, useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

export const LoginBox = () => {
  const history = useHistory()
  const toast = useToast()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    if (username === 'ADMIN' && password ==='ADMIN') {
      history.push("/home")
    } else {
      toast({
        title: "Invalid Username/Password",
        status: "error",
        isClosable: true,
      })
    }
  };

  return (
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
            <Checkbox>Remember Me</Checkbox>{/*TODO: Add functionality(Possible )*/}
            <Button width="full" mt={4} type="submit">
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}