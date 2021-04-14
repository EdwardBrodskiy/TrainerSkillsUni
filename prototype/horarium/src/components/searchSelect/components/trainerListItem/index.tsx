import React from 'react'
import { Badge, Box, BoxProps, Flex, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import { Trainer } from '../../../../types'

type Props = {
  trainer: Trainer
}

export const TrainerListItem = ({ trainer, ...rest }: Props & BoxProps) => {
  const skills_tags = trainer.skills.map((skill, index) => (
    <WrapItem key={index}>
      <Badge size='sm'>{skill}</Badge>
    </WrapItem>
  ))
  return (
    <Box {...rest} my={4} borderLeft='2px' px={2}>
      <Flex align='center' justify='space-between'>
        <Heading size='md' mr={4}>
          {trainer.name}
        </Heading>
        <Wrap direction='row-reverse'>{skills_tags}</Wrap>
      </Flex>
    </Box>
  )
}
