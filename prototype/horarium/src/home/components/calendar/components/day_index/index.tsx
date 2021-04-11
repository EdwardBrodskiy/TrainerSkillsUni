import React, { useLayoutEffect, useRef } from 'react'
import { Center, useColorMode, VStack } from '@chakra-ui/react'

export const DayIndex = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.300', dark: 'gray.600' }

  const myRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (myRef.current !== null) {
      myRef.current.scrollIntoView()
    }
  })

  const table: JSX.Element[] = new Array<JSX.Element>(24).fill(<></>).map((value, index) => {
    return (
      <Center
        key={index}
        w='100%'
        h='16'
        bg={bgColor[colorMode]}
        justifyContent='center'
        fontSize='lg'
        ref={index === 8 ? myRef : undefined}
      >
        {index}:00
      </Center>
    )
  })

  return <VStack spacing={1}>{table}</VStack>
}
