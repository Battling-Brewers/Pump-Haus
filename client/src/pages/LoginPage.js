import React from "react";
import Login from "../components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <Link to="/signup">Not a user yet? Register with us today!</Link>
            <Login />
        </div>
    );
};

export default LoginPage;