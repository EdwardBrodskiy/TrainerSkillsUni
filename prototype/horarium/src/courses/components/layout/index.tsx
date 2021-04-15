import React from 'react'
import { Grid, GridProps, Box, BoxProps, useColorMode } from '@chakra-ui/react'

export const ViewGrid = (props: GridProps) => (
  <Grid {...props} templateColumns='16rem minmax(0, 1fr)' gap={0} />
)

export const ViewSide = (props: BoxProps) => {
  const { colorMode } = useColorMode()
  const borderColor = { light: 'gray.200', dark: 'gray.600' }
  return (
    <Box
      {...props}
      overflow='hidden'
      borderRightStyle='solid'
      borderRightColor={borderColor[colorMode]}
      borderRightWidth='1px'
    />
  )
}
