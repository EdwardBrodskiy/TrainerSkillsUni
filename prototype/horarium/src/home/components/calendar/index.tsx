import React from 'react'
import { Box, Grid, useColorMode } from '@chakra-ui/react'

const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const Calendar = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }
  const altBgColor = { light: 'gray.300', dark: 'gray.600' }

  const days = week_days.map((day, index) => (
    <Box w='100%' h='14' bg={altBgColor[colorMode]} padding='3' fontSize='20'>
      {day}
    </Box>
  ))
  const table: any[] = new Array(9 * 7).fill(<Box w='100%' h='16' bg={bgColor[colorMode]} />)
  return (
    <Grid templateColumns='repeat(7, 1fr)' gap={1}>
      {days}
      {table}
    </Grid>
  )
}
