const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 3000

require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.post('/api/contact', function(req, res) {
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  })
  const mailOpts = {
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER,
      subject: `Message from Generic Restaruant`,
      text: `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Message: ${req.body.message}
      `
    }
  
  transporter.sendMail(mailOpts, function(err, info) {
    if(err) console.log(err)
    else console.log(info)
  })  
})

app.listen(PORT, function(req, res) {
  console.log(`Server running on port ${PORT}`)
})