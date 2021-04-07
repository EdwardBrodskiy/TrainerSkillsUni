import React from 'react'
import { Box, useColorMode, VStack } from '@chakra-ui/react'
import { CalendarEvent } from '../../../../../types'

type Props = {
  events: CalendarEvent[]
}

export const DayIndex = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.300', dark: 'gray.600' }

  const table: JSX.Element[] = new Array<JSX.Element>(9).fill(<></>).map((value, index) => {
    return (
      <Box
        w='100%'
        h='16'
        bg={bgColor[colorMode]}
        justifyContent='center'
        textAlign='center'
        fontSize='lg'
        padding={4}
      >
        {index + 9}:00
      </Box>
    )
  })

  return <VStack spacing={1}>{table}</VStack>
}
