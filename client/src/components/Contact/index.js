import React, { useState } from "react";
import "./contact.css";
import "materialize-css";
import API from "../../Utils/api";
import axios from "axios";

const Contact = () => {
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [messageState, setMessageState] = useState("");
  const onNameChange = (e) => {
    setNameState(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmailState(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessageState(e.target.value);
  };
  const submitEmailForm = (e) => {
    e.preventDefault();
    API.post("http://localhost:3001/send", {
      name: nameState,
      email: emailState,
      message: messageState,
    })
    setNameState("");
    setEmailState("");
    setMessageState("");
    console.log(nameState, emailState, messageState)
    // window.location.reload()
    // .then(() => {

    // })
    // .then((response) => {
    //   if (response.data.status === "success") {
    //     alert("Message Sent.");
    //     // resetForm();
    //   } else if (response.data.status === "fail") {
    //     alert("Message failed to send.");
    //     console.log(response.data.error)
    //   }
    // });
    // resetForm();
};
const resetForm = async () => {
    await setNameState("");
    await setEmailState("");
    await setMessageState("");
    console.log(nameState, emailState, messageState)
  };
  return (
    <div className="container">
      <div className="row contact-container">
        <div className="col m10 offset-m1 s12">
          <h2 className="center-align">Contact Form</h2>
          <div className="row">
            <form className="col m8 offset-m2 s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" type="text" onChange={onNameChange} value={nameState}/>
                  <label for="name">Name</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    onChange={onEmailChange}
                    value={emailState}
                  />
                  <label for="email">Email</label>
                </div>
                <div className="input-field col s12">
                  <textarea
                    id="message"
                    className="materialize-textarea"
                    onChange={onMessageChange}
                    value={messageState}
                  ></textarea>
                  <label for="message">Message</label>
                </div>
                <div className="col s12">
                  <p className="right-align">
                    <button
                      class="btn btn-large waves-effect waves-light"
                      type="button"
                      name="action"
                      onClick={submitEmailForm}
                    >
                      Send Message
                    </button>
                  </p>
                </div>
              </div>
              <div className="row"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
