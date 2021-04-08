import React from 'react'
import { Center, useColorMode, VStack } from '@chakra-ui/react'

export const DayIndex = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.300', dark: 'gray.600' }

  const table: JSX.Element[] = new Array<JSX.Element>(24).fill(<></>).map((value, index) => {
    return (
      <Center w='100%' h='16' bg={bgColor[colorMode]} justifyContent='center' fontSize='lg'>
        {index}:00
      </Center>
    )
  })

  return <VStack spacing={1}>{table}</VStack>
}
