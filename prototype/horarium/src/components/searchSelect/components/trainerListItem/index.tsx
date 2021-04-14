import React from 'react'
import { Badge, Box, BoxProps, Flex, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import { Course, Trainer } from '../../../../types'
import { AuthCourse } from '../../../../auth'
import store from 'store'

type Props = {
  trainer: Trainer
}

export const TrainerListItem = ({ trainer, ...rest }: Props & BoxProps) => {
  const courses: Course[] = store.get('courses')
  const skills_tags = trainer.skills.map((skill, index) => (
    <WrapItem key={index}>
      <Badge size='sm' colorScheme={courses[AuthCourse()].module === skill ? 'green' : 'yellow'}>
        {skill}
      </Badge>
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
