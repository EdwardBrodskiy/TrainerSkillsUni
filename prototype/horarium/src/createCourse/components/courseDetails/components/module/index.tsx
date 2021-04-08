import React from 'react'
import { Text } from '@chakra-ui/react'
import { Modules } from '../../../../../types'

type Props = {
  modules: Modules
}

const moduleHandler = (module: Modules) => {
  //Temporary handler for the enumeration of Modules
  switch(module) {
    case 0: return 'Databases'
    case 1: return 'Accounting'
    case 2: return 'WebDev'
    case 3: return 'Business'
    default: return null
  }
}

export const Module = ({ modules }: Props) => {
  return (
    <Text>
      Module: {moduleHandler(modules)}
    </Text>
  )
}