import { Box } from '@chakra-ui/react'
import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { isAuth } from './auth'
import { Header } from './components/header'
import { Home } from './home'
import { Login } from './login'

export type MatchParams = {
  isExact: string
  path: string
  url: string
}

const Routes = () => {
  const match = useRouteMatch<MatchParams>()
  return (
    <Box bgGradient='linear(to-r, blue.200, grey.500)'>
      <Header />
      <Box>
        <Switch>
          <Route exact key='route-login' path='/' component={Login} />
          {!isAuth() && <Redirect to='/' />}
          <Route key='route-home' path='/home' component={Home} />
          <Redirect from='*' to='/' /> {/* TODO: add 404 page instead */}
        </Switch>
      </Box>
    </Box>
  )
}

export default Routes
