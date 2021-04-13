import React, { ChangeEventHandler, useState } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  useDisclosure,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Trainer } from '../../types'

export const SearchSelect = ({ value, onChange }: InputProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchInput, setSearchInput] = useState<string>('')
  const [matchList, setMatchList] = useState<Trainer>()

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    await setSearchInput(event.target.value)
  }
  return (
    <>
      <Button variant='outline' onClick={onOpen} isFullWidth>
        {value}
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay zIndex={2000}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Select Trainer</DrawerHeader>

            <DrawerBody>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<SearchIcon color='gray.300' />} />
                <Input placeholder='Trainer Name' value={searchInput} onChange={onSearchChange} />
              </InputGroup>
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
