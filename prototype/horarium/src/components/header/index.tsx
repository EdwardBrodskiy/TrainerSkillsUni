import React from 'react'
import { Box, Flex, useColorMode, Image, HStack } from '@chakra-ui/react'
import { Link, useRouteMatch } from 'react-router-dom'
import { DarkModeToggle } from '../DarkMode'
import { MatchParams } from '../../types'
import logo from '../../images/logo.png'
import logoDark from '../../images/logoDark.png'
import { isAuth } from '../../auth'
import { UserInfo } from './components/userInfo'

export const Header = () => {
  const match = useRouteMatch<MatchParams>()

  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }
  const pageLogo = { light: logo, dark: logoDark }

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
          <HStack spacing={10} alignContent='baseline'>
            <Link to='/courses'>
              <Image alt='logo' src={pageLogo[colorMode]} fallbackSrc={logoDark} height='3.5rem' />
            </Link>
          </HStack>

          <HStack spacing={4}>
            {isAuth() && (
              <HStack spacing={10}>
                <UserInfo />
              </HStack>
            )}

            <DarkModeToggle />
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}
