import React from 'react'
import { Box, Flex, useColorMode, Spacer } from '@chakra-ui/react'
import { Link, useRouteMatch } from 'react-router-dom'
import { DarkModeToggle } from '../DarkMode'
import { NavItem } from './NavItem'
import { MatchParams, Modules } from '../../types'
import logo from '../../images/logo.png'
import logoDark from '../../images/logoDark.png'
import { Searchbar } from '../../home/components/searchbar'
import { generateKeyPair } from 'crypto'

export const Header = () => {
  const match = useRouteMatch<MatchParams>()

  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }
  let pageLogo = (colorMode === 'light') ? logo : logoDark;

  return (
    <Box h='4rem'>
      <Box
        zIndex={1}
        p={4}
        h='4rem'
        bg={bgColor[colorMode]}
        pos={'fixed'}
        left='0'
        right='0'
        top='0'
        borderBottomWidth='1px'
        width='full'
      >
        
        <Flex align='center' w='100%' h='100%'>
          <Box>
            <Link to='/'><img alt='logo' src={pageLogo} style={{maxHeight:'50px'}}/></Link>
          </Box>
          <Spacer />
          <Box justify='space-evenly' maxWidth='180px'> 
            <NavItem>
              <Link to='/'>Home</Link>
            </NavItem>
          </Box>
          <Box margin='0 10px'>
            <Searchbar/>
          </Box>
          <Box>
            <DarkModeToggle />
          </Box>
        </Flex>

        {/* <Flex w='100%' h='100%'>
          <Flex align='center'>
            <Link to='/'><img alt='logo' src={pageLogo} style={{maxHeight:'50px'}}/></Link>
          </Flex>
          <Flex justify='space-evenly' maxWidth='180px'>
            <NavItem>
              <Link to='/'>Home</Link>
            </NavItem>
          </Flex>
          <Spacer />
          <Flex w='60%' align='left'>
            <DarkModeToggle />
          </Flex>
        </Flex> */}
      </Box>
    </Box>
  )
}
