import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <h1 className="loginTitle">Sign in</h1>
                <form className="loginForm">
                    <input placeholder="Username" />
                    <input placeholder="Password" type="password"/>
                    <button className="loginBtn">Sign in</button>
                    <a className="loginLink" href="https://youtu.be/dQw4w9WgXcQ">Forgot your password?</a>
                    <Link className="loginLink" to="/signup">Register</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;