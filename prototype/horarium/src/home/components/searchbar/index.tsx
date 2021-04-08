import React from 'react'
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export const Searchbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton
        aria-label='change color mode'
        onClick={onOpen}
        icon={<Search2Icon />}
        isRound={true}
      />
      <Drawer isOpen={isOpen} placement='left' size='xs' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody></DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
