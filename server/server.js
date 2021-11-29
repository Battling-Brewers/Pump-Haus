const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const nodemailer = require("nodemailer");
const sgTransport = require('nodemailer-sendgrid-transport')

const cors = require("cors");
require("dotenv").config();


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
  });
});

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "apikey",
    pass: process.env.SG_API,
  },
});

// const options = {
//   auth: {
//     api_user: process.env.SG_USER,
//     api_pass: process.env.SG_PAS
//   }
// }

// const transporter = nodemailer.createTransport(sgTransport(options))

transporter.verify(function (error, success) {
  error ? console.log(error) : console.log("Server is standing by.");
});
app.post("/send", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  const mail = {
    from: "pumphaus@outlook.com",
    to: "pumphaus@outlook.com",
    subject: `A message from ${name} @ ${email}`,
    message: `${message}\n${name}\n${email}`
  };

  transporter.sendMail(mail, (err, data) => {
    err ? res.json({ status: "fail", error: err }) : res.json({ status: "success" });
  });
});