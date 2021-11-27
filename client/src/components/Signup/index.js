import React from 'react'
import './signup.css';

const Signup = () => {
    return (
        <div className="signupContainer">
            <div className="signUpwrapper">
                <h1 className="signupTitle">Create your account</h1>
                <form className="signupForm">
                    <input className="signupInput" placeholder="First name" />
                    <input className="signupInput" placeholder="Last name" />
                    <input className="signupInput" placeholder="Username" />
                    <input className="signupInput" placeholder="Email address" />
                    <input className="signupInput" placeholder="Password" type="password"/>
                    <input className="signupInput" placeholder="Confirm password" type="password"/>
                    <span className="signupAgreement">
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.
                    </span>
                    <button className="registerBtn">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;