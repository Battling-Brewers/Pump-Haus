const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
// function to be called with api route
const mailFunc = () => {
  // creates the transporter object with necessary data to send out emails
//   const transporter = nodemailer.createTransport({
//     host: "smtp.sendgrid.net",
//     port: 587,
//     secure: false, // upgrade later with STARTTLS
//     auth: {
//       user: process.env.SG_USER,
//       pass: process.env.SG_PAS,
//     },
//   });
//   transporter.verify(function (error, success) {
//     error ? console.log(error) : console.log("Server is standing by.");
//   });
//   app.post("/send", (req, res, next) => {
//     let name = req.body.name;
//     let email = req.body.email;
//     let message = req.body.message;

//     const mail = {
//       from: email,
//       to: "pumphaus@outlook.com",
//       subject: `A message from ${name}`,
//       message: `${message}\n${name}\n${email}`
//     };

//     transporter.sendMail(mail, (err, data) => {
//       err ? res.json({ status: "fail" }) : res.json({ status: "success" });
//     });
//   });
};
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

module.exports = mailFunc;
