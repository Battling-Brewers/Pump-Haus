import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <h1 className="loginTitle">Sign in</h1>
                <form className="loginForm">
                    <input placeholder="Username" />
                    <input placeholder="Password" type="password"/>
                    <button className="loginBtn">Sign in</button>
                    <a classname="loginLink" href="https://youtube.com">Forgot your password?</a>
                    <a classname="loginLink" href="https://twitter.com">Register</a>
                </form>
            </div>
        </div>
    )
}

export default Login;