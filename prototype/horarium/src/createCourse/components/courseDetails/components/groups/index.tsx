import React from 'react'
import { Badge, Text, Stack } from '@chakra-ui/react'
import { Group } from '../../../../../types'

type Props = {
  groups: Group[]
}

const groupDisplayer = (groups: Group[]) => {
  var badges = []
  for(var i = 0; i<groups.length; i++) {
    switch(groups[i].name) {
      case "EECS": 
        badges.push(<Badge colorScheme="purple">EECS</Badge>)
        break
      case "ASDF": 
        badges.push(<Badge colorScheme="green">ASDF</Badge>)
        break
      case "HJKL": 
        badges.push(<Badge colorScheme="blue">HJKL</Badge>)
        break
      default: return (<Badge colorScheme="gray">None</Badge>)
    }
  }
  return badges
}

export const Groups = ({ groups }: Props) => {
  return (
    <Stack direction="row">
      <Text>Enroled Groups:</Text>
      {groupDisplayer(groups)}
    </Stack>
  )
}