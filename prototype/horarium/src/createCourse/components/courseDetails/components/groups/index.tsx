import React from 'react'
import { Badge, Text, Flex } from '@chakra-ui/react'
import { Group } from '../../../../../types'

type Props = {
  groups: Group[]
}

const groupDisplayer = (groups: Group[]) => {
  var badges = []
  for(var i = 0; i<groups.length; i++) {
    switch(groups[i].name) {
      case "EECS": 
        badges.push(<Badge mr='2' colorScheme="purple">EECS</Badge>)
        break
      case "ASDF": 
        badges.push(<Badge mr='2' colorScheme="green">ASDF</Badge>)
        break
      case "HJKL": 
        badges.push(<Badge mr='2' colorScheme="blue">HJKL</Badge>)
        break
      default: return (<Badge mr='2' colorScheme="gray">None</Badge>)
    }
  }
  return badges
}

export const Groups = ({ groups }: Props) => {
  return (
    <Flex direction='row' align='center' mb='2' >
      <Text fontWeight='bold' mr='2'>Enroled Groups: </Text>
      {groupDisplayer(groups)}
    </Flex>
  )
}