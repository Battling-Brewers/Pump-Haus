import React from "react"

import "./success.css"


const Success = () => {
    return(
    <div className="container">
        <h1>Thank you for your order!</h1>
        <h3>Please expect it to ship out in the next fiscal year.</h3>
        <img alt="king arnold" className="arnoldPic" src="./images/arnold.png" />
    </div>
    )
}

export default Success