import { Box } from '@chakra-ui/react'
import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { Header } from './components/header'
import { Home } from './home'
import { Login } from './login'
import { createCourse } from './createCourse'

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
          <Route exact key='route-home' path='/home' component={Home} />
          <Route exact key='route-createCourse' path='/create-course' component={createCourse} />
          <Redirect from='*' to='/' /> {/* TODO: add 404 page instead */}
        </Switch>
      </Box>
    </Box>
  )
}

export default Routes
