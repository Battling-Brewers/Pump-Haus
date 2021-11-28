import React from "react";
import Signup from "../components/Signup";
import { Link } from "react-router-dom";

const SignupPage = () => {
    return (
        <div>
            <Link to="/login">Already a user? Login instead</Link>
            <Signup />
        </div>
    );
};

export default SignupPage;