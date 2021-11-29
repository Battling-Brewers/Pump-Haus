const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config()

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

// app.use(cors());

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

app.post("/send", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  console.log(email, name, message);
  mailFunc(email, name, message);
});

const mailFunc = (from, to, message) => {
  // creates the transporter object with necessary data to send out emails
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587, //25, 587, 465
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "apikey",
      pass: "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",
    },
  });
  // data that is automatically passed through combined with data that the user passes through to send the email
  const mail = {
    from: "yummisocks@outlook.com",
    to: "pumphaus@outlook.com",
    subject: `You have a message!!! by ${from}`,
    text: `${message}\n${to}`,
  };

  transporter.sendMail(mail, (err, data) => {
    console.log("hello");
    err ? console.log(err) : console.log("Success");
  });
};
