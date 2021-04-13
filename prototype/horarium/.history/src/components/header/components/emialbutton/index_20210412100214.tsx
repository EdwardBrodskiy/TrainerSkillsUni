import React from 'react'
import { Button, HStack, Image, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import store from 'store'

import * as nodemailer from 'nodemailer'; 

interface Email{
  tite: String
  body: String
  sender: String
  reciver: String | []
}

export  const SendEmail = () =>{
  let title ="test"
  let body= "test" /// will be comppsed with email
  let sender ="test"
  let reciver ="test"


  var transporter = nodemailer.createTransport( 
    `smtps://<username>%40gmail.com:<password>@smtp.gmail.com` 
  ); 


var mailOptions = { 
  from : 'from_test@gmail.com', 
  to : 'to_test@gmail.com', 
  subject : 'Hello', 
  text: 'Hello from node.js' 
}; 

transporter.sendMail( mailOptions, (error, info) => { 
  if (error) { 
    return console.log(`error: ${error}`); 
  } 
  console.log(`Message Sent ${info.response}`); 
}); 

window.alert("Test") 
}

export const EmailButton = () => {
  return (
    <HStack spacing={4}>
      <Button
        onClick={() => SendEmail()}
      >
        Send Email
      </Button>
    </HStack>
  )
}
