import React, { useState } from "react";
import "./login.css";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({});

      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <h1 className="loginTitle">Sign in</h1>
        <form className="loginForm" onSubmit={handleFormSubmit}>
          <input
            placeholder="Username"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
          <button className="loginBtn">Sign in</button>
          <a className="loginLink" href="https://youtube.com">
            Forgot your password?
          </a>
          <a className="loginLink" href="https://twitter.com">
            Register
          </a>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
