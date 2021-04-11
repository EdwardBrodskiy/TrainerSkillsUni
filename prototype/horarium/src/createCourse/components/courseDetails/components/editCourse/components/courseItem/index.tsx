import React, { PropsWithChildren } from 'react'
import { Text, Flex, Heading, Box } from '@chakra-ui/react'

type Props = {
  title: string
}

export const CourseItem = ({ title, children }: Props & PropsWithChildren<{}>) => {
  return (
    <Flex direction='row' mb='2' justify='space-between' align='center' width='100%'>
      <Heading fontWeight='bold' width='30%' textAlign='right' mr={10} my={3}>
        {title}
      </Heading>
      <Box flex='1'>{children}</Box>
    </Flex>
  )
}
