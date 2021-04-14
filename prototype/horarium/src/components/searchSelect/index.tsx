import React, { ChangeEventHandler, useState } from 'react'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Role, Trainer, User } from '../../types'
import store from 'store'
import { TrainerListItem } from './components/trainerListItem'

type Props = {
  name: string
  value: string
  onChange: (name: string, value: string) => void
  errorBorderColor: string
  isReadOnly: boolean
}

export const SearchSelect = ({ name, value, onChange, errorBorderColor, isReadOnly }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const all_trainers: Trainer[] = store.get('users').filter((user: User): user is Trainer => {
    return user.permission === Role.Trainer
  })
  const [matchList, setMatchList] = useState<Trainer[]>(all_trainers)
  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMatchList(
      all_trainers.filter(
        (trainer) =>
          trainer.name.match(new RegExp(event.target.value, 'i')) ||
          trainer.skills.filter((skill) => skill.match(new RegExp(event.target.value, 'i')))
            .length > 0,
      ),
    )
  }

  const found_trainers = matchList.map((trainer, index) => (
    <TrainerListItem
      key={index}
      onClick={() => {
        onChange(name, trainer.name)
        onClose()
      }}
      trainer={trainer}
    />
  ))
  //Collision working
  const trainer = all_trainers.find((user: User): user is Trainer => user.name === value)
  //Another Filter for time
  return (
    <Box>
      <Button variant='outline' onClick={onOpen} isFullWidth textAlign='left' px={0}>
        {trainer !== undefined && <TrainerListItem trainer={trainer} width='100%' />}
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay zIndex={2000}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Select Trainer</DrawerHeader>

            <DrawerBody>
              <InputGroup mb={10}>
                <InputLeftElement pointerEvents='none' children={<SearchIcon color='gray.300' />} />
                <Input placeholder='Trainer Name' onChange={onSearchChange} />
              </InputGroup>

              {found_trainers.length > 0 ? (
                found_trainers
              ) : (
                <Alert status='warning'>
                  <AlertIcon />
                  No matches found
                </Alert>
              )}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}
