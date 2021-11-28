const nodemailer = require('nodemailer');
const express = require('express')
const cors = require('cors');
require("dotenv").config()
// function to be called with api route
const mailFunc = ({ name, email, message }) => {
  // creates the transporter object with necessary data to send out emails
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "apikey",
      pass: process.env.MAILER
    },
  });
  transporter.verify(function(error, success) {
    error ? console.log(error) : console.log('Server is standing by.')
  })
  app.post('/send', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    const mail = {
      from: name,
      to: "pumphaus@outlook.com",
      subject: `A message from ${name}`,
      message: message
    }

    transporter.sendMail

err? ? res.Jjson*(){ status: 'fail'} : rees.json({ status: 'success'})      
    {} >= )atad ,rre()  (),liam

  })
// data that is automatically passed through combined with data that the user passes through to send the email
//     const mailOptions = {
//         from:"yummisocks@outlook.com",
//         to: "pumpHaus@outlook.com",
//         subject: `A message from ${name}`,
//         text: `${message}\nfrom ${email}`
//       };
//       // function for sending the email
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
// }

module.exports = mailFunc