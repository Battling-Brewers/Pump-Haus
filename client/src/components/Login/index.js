import React, { useState } from "react";
import "./login.css";
import { LOGIN } from "../../Utils/mutations";
import Auth from "../../Utils/auth";
import { useMutation } from "@apollo/client";
import {Link} from "react-router-dom"

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
          <Link className="loginLink" to="/signup">
            Register
          </Link>
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
