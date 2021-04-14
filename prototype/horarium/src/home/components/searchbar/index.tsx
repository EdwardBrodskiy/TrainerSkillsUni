import React from 'react'
import {
  Button,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Drawer,
  Text,
  Divider,
  ColorMode,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import store from 'store'
import { useState } from 'react'

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location_results = store.get('locations').filter((item: string, index: number) => {
    if (searchTerm === '') return ''
    else if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item
    }
  })
  function display(result_type: string, result: []) {
    if (result.length > 0) {
      return (
        <Box>
          <Text>{result_type}</Text>
          <Divider />
          {result.map((item: string, index: number) => (
            <li key={index} value={item}>
              {item}
            </li>
          ))}
        </Box>
      )
    }
  }
  console.log(location_results)
  return (
    <>
      <IconButton
        aria-label='change color mode'
        onClick={onOpen}
        icon={<Search2Icon />}
        isRound={true}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<Search2Icon color='gray.300' />}
                />
                <Input
                  type='text'
                  placeholder='Search..'
                  onChange={(event) => {
                    setSearchTerm(event.target.value)
                  }}
                />
              </InputGroup>
            </DrawerHeader>
            <DrawerBody>{display('Locations', location_results)}</DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
