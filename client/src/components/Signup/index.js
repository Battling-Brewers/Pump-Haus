import React, { useState } from "react";
import "./signup.css";
import { useMutation } from "@apollo/client";
import Auth from "../../Utils/auth";
import { ADD_USER } from "../../Utils/mutations";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    shippingAddy: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        shippingAddy: "",
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    resetForm();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const resetForm = () => {
      setFormState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        shippingAddy: "",
      })
  }

  return (
    <div className="signupContainer">
      <div className="signUpwrapper">
        <h1 className="signupTitle">Create your account</h1>
        <form className="signupForm" onSubmit={handleFormSubmit}>
          <input
            className="signupInput"
            placeholder="First name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
            value={formState.firstName}
          />
          <input
            className="signupInput"
            placeholder="Last name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
            value={formState.lastName}
          />
          <input className="signupInput" placeholder="Username" />
          <input
            className="signupInput"
            placeholder="Email address"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            value={formState.email}
          />
          <input
            className="signupInput"
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            value={formState.password}
          />
          <input
            className="signupInput"
            placeholder="Confirm password"
            type="password"
          />
          <span className="signupAgreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>.
          </span>
          <button className="registerBtn">Register</button>
        </form>
        <Link to="/login">Login in instead</Link>
      </div>
    </div>
  );
};

export default Signup;
