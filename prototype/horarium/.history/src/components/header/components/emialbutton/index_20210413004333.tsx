import React from 'react'
import { Button, HStack, Image, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import store from 'store'
import {google} from 'googleapis'
import * as nodemailer from 'nodemailer'; 

const CLIENT_ID ='37885473957-3rajlmgj7ma1ikemb34bo5jh1q11pu12.apps.googleusercontent.com'
const CLIENT_SECRET ='mguzCDW-r8sTx2eCuM-NB9ml'
const CLIENT_URI ='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN ='1//04Tls_vaMqCH-CgYIARAAGAQSNwF-L9IrL2S3yaj1FoQWqaMfWz04ueCBpmVlax0wS3V6-v4A1mtfjWFGPvCpVze7nCRAEiXUFMU'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,CLIENT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

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
        onClick={() => SendEmail()}
      >
        Send Email
      </Button>
    </HStack>
  )
}
