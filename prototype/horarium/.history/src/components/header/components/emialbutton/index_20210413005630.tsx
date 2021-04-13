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

async function sendMail (){
  try{
    const accessToken = await oAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
      service:'gmail',
      auth:{
        type:'OAuth2',
        user:'horariumservice@gmail.com',
        clientId:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    })
  
  var mailOptions = { 
    from : 'horariumservice@gmail.com', 
    to : 'nummelo21@gmail.com', 
    subject : 'Hello', 
    text: 'Hello from node.js' 
  }; 
  const result =  await transport.sendMail( mailOptions, (error, info) => { 
    if (error) { 
      return console.log(`error: ${error}`); 
    } 
    console.log(`Message Sent ${info.response}`);
    window.alert("email sent") ; 
  }); 

  }catch(error){
    return error
  }

}




export const EmailButton = () => {
  return (
    <HStack spacing={4}>
      <Button
        onClick={() => sendMail()}
      >
        Send Email
      </Button>
    </HStack>
  )
}
