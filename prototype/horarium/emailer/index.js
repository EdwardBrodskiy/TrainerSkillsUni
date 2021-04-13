const { google } = require('googleapis')
const nodemailer = require('nodemailer')

const CLIENT_ID = '37885473957-3rajlmgj7ma1ikemb34bo5jh1q11pu12.apps.googleusercontent.com'
const CLIENT_SECRET = 'mguzCDW-r8sTx2eCuM-NB9ml'
const CLIENT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN =
  '1//04Tls_vaMqCH-CgYIARAAGAQSNwF-L9IrL2S3yaj1FoQWqaMfWz04ueCBpmVlax0wS3V6-v4A1mtfjWFGPvCpVze7nCRAEiXUFMU'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, CLIENT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const sendMail = () => {
  try {
    const accessToken = oAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'horariumservice@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    })

    var mailOptions = {
      from: 'horariumservice@gmail.com',
      to: 'brodskiedward@gmail.com',
      subject: 'Hello',
      text: 'Hello from node.js',
    }

    transport.sendMail(mailOptions)
  } catch (error) {
    return error
  }
}

sendMail()