import React from 'react'
import {useEffect} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Router } from 'react-router-dom'
import './App.css'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import Routes from './routes'
import { createBrowserHistory } from 'history'
import { setup_local_storage } from './schema'

const history = createBrowserHistory()

function App() {
  setup_local_storage()

  return (
    <ChakraProvider>
      <CSSReset />
      <Router history={history}>
        <Routes />
      </Router>
    </ChakraProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
