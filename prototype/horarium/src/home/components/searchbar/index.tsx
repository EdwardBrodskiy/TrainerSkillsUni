import React from 'react'
import {
    Button,
    Input,
    Drawer,
    ColorMode,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from "@chakra-ui/react"
import { IconButton, useColorMode } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export const Searchbar = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
    <IconButton
      aria-label='change color mode'
      onClick={onOpen}
      icon={<Search2Icon/>}
      isRound={true}
    />
    <Drawer
        isOpen={isOpen}
        placement="left"
        size="xs"
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}