import React from 'react'
import { Box, Flex, useColorMode, Image, HStack } from '@chakra-ui/react'
import { Link, useRouteMatch } from 'react-router-dom'
import { DarkModeToggle } from '../DarkMode'
import { NavItem } from './NavItem'
import { MatchParams } from '../../types'
import logo from '../../images/logo.png'
import logoDark from '../../images/logoDark.png'
import { Searchbar } from '../../home/components/searchbar'

export const Header = () => {
  const match = useRouteMatch<MatchParams>()

  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }
  let pageLogo = colorMode === 'light' ? logo : logoDark

  return (
    <Box h='4rem'>
      <Box
        zIndex={1}
        p={4}
        h='4rem'
        bg={bgColor[colorMode]}
        pos='fixed'
        left='0'
        right='0'
        top='0'
        borderBottomWidth='1px'
        width='full'
      >
        <Flex align='center' justifyContent='space-between' w='100%' h='100%'>
          <Box>
            <Link to='/home'>
              <Image alt='logo' src={pageLogo} style={{ maxHeight: '50px' }} />
            </Link>
          </Box>

          <HStack spacing={4}>
            <NavItem>
              <Link to='/home'>Home</Link>
            </NavItem>
            <Searchbar />
            <DarkModeToggle />
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}
