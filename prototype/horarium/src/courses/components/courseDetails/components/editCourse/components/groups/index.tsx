import React from 'react'
import { Tag, HStack } from '@chakra-ui/react'
import { Group } from '../../../../../../../types'

type Props = {
  groups: Group[]
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
