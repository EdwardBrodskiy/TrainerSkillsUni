import React from 'react'
import { Badge, Text, Flex, color, Tag, HStack } from '@chakra-ui/react'
import { Group } from '../../../../../types'

type Props = {
  groups: Group[]
}

const groupDisplayer = (groups: Group[]) => {
  var badges = []
  for (var i = 0; i < groups.length; i++) {
    switch (groups[i].name) {
      case 'EECS':
        badges.push(
          <Badge mr='2' colorScheme='purple'>
            EECS
          </Badge>,
        )
        break
      case 'ASDF':
        badges.push(
          <Badge mr='2' colorScheme='green'>
            ASDF
          </Badge>,
        )
        break
      case 'HJKL':
        badges.push(
          <Badge mr='2' colorScheme='blue'>
            HJKL
          </Badge>,
        )
        break
      default:
        return (
          <Badge mr='2' colorScheme='gray'>
            None
          </Badge>
        )
    }
  }
  return badges
}

const colors = {
  EECS: 'purple',
  ASDF: 'green',
  HJKL: 'blue',
}

export const Groups = ({ groups }: Props) => {
  const group_badges = groups.map((group, index) => {
    return (
      <Tag key={index} size='lg' colorScheme={colors[group.name as keyof typeof colors] || 'gray'}>
        {group.name}
      </Tag>
    )
  })
  return (
    <HStack direction='row' spacing={4}>
      {group_badges}
    </HStack>
  )
}
