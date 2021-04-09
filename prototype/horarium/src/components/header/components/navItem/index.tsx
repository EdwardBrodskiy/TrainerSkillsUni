import React, { PropsWithChildren } from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

type Props = {
  to: string
}

export const NavItem = ({ to, children }: Props & PropsWithChildren<{}>) => {
  return (
    <Link as={ReactLink} to={to}>
      <Flex height='4rem' align='flex-end'>
        <Text fontSize='3xl' fontFamily='passion one' as='b' px={4}>
          {children}
        </Text>
      </Flex>
    </Link>
  )
}
