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


  var transporter = nodemailer.createTransport( {
    service: 'gmail',
    auth:{
      user:"masterlian657@gmail.com",
      pass:"lattecondensato72"
    }
  }
  ); 


var mailOptions = { 
  from : 'masterlian657@gmail.com', 
  to : 'nummelo21@gmail.com', 
  subject : 'Hello', 
  text: 'Hello from node.js' 
}; 

transporter.sendMail( mailOptions, (error, info) => { 
  if (error) { 
    return console.log(`error: ${error}`); 
  } 
  console.log(`Message Sent ${info.response}`);
  window.alert("email sent") ; 
}); 


}

export const EmailButton = () => {
  return (
    <HStack spacing={4}>
      <Button
        onClick={SendEmail()}
      >
        Send Email
      </Button>
    </HStack>
  )
}
