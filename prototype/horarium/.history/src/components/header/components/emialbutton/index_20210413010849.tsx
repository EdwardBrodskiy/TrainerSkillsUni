import React from 'react'
import { Button, HStack, Image, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import store from 'store'
import {google} from 'googleapis'
const nodemailer = require('nodemailer')






export const EmailButton = () => {
  return (
    <HStack spacing={4}>
      <Button
        onClick={() => {}}
      >
        Send Email
      </Button>
    </HStack>
  )
}
